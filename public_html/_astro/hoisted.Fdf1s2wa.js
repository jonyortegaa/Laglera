function A(){const a=document.getElementById("menu-toggle"),e=document.getElementById("mobile-menu");!a||!e||(a.addEventListener("click",()=>{const t=!e.classList.contains("hidden");e.classList.toggle("hidden"),a.setAttribute("aria-expanded",String(!t))}),e.querySelectorAll("a").forEach(t=>{t.addEventListener("click",()=>{e.classList.add("hidden"),a.setAttribute("aria-expanded","false")})}))}function S(){document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",e=>{e.preventDefault();const t=a.getAttribute("href");if(!t)return;const r=document.querySelector(t);if(!r)return;const d=r.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:d,behavior:"smooth"})})})}document.addEventListener("DOMContentLoaded",()=>{A(),S()});document.addEventListener("DOMContentLoaded",()=>{function a(e){const t=document.querySelector(`.carousel-track[data-carousel="${e}"]`),r=document.querySelector(`.carousel-prev[data-carousel="${e}"]`),u=document.querySelector(`.carousel-next[data-carousel="${e}"]`),g=document.querySelector(`.carousel-container[data-carousel="${e}"]`);if(!t||!r||!u)return;let d,c=!1,m=!1;function p(){return t.children[0].offsetWidth}function h(){if(m)return;m=!0;const n=p();t.style.transition="transform 600ms ease-in-out",t.style.transform=`translateX(-${n}px)`,t.addEventListener("transitionend",function o(){t.removeEventListener("transitionend",o),t.style.transition="none",t.style.transform="translateX(0)",t.appendChild(t.children[0]),m=!1})}function f(){if(m)return;m=!0;const n=p();t.style.transition="none",t.insertBefore(t.children[t.children.length-1],t.children[0]),t.style.transform=`translateX(-${n}px)`,t.offsetHeight,t.style.transition="transform 600ms ease-in-out",t.style.transform="translateX(0)",t.addEventListener("transitionend",function o(){t.removeEventListener("transitionend",o),m=!1})}function y(){L(),d=setInterval(()=>{c||h()},3e3)}function L(){d&&clearInterval(d)}u.addEventListener("click",()=>{h(),y()}),r.addEventListener("click",()=>{f(),y()}),g.addEventListener("mouseenter",()=>{c=!0}),g.addEventListener("mouseleave",()=>{c=!1});let v=0,l=0,i=!1;t.addEventListener("touchstart",n=>{v=n.changedTouches[0].clientX,l=v,i=!0,c=!0,t.style.transition="none"},{passive:!0}),t.addEventListener("touchmove",n=>{if(!i)return;l=n.changedTouches[0].clientX;const o=l-v;t.style.transform=`translateX(${o}px)`},{passive:!0}),t.addEventListener("touchend",()=>{if(!i)return;i=!1;const n=v-l;t.style.transition="transform 600ms ease-in-out",t.style.transform="translateX(0)",Math.abs(n)>50&&(n>0?h():f()),c=!1,y()},{passive:!0}),y()}a("personas"),a("empresas")});document.addEventListener("DOMContentLoaded",()=>{const a="companies",e=document.querySelector(`.carousel-track[data-carousel="${a}"]`),t=document.querySelector(`.carousel-prev[data-carousel="${a}"]`),r=document.querySelector(`.carousel-next[data-carousel="${a}"]`),u=document.querySelector(`.carousel-container[data-carousel="${a}"]`);if(!e||!t||!r||!u)return;let g,d=!1,c=!1;function m(){return e.children[0].offsetWidth}function p(){if(c)return;c=!0;const i=m();e.style.transition="transform 600ms ease-in-out",e.style.transform=`translateX(-${i}px)`,e.addEventListener("transitionend",function n(){e.removeEventListener("transitionend",n),e.style.transition="none",e.style.transform="translateX(0)",e.appendChild(e.children[0]),c=!1})}function h(){if(c)return;c=!0;const i=m();e.style.transition="none",e.insertBefore(e.children[e.children.length-1],e.children[0]),e.style.transform=`translateX(-${i}px)`,e.offsetHeight,e.style.transition="transform 600ms ease-in-out",e.style.transform="translateX(0)",e.addEventListener("transitionend",function n(){e.removeEventListener("transitionend",n),c=!1})}function f(){y(),g=setInterval(()=>{d||p()},2500)}function y(){g&&clearInterval(g)}r.addEventListener("click",()=>{p(),f()}),t.addEventListener("click",()=>{h(),f()}),u.addEventListener("mouseenter",()=>{d=!0}),u.addEventListener("mouseleave",()=>{d=!1});let L=0,v=0,l=!1;e.addEventListener("touchstart",i=>{L=i.changedTouches[0].clientX,v=L,l=!0,d=!0,e.style.transition="none"},{passive:!0}),e.addEventListener("touchmove",i=>{if(!l)return;v=i.changedTouches[0].clientX;const n=v-L;e.style.transform=`translateX(${n}px)`},{passive:!0}),e.addEventListener("touchend",()=>{if(!l)return;l=!1;const i=L-v;e.style.transition="transform 600ms ease-in-out",e.style.transform="translateX(0)",Math.abs(i)>50&&(i>0?p():h()),d=!1,f()},{passive:!0}),f()});document.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("tipo-seguro"),e=document.getElementById("dynamic-fields"),t=document.getElementById("datos-tomador"),r=document.getElementById("campos-automotor"),u=document.getElementById("campos-accidentes"),g=document.getElementById("campos-hogar"),d=document.getElementById("campos-comercio"),c=document.getElementById("campo-email"),m=document.getElementById("campo-comentarios"),p=document.getElementById("campo-submit"),h=document.getElementById("label-lugar"),f=document.getElementById("field-lugar-guarda"),y=[r,u,g,d];function L(){e.classList.add("hidden"),t.classList.add("hidden"),c.classList.add("hidden"),m.classList.add("hidden"),p.classList.add("hidden"),y.forEach(n=>n.classList.add("hidden")),e.querySelectorAll("[required]").forEach(n=>{n.removeAttribute("required")})}function v(){e.classList.remove("hidden"),t.classList.remove("hidden"),c.classList.remove("hidden"),m.classList.remove("hidden"),p.classList.remove("hidden"),t.querySelectorAll("input").forEach(n=>{n.setAttribute("required","")}),c.querySelectorAll("input").forEach(n=>{n.setAttribute("required","")})}function l(n){n.querySelectorAll("input, select").forEach(o=>{o.closest('[class*="hidden"]')===null&&o.setAttribute("required","")})}a.addEventListener("change",()=>{L();const n=a.value;if(n){switch(v(),n){case"automotor":h.textContent="Lugar de Guarda y Uso *",f.classList.remove("hidden"),r.classList.remove("hidden"),l(r);break;case"accidentes-personales":h.textContent="Lugar de Riesgo *",f.classList.remove("hidden"),u.classList.remove("hidden"),l(u);break;case"hogar":h.textContent="Lugar de Riesgo *",f.classList.remove("hidden"),g.classList.remove("hidden"),l(g);break;case"comercio-consorcio":h.textContent="Lugar de Riesgo *",f.classList.remove("hidden"),d.classList.remove("hidden"),l(d);break}e.style.opacity="0",e.style.transform="translateY(10px)",requestAnimationFrame(()=>{e.style.transition="opacity 0.3s ease, transform 0.3s ease",e.style.opacity="1",e.style.transform="translateY(0)"})}});const i=document.getElementById("quote-form");i.addEventListener("submit",n=>{n.preventDefault();const o=new FormData(i),C=a.options[a.selectedIndex].text;let s=`*Solicitud de Cotización*

`;s+=`*Tipo de Seguro:* ${C}

`,s+=`*Datos del Tomador:*
`,s+=`- Nombre: ${o.get("nombre")}
`,s+=`- DNI: ${o.get("dni")}
`,s+=`- Fecha Nac.: ${o.get("fecha-nacimiento")}
`,s+=`- Lugar: ${o.get("lugar")}
`;const E=a.value;if(E==="automotor"){s+=`- Forma de Pago: ${o.get("forma-pago")}

`,s+=`*Datos del Vehículo:*
`,s+=`- Marca: ${o.get("marca")}
`,s+=`- Modelo: ${o.get("modelo")}
`,s+=`- Año: ${o.get("anio")}
`;const b=o.get("dominio");b&&(s+=`- Dominio: ${b}
`)}else E==="accidentes-personales"?(s+=`
*Riesgo a Cubrir:*
`,s+=`- Actividad: ${o.get("actividad")}
`,s+=`- Vigencia: ${o.get("vigencia")}
`,s+=`- Usa moto/vehículo: ${o.get("uso-moto")}
`):E==="hogar"?(s+=`
*Datos del Inmueble:*
`,s+=`- M² Cubiertos: ${o.get("metros")}
`,s+=`- Pared/Techos: ${o.get("pared-techos")}
`,s+=`- Puerta Seguridad: ${o.get("puerta-seguridad")}
`,s+=`- Alarma: ${o.get("alarma")}
`,s+=`- Tipo Vivienda: ${o.get("tipo-vivienda")}
`):E==="comercio-consorcio"&&(s+=`
*Datos del Comercio:*
`,s+=`- M² Cubiertos: ${o.get("metros-comercio")}
`,s+=`- Pared/Techos: ${o.get("pared-techos-comercio")}
`,s+=`- Actividad Comercial: ${o.get("actividad-comercial")}
`);s+=`
*Email:* ${o.get("email")}
`,s+=`*Celular:* ${o.get("celular")}
`;const $=o.get("comentarios");$&&(s+=`
*Comentarios:* ${$}
`);const I=encodeURIComponent(s);window.open(`https://wa.me/5492804010957?text=${I}`,"_blank")})});document.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("general-inquiry-form");a.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(a);let r=`*Consulta General*

`;r+=`*Datos de Contacto:*
`,r+=`- Nombre: ${t.get("nombre-consulta")}
`,r+=`- Celular: ${t.get("celular-consulta")}
`,r+=`- Email: ${t.get("email-consulta")}

`,r+=`*Rubro a cotizar:* ${t.get("rubro-consulta")}
`,r+=`*Motivo de consulta:* ${t.get("motivo-consulta")}
`;const u=encodeURIComponent(r);window.open(`https://wa.me/5492804010957?text=${u}`,"_blank")})});
