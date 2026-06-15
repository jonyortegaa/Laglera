function A(){const a=document.getElementById("menu-toggle"),e=document.getElementById("mobile-menu");!a||!e||(a.addEventListener("click",()=>{const t=!e.classList.contains("hidden");e.classList.toggle("hidden"),a.setAttribute("aria-expanded",String(!t))}),e.querySelectorAll("a").forEach(t=>{t.addEventListener("click",()=>{e.classList.add("hidden"),a.setAttribute("aria-expanded","false")})}))}function S(){document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",e=>{e.preventDefault();const t=a.getAttribute("href");if(!t)return;const s=document.querySelector(t);if(!s)return;const c=s.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:c,behavior:"smooth"})})})}document.addEventListener("DOMContentLoaded",()=>{A(),S()});document.addEventListener("DOMContentLoaded",()=>{function a(e){const t=document.querySelector(`.carousel-track[data-carousel="${e}"]`),s=document.querySelector(`.carousel-prev[data-carousel="${e}"]`),l=document.querySelector(`.carousel-next[data-carousel="${e}"]`),h=document.querySelector(`.carousel-container[data-carousel="${e}"]`);if(!t||!s||!l)return;let c,i=!1,m=!1;function v(){return t.children[0].offsetWidth}function g(){if(m)return;m=!0;const r=v();t.style.transition="transform 600ms ease-in-out",t.style.transform=`translateX(-${r}px)`,t.addEventListener("transitionend",function p(){t.removeEventListener("transitionend",p),t.style.transition="none",t.style.transform="translateX(0)",t.appendChild(t.children[0]),m=!1})}function f(){if(m)return;m=!0;const r=v();t.style.transition="none",t.insertBefore(t.children[t.children.length-1],t.children[0]),t.style.transform=`translateX(-${r}px)`,t.offsetHeight,t.style.transition="transform 600ms ease-in-out",t.style.transform="translateX(0)",t.addEventListener("transitionend",function p(){t.removeEventListener("transitionend",p),m=!1})}function y(){L(),c=setInterval(()=>{i||g()},3e3)}function L(){c&&clearInterval(c)}l.addEventListener("click",()=>{g(),y()}),s.addEventListener("click",()=>{f(),y()}),h.addEventListener("mouseenter",()=>{i=!0}),h.addEventListener("mouseleave",()=>{i=!1});let u=0;t.addEventListener("touchstart",r=>{u=r.changedTouches[0].screenX,i=!0},{passive:!0}),t.addEventListener("touchend",r=>{const p=u-r.changedTouches[0].screenX;Math.abs(p)>50&&(p>0?g():f()),i=!1,y()},{passive:!0}),y()}a("personas"),a("empresas")});document.addEventListener("DOMContentLoaded",()=>{const a="companies",e=document.querySelector(`.carousel-track[data-carousel="${a}"]`),t=document.querySelector(`.carousel-prev[data-carousel="${a}"]`),s=document.querySelector(`.carousel-next[data-carousel="${a}"]`),l=document.querySelector(`.carousel-container[data-carousel="${a}"]`);if(!e||!t||!s||!l)return;let h,c=!1,i=!1;function m(){return e.children[0].offsetWidth}function v(){if(i)return;i=!0;const u=m();e.style.transition="transform 600ms ease-in-out",e.style.transform=`translateX(-${u}px)`,e.addEventListener("transitionend",function r(){e.removeEventListener("transitionend",r),e.style.transition="none",e.style.transform="translateX(0)",e.appendChild(e.children[0]),i=!1})}function g(){if(i)return;i=!0;const u=m();e.style.transition="none",e.insertBefore(e.children[e.children.length-1],e.children[0]),e.style.transform=`translateX(-${u}px)`,e.offsetHeight,e.style.transition="transform 600ms ease-in-out",e.style.transform="translateX(0)",e.addEventListener("transitionend",function r(){e.removeEventListener("transitionend",r),i=!1})}function f(){y(),h=setInterval(()=>{c||v()},2500)}function y(){h&&clearInterval(h)}s.addEventListener("click",()=>{v(),f()}),t.addEventListener("click",()=>{g(),f()}),l.addEventListener("mouseenter",()=>{c=!0}),l.addEventListener("mouseleave",()=>{c=!1});let L=0;e.addEventListener("touchstart",u=>{L=u.changedTouches[0].screenX,c=!0},{passive:!0}),e.addEventListener("touchend",u=>{const r=L-u.changedTouches[0].screenX;Math.abs(r)>50&&(r>0?v():g()),c=!1,f()},{passive:!0}),f()});document.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("tipo-seguro"),e=document.getElementById("dynamic-fields"),t=document.getElementById("datos-tomador"),s=document.getElementById("campos-automotor"),l=document.getElementById("campos-accidentes"),h=document.getElementById("campos-hogar"),c=document.getElementById("campos-comercio"),i=document.getElementById("campo-email"),m=document.getElementById("campo-comentarios"),v=document.getElementById("campo-submit"),g=document.getElementById("label-lugar"),f=document.getElementById("field-lugar-guarda"),y=[s,l,h,c];function L(){e.classList.add("hidden"),t.classList.add("hidden"),i.classList.add("hidden"),m.classList.add("hidden"),v.classList.add("hidden"),y.forEach(d=>d.classList.add("hidden")),e.querySelectorAll("[required]").forEach(d=>{d.removeAttribute("required")})}function u(){e.classList.remove("hidden"),t.classList.remove("hidden"),i.classList.remove("hidden"),m.classList.remove("hidden"),v.classList.remove("hidden"),t.querySelectorAll("input").forEach(d=>{d.setAttribute("required","")}),i.querySelectorAll("input").forEach(d=>{d.setAttribute("required","")})}function r(d){d.querySelectorAll("input, select").forEach(o=>{o.closest('[class*="hidden"]')===null&&o.setAttribute("required","")})}a.addEventListener("change",()=>{L();const d=a.value;if(d){switch(u(),d){case"automotor":g.textContent="Lugar de Guarda y Uso *",f.classList.remove("hidden"),s.classList.remove("hidden"),r(s);break;case"accidentes-personales":g.textContent="Lugar de Riesgo *",f.classList.remove("hidden"),l.classList.remove("hidden"),r(l);break;case"hogar":g.textContent="Lugar de Riesgo *",f.classList.remove("hidden"),h.classList.remove("hidden"),r(h);break;case"comercio-consorcio":g.textContent="Lugar de Riesgo *",f.classList.remove("hidden"),c.classList.remove("hidden"),r(c);break}e.style.opacity="0",e.style.transform="translateY(10px)",requestAnimationFrame(()=>{e.style.transition="opacity 0.3s ease, transform 0.3s ease",e.style.opacity="1",e.style.transform="translateY(0)"})}});const p=document.getElementById("quote-form");p.addEventListener("submit",d=>{d.preventDefault();const o=new FormData(p),I=a.options[a.selectedIndex].text;let n=`*Solicitud de Cotización*

`;n+=`*Tipo de Seguro:* ${I}

`,n+=`*Datos del Tomador:*
`,n+=`- Nombre: ${o.get("nombre")}
`,n+=`- DNI: ${o.get("dni")}
`,n+=`- Fecha Nac.: ${o.get("fecha-nacimiento")}
`,n+=`- Lugar: ${o.get("lugar")}
`;const E=a.value;if(E==="automotor"){n+=`- Forma de Pago: ${o.get("forma-pago")}

`,n+=`*Datos del Vehículo:*
`,n+=`- Marca: ${o.get("marca")}
`,n+=`- Modelo: ${o.get("modelo")}
`,n+=`- Año: ${o.get("anio")}
`;const b=o.get("dominio");b&&(n+=`- Dominio: ${b}
`)}else E==="accidentes-personales"?(n+=`
*Riesgo a Cubrir:*
`,n+=`- Actividad: ${o.get("actividad")}
`,n+=`- Vigencia: ${o.get("vigencia")}
`,n+=`- Usa moto/vehículo: ${o.get("uso-moto")}
`):E==="hogar"?(n+=`
*Datos del Inmueble:*
`,n+=`- M² Cubiertos: ${o.get("metros")}
`,n+=`- Pared/Techos: ${o.get("pared-techos")}
`,n+=`- Puerta Seguridad: ${o.get("puerta-seguridad")}
`,n+=`- Alarma: ${o.get("alarma")}
`,n+=`- Tipo Vivienda: ${o.get("tipo-vivienda")}
`):E==="comercio-consorcio"&&(n+=`
*Datos del Comercio:*
`,n+=`- M² Cubiertos: ${o.get("metros-comercio")}
`,n+=`- Pared/Techos: ${o.get("pared-techos-comercio")}
`,n+=`- Actividad Comercial: ${o.get("actividad-comercial")}
`);n+=`
*Email:* ${o.get("email")}
`,n+=`*Celular:* ${o.get("celular")}
`;const $=o.get("comentarios");$&&(n+=`
*Comentarios:* ${$}
`);const C=encodeURIComponent(n);window.open(`https://wa.me/5492804010957?text=${C}`,"_blank")})});document.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("general-inquiry-form");a.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(a);let s=`*Consulta General*

`;s+=`*Datos de Contacto:*
`,s+=`- Nombre: ${t.get("nombre-consulta")}
`,s+=`- Celular: ${t.get("celular-consulta")}
`,s+=`- Email: ${t.get("email-consulta")}

`,s+=`*Rubro a cotizar:* ${t.get("rubro-consulta")}
`,s+=`*Motivo de consulta:* ${t.get("motivo-consulta")}
`;const l=encodeURIComponent(s);window.open(`https://wa.me/5492804010957?text=${l}`,"_blank")})});
