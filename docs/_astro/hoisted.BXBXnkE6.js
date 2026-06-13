function S(){const s=document.getElementById("menu-toggle"),e=document.getElementById("mobile-menu");!s||!e||(s.addEventListener("click",()=>{const t=!e.classList.contains("hidden");e.classList.toggle("hidden"),s.setAttribute("aria-expanded",String(!t))}),e.querySelectorAll("a").forEach(t=>{t.addEventListener("click",()=>{e.classList.add("hidden"),s.setAttribute("aria-expanded","false")})}))}function B(){document.querySelectorAll('a[href^="#"]').forEach(s=>{s.addEventListener("click",e=>{e.preventDefault();const t=s.getAttribute("href");if(!t)return;const l=document.querySelector(t);if(!l)return;const i=l.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:i,behavior:"smooth"})})})}document.addEventListener("DOMContentLoaded",()=>{S(),B()});document.addEventListener("DOMContentLoaded",()=>{function s(e){const t=document.querySelector(`.carousel-track[data-carousel="${e}"]`),l=document.querySelector(`.carousel-prev[data-carousel="${e}"]`),h=document.querySelector(`.carousel-next[data-carousel="${e}"]`),g=document.querySelector(`.carousel-container[data-carousel="${e}"]`);if(!t||!l||!h)return;let i,r=!1,c=!1;function p(){return t.children[0].offsetWidth}function L(){if(c)return;c=!0;const a=p();t.style.transition="transform 600ms ease-in-out",t.style.transform=`translateX(-${a}px)`,t.addEventListener("transitionend",function m(){t.removeEventListener("transitionend",m),t.style.transition="none",t.style.transform="translateX(0)",t.appendChild(t.children[0]),c=!1})}function u(){if(c)return;c=!0;const a=p();t.style.transition="none",t.insertBefore(t.children[t.children.length-1],t.children[0]),t.style.transform=`translateX(-${a}px)`,t.offsetHeight,t.style.transition="transform 600ms ease-in-out",t.style.transform="translateX(0)",t.addEventListener("transitionend",function m(){t.removeEventListener("transitionend",m),c=!1})}function v(){y(),i=setInterval(()=>{r||L()},3e3)}function y(){i&&clearInterval(i)}h.addEventListener("click",()=>{L(),v()}),l.addEventListener("click",()=>{u(),v()}),g.addEventListener("mouseenter",()=>{r=!0}),g.addEventListener("mouseleave",()=>{r=!1});let d=0;t.addEventListener("touchstart",a=>{d=a.changedTouches[0].screenX,r=!0},{passive:!0}),t.addEventListener("touchend",a=>{const m=d-a.changedTouches[0].screenX;Math.abs(m)>50&&(m>0?L():u()),r=!1,v()},{passive:!0}),v()}s("personas"),s("empresas")});document.addEventListener("DOMContentLoaded",()=>{const s="companies",e=document.querySelector(`.carousel-track[data-carousel="${s}"]`),t=document.querySelector(`.carousel-prev[data-carousel="${s}"]`),l=document.querySelector(`.carousel-next[data-carousel="${s}"]`),h=document.querySelector(`.carousel-container[data-carousel="${s}"]`);if(!e||!t||!l||!h)return;let g,i=!1,r=!1;function c(){return e.children[0].offsetWidth}function p(){if(r)return;r=!0;const d=c();e.style.transition="transform 600ms ease-in-out",e.style.transform=`translateX(-${d}px)`,e.addEventListener("transitionend",function a(){e.removeEventListener("transitionend",a),e.style.transition="none",e.style.transform="translateX(0)",e.appendChild(e.children[0]),r=!1})}function L(){if(r)return;r=!0;const d=c();e.style.transition="none",e.insertBefore(e.children[e.children.length-1],e.children[0]),e.style.transform=`translateX(-${d}px)`,e.offsetHeight,e.style.transition="transform 600ms ease-in-out",e.style.transform="translateX(0)",e.addEventListener("transitionend",function a(){e.removeEventListener("transitionend",a),r=!1})}function u(){v(),g=setInterval(()=>{i||p()},2500)}function v(){g&&clearInterval(g)}l.addEventListener("click",()=>{p(),u()}),t.addEventListener("click",()=>{L(),u()}),h.addEventListener("mouseenter",()=>{i=!0}),h.addEventListener("mouseleave",()=>{i=!1});let y=0;e.addEventListener("touchstart",d=>{y=d.changedTouches[0].screenX,i=!0},{passive:!0}),e.addEventListener("touchend",d=>{const a=y-d.changedTouches[0].screenX;Math.abs(a)>50&&(a>0?p():L()),i=!1,u()},{passive:!0}),u()});document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("tipo-seguro"),e=document.getElementById("dynamic-fields"),t=document.getElementById("datos-tomador"),l=document.getElementById("campos-automotor"),h=document.getElementById("campos-accidentes"),g=document.getElementById("campos-hogar"),i=document.getElementById("campos-comercio"),r=document.getElementById("campos-consulta"),c=document.getElementById("campo-email"),p=document.getElementById("campo-comentarios"),L=document.getElementById("campo-submit"),u=document.getElementById("label-lugar"),v=document.getElementById("field-lugar-guarda"),y=[l,h,g,i,r];function d(){e.classList.add("hidden"),t.classList.add("hidden"),c.classList.add("hidden"),p.classList.add("hidden"),L.classList.add("hidden"),y.forEach(f=>f.classList.add("hidden")),e.querySelectorAll("[required]").forEach(f=>{f.removeAttribute("required")})}function a(){e.classList.remove("hidden"),t.classList.remove("hidden"),c.classList.remove("hidden"),p.classList.remove("hidden"),L.classList.remove("hidden"),t.querySelectorAll("input").forEach(f=>{f.setAttribute("required","")}),c.querySelector("input").setAttribute("required","")}function m(f){f.querySelectorAll("input, select").forEach(o=>{o.closest('[class*="hidden"]')===null&&o.setAttribute("required","")})}s.addEventListener("change",()=>{d();const f=s.value;if(f){switch(a(),f){case"automotor":u.textContent="Lugar de Guarda y Uso *",v.classList.remove("hidden"),l.classList.remove("hidden"),m(l);break;case"accidentes-personales":u.textContent="Lugar de Riesgo *",v.classList.remove("hidden"),h.classList.remove("hidden"),m(h);break;case"hogar":u.textContent="Lugar de Riesgo *",v.classList.remove("hidden"),g.classList.remove("hidden"),m(g);break;case"comercio-consorcio":u.textContent="Lugar de Riesgo *",v.classList.remove("hidden"),i.classList.remove("hidden"),m(i);break;case"consulta-general":t.classList.add("hidden"),c.classList.add("hidden"),p.classList.add("hidden"),r.classList.remove("hidden"),m(r);break}e.style.opacity="0",e.style.transform="translateY(10px)",requestAnimationFrame(()=>{e.style.transition="opacity 0.3s ease, transform 0.3s ease",e.style.opacity="1",e.style.transform="translateY(0)"})}});const $=document.getElementById("quote-form");$.addEventListener("submit",f=>{f.preventDefault();const o=new FormData($),I=s.options[s.selectedIndex].text;let n=`🛡️ *Solicitud de Cotización*

`;n+=`📋 *Tipo de Seguro:* ${I}

`,n+=`👤 *Datos del Tomador:*
`,n+=`• Nombre: ${o.get("nombre")}
`,n+=`• DNI: ${o.get("dni")}
`,n+=`• Fecha Nac.: ${o.get("fecha-nacimiento")}
`,n+=`• Lugar: ${o.get("lugar")}
`;const E=s.value;if(E==="automotor")n+=`• Forma de Pago: ${o.get("forma-pago")}

`,n+=`🚗 *Datos del Vehículo:*
`,n+=`• Marca: ${o.get("marca")}
`,n+=`• Modelo: ${o.get("modelo")}
`,n+=`• Año: ${o.get("anio")}
`,n+=`• Dominio: ${o.get("dominio")}
`;else if(E==="accidentes-personales")n+=`
⚠️ *Riesgo a Cubrir:*
`,n+=`• Actividad: ${o.get("actividad")}
`,n+=`• Vigencia: ${o.get("vigencia")}
`,n+=`• Usa moto/vehículo: ${o.get("uso-moto")}
`;else if(E==="hogar")n+=`
🏠 *Datos del Inmueble:*
`,n+=`• M² Cubiertos: ${o.get("metros")}
`,n+=`• Pared/Techos: ${o.get("pared-techos")}
`,n+=`• Puerta Seguridad: ${o.get("puerta-seguridad")}
`,n+=`• Alarma: ${o.get("alarma")}
`,n+=`• Tipo Vivienda: ${o.get("tipo-vivienda")}
`;else if(E==="comercio-consorcio")n+=`
🏪 *Datos del Comercio:*
`,n+=`• M² Cubiertos: ${o.get("metros-comercio")}
`,n+=`• Pared/Techos: ${o.get("pared-techos-comercio")}
`,n+=`• Actividad Comercial: ${o.get("actividad-comercial")}
`;else if(E==="consulta-general"){n=`📩 *Consulta General*

`,n+=`👤 *Datos de Contacto:*
`,n+=`• Nombre: ${o.get("nombre-consulta")}
`,n+=`• Celular: ${o.get("celular-consulta")}
`,n+=`• Email: ${o.get("email-consulta")}

`,n+=`📋 *Rubro a cotizar:* ${o.get("rubro-consulta")}
`,n+=`💬 *Motivo de consulta:* ${o.get("motivo-consulta")}
`;const A=encodeURIComponent(n);window.open(`https://wa.me/5492804010957?text=${A}`,"_blank");return}n+=`
📧 *Email:* ${o.get("email")}
`;const b=o.get("comentarios");b&&(n+=`
💬 *Comentarios:* ${b}
`);const C=encodeURIComponent(n);window.open(`https://wa.me/5492804010957?text=${C}`,"_blank")})});
