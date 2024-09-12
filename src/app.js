import './styles.css';

const components = {
    cpu: { value: null, price: 0, image: '' },
    motherboard: { value: null, price: 0, image: '' },
    ram: { value: null, price: 0, image: '' },
    storage: { value: null, price: 0, image: '' },
    gpu: { value: null, price: 0, image: '' }
};

const componentNames = {
    cpu: "Procesador",
    motherboard: "Placa Base",
    ram: "Memoria RAM",
    storage: "Disco Duro",
    gpu: "Tarjeta Gráfica"
};

const componentDetails = {
    cpu: {
        "intel-i5": { price: 200, image: 'images/intel-i5.jpg' },
        "intel-i7": { price: 300, image: 'images/intel-i7.jpg' },
        "amd-ryzen5": { price: 250, image: 'images/amd-ryzen5.jpg' },
        "amd-ryzen7": { price: 350, image: 'images/amd-ryzen7.jpg' }
    },
    motherboard: {
        "asus-prime": { price: 100, image: 'images/asus-prime.jpg' },
        "msi-tomahawk": { price: 150, image: 'images/msi-tomahawk.jpg' },
        "gigabyte-aorus": { price: 200, image: 'images/gigabyte-aorus.jpg' }
    },
    ram: {
        "corsair-8gb": { price: 50, image: 'images/corsair-8gb.jpg' },
        "kingston-16gb": { price: 80, image: 'images/kingston-16gb.jpg' },
        "gskill-32gb": { price: 150, image: 'images/gskill-32gb.jpg' }
    },
    storage: {
        "samsung-ssd-500gb": { price: 70, image: 'images/samsung-ssd-500gb.jpg' },
        "wd-hdd-1tb": { price: 50, image: 'images/wd-hdd-1tb.jpg' },
        "crucial-ssd-1tb": { price: 100, image: 'images/crucial-ssd-1tb.jpg' }
    },
    gpu: {
        "nvidia-rtx3060": { price: 300, image: 'images/nvidia-rtx3060.jpg' },
        "amd-rx6700xt": { price: 400, image: 'images/amd-rx6700xt.jpg' },
        "nvidia-rtx3080": { price: 700, image: 'images/nvidia-rtx3080.jpg' }
    }
};

function updateSelectedList() {
    const selectedList = document.getElementById('selected-list');
    selectedList.innerHTML = '';
    let totalPrice = 0;
    for (let component in components) {
        if (components[component].value) {
            const li = document.createElement('li');
            const img = document.createElement('img');
            img.src = components[component].image;
            img.alt = components[component].value;
            img.width = 50;
            img.height = 50;
            li.appendChild(img);
            li.appendChild(document.createTextNode(`${componentNames[component]}: ${components[component].value} - $${components[component].price}`));
            
            // Añadir botón de eliminación
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.className = 'delete-btn';
            deleteButton.onclick = () => removeComponent(component);
            li.appendChild(deleteButton);
            
            selectedList.appendChild(li);
            totalPrice += components[component].price;
        }
    }
    const totalLi = document.createElement('li');
    totalLi.textContent = `Precio Total: $${totalPrice}`;
    totalLi.style.fontWeight = 'bold';
    selectedList.appendChild(totalLi);
}

function removeComponent(componentType) {
    components[componentType] = { value: null, price: 0, image: '' };
    document.getElementById(componentType).value = '';
    logMessage(`Eliminado: ${componentNames[componentType]}`);
    updateSelectedList();
    checkMissingComponents();
}

function logMessage(message) {
    const log = document.getElementById('log');
    const p = document.createElement('p');
    p.textContent = message;
    log.appendChild(p);
}

function checkMissingComponents() {
    const missing = Object.keys(components).filter(component => !components[component].value);
    if (missing.length > 0) {
        logMessage(`Componentes faltantes: ${missing.map(comp => componentNames[comp]).join(', ')}`);
    } else {
        logMessage('¡Todos los componentes han sido seleccionados!');
    }
}

document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', (event) => {
        const componentType = event.target.id;
        const selectedValue = event.target.value;

        if (selectedValue && !components[componentType].value) {
            components[componentType] = {
                value: selectedValue,
                price: componentDetails[componentType][selectedValue].price,
                image: componentDetails[componentType][selectedValue].image
            };
            logMessage(`Añadido: ${componentNames[componentType]} - ${selectedValue} - $${components[componentType].price}`);
            updateSelectedList();
            checkMissingComponents();
        } else if (selectedValue && components[componentType].value) {
            logMessage(`Error: Ya has seleccionado un ${componentNames[componentType]}`);
            event.target.value = '';
        } else if (!selectedValue && components[componentType].value) {
            components[componentType] = { value: null, price: 0, image: '' };
            logMessage(`Eliminado: ${componentNames[componentType]}`);
            updateSelectedList();
            checkMissingComponents();
        }
    });
});