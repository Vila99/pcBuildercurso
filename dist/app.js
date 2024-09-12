(()=>{"use strict";const e={cpu:{value:null,price:0,image:""},motherboard:{value:null,price:0,image:""},ram:{value:null,price:0,image:""},storage:{value:null,price:0,image:""},gpu:{value:null,price:0,image:""}},i={cpu:"Procesador",motherboard:"Placa Base",ram:"Memoria RAM",storage:"Disco Duro",gpu:"Tarjeta Gráfica"},a={cpu:{"intel-i5":{price:200,image:"images/intel-i5.jpg"},"intel-i7":{price:300,image:"images/intel-i7.jpg"},"amd-ryzen5":{price:250,image:"images/amd-ryzen5.jpg"},"amd-ryzen7":{price:350,image:"images/amd-ryzen7.jpg"}},motherboard:{"asus-prime":{price:100,image:"images/asus-prime.jpg"},"msi-tomahawk":{price:150,image:"images/msi-tomahawk.jpg"},"gigabyte-aorus":{price:200,image:"images/gigabyte-aorus.jpg"}},ram:{"corsair-8gb":{price:50,image:"images/corsair-8gb.jpg"},"kingston-16gb":{price:80,image:"images/kingston-16gb.jpg"},"gskill-32gb":{price:150,image:"images/gskill-32gb.jpg"}},storage:{"samsung-ssd-500gb":{price:70,image:"images/samsung-ssd-500gb.jpg"},"wd-hdd-1tb":{price:50,image:"images/wd-hdd-1tb.jpg"},"crucial-ssd-1tb":{price:100,image:"images/crucial-ssd-1tb.jpg"}},gpu:{"nvidia-rtx3060":{price:300,image:"images/nvidia-rtx3060.jpg"},"amd-rx6700xt":{price:400,image:"images/amd-rx6700xt.jpg"},"nvidia-rtx3080":{price:700,image:"images/nvidia-rtx3080.jpg"}}};function t(){const a=document.getElementById("selected-list");a.innerHTML="";let r=0;for(let m in e)if(e[m].value){const c=document.createElement("li"),l=document.createElement("img");l.src=e[m].image,l.alt=e[m].value,l.width=50,l.height=50,c.appendChild(l),c.appendChild(document.createTextNode(`${i[m]}: ${e[m].value} - $${e[m].price}`));const s=document.createElement("button");s.textContent="Eliminar",s.className="delete-btn",s.onclick=()=>{return e[a=m]={value:null,price:0,image:""},document.getElementById(a).value="",g(`Eliminado: ${i[a]}`),t(),void n();var a},c.appendChild(s),a.appendChild(c),r+=e[m].price}const m=document.createElement("li");m.textContent=`Precio Total: $${r}`,m.style.fontWeight="bold",a.appendChild(m)}function g(e){const i=document.getElementById("log"),a=document.createElement("p");a.textContent=e,i.appendChild(a)}function n(){const a=Object.keys(e).filter((i=>!e[i].value));a.length>0?g(`Componentes faltantes: ${a.map((e=>i[e])).join(", ")}`):g("¡Todos los componentes han sido seleccionados!")}document.querySelectorAll("select").forEach((r=>{r.addEventListener("change",(r=>{const m=r.target.id,c=r.target.value;c&&!e[m].value?(e[m]={value:c,price:a[m][c].price,image:a[m][c].image},g(`Añadido: ${i[m]} - ${c} - $${e[m].price}`),t(),n()):c&&e[m].value?(g(`Error: Ya has seleccionado un ${i[m]}`),r.target.value=""):!c&&e[m].value&&(e[m]={value:null,price:0,image:""},g(`Eliminado: ${i[m]}`),t(),n())}))}))})();