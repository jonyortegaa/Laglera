# Plan de Implementación: Laglera Seguros Website

## Descripción General

Implementación de un sitio web estático single-page con Astro + Tailwind CSS para Laglera Asesores de Seguros. El plan sigue un enfoque incremental: scaffolding del proyecto, capa de datos, componentes individuales y ensamblaje final.

## Tareas

- [x] 1. Scaffolding del proyecto Astro
  - [x] 1.1 Inicializar proyecto Astro con dependencias
    - Crear `package.json` con astro, @astrojs/tailwind, tailwindcss, @fontsource/inter
    - Crear `astro.config.mjs` con integración Tailwind y output estático
    - Crear `tsconfig.json` con configuración estricta de Astro
    - _Requisitos: 1.1, 11.1_

  - [x] 1.2 Configurar Tailwind CSS con paleta de colores custom
    - Crear `tailwind.config.mjs` con colores primary (#001F3F), accent (#0074D9), neutrales
    - Configurar font-family Inter como fuente sans por defecto
    - Configurar content paths para archivos .astro y .ts
    - _Requisitos: 10.4_

  - [x] 1.3 Crear estructura de directorios y placeholders
    - Crear directorios: src/components/, src/data/, src/layouts/, src/pages/, public/images/
    - Crear favicon.svg placeholder en public/
    - _Requisitos: 1.1_

- [x] 2. Capa de datos centralizados
  - [x] 2.1 Crear src/data/company.ts con datos de la empresa
    - Exportar constante `company` con nombre, dirección (street, city, province, postalCode, full), horarios, email, teléfono, número SSN (85861) y URLs de redes sociales
    - Tipar con `as const` para inferencia literal
    - _Requisitos: 2.1, 2.2, 2.4_

  - [x] 2.2 Crear src/data/services.ts con array de servicios
    - Definir interface ServiceCard con icon, title, description
    - Exportar array tipado con servicios: Automotor, Hogar, Vida, Comercio/Mala Praxis
    - _Requisitos: 2.3_

- [x] 3. Layout principal con SEO
  - [x] 3.1 Crear src/layouts/Layout.astro
    - Implementar estructura HTML5 con doctype, lang="es"
    - Incluir meta tags: title, description, viewport, charset
    - Incluir Open Graph tags (og:title, og:description, og:type, og:url)
    - Incluir Twitter Cards meta tags
    - Incluir URL canónica
    - Importar @fontsource/inter y aplicar font-display: swap
    - Incluir `<slot />` para contenido de página
    - _Requisitos: 3.1, 3.5, 10.2, 1.3_

  - [x] 3.2 Agregar JSON-LD de tipo InsuranceAgency al Layout
    - Generar bloque `<script type="application/ld+json">` con datos de company.ts
    - Incluir campos: @context, @type, name, address (PostalAddress), telephone, email, openingHours, url
    - _Requisitos: 3.2, 3.3_

  - [ ]* 3.3 Escribir test de propiedad para generación de JSON-LD
    - **Property 1: JSON-LD generation produces valid structured data**
    - **Valida: Requisitos 3.2, 3.3**

- [x] 4. Componente Header con navegación
  - [x] 4.1 Crear src/components/Header.astro
    - Implementar header sticky con logo, links de navegación (#inicio, #seguros, #sucursal, #contacto), y botón CTA
    - Aplicar scroll-margin-top en secciones para compensar header sticky
    - Importar datos de company.ts para el CTA de WhatsApp
    - Incluir atributos ARIA en elementos interactivos
    - _Requisitos: 5.1, 5.3, 5.4, 7.3_

  - [x] 4.2 Implementar menú hamburguesa mobile
    - Agregar botón toggle con aria-expanded y aria-controls
    - Script client-side para toggle visibilidad del menú
    - Cerrar menú automáticamente al hacer click en un link
    - Fallback CSS con `<details>` para JS deshabilitado
    - _Requisitos: 4.2, 6.1, 6.2, 6.3, 6.4_

  - [x] 4.3 Implementar smooth scroll para navegación por anclas
    - Script client-side que intercepta clicks en links `a[href^="#"]`
    - Calcular offset del header sticky (80px) para posicionamiento correcto
    - Usar `window.scrollTo` con behavior smooth
    - _Requisitos: 5.2, 5.3_

  - [ ]* 4.4 Escribir tests de propiedades para navegación y menú mobile
    - **Property 2: Navigation links reference existing DOM elements**
    - **Property 6: Mobile menu aria-expanded invariant**
    - **Property 7: Mobile menu closes on link click**
    - **Valida: Requisitos 5.1, 6.1, 6.2, 6.3**

- [x] 5. Componente Hero
  - [x] 5.1 Crear src/components/Hero.astro
    - Implementar sección con id="inicio" y headline `<h1>`
    - Agregar subtítulo descriptivo
    - Implementar dos botones CTA: primario ("Conocé nuestros seguros" → #seguros) y secundario ("Contactar un asesor" → WhatsApp)
    - Aplicar imagen de fondo con overlay oscuro para legibilidad
    - Hacer responsive: stack vertical de botones en mobile (<768px)
    - _Requisitos: 3.4, 12.1, 12.2, 12.3, 12.4_

- [x] 6. Componente Services
  - [x] 6.1 Crear src/components/Services.astro
    - Implementar sección con id="seguros" y título h2 "Nuestros Seguros"
    - Importar array de services.ts y renderizar cards con map
    - Cada card muestra icono SVG inline, título h3 y descripción
    - Grid responsivo: 2 columnas en mobile, 4 columnas en desktop (≥768px)
    - Efecto hover con shadow transition en cada card
    - _Requisitos: 4.3, 4.4, 13.1, 13.2, 13.3, 13.4_

  - [ ]* 6.2 Escribir test de propiedad para renderizado de servicios
    - **Property 8: Service cards render all defined services**
    - **Valida: Requisitos 13.2, 13.3**

- [x] 7. Componente Location
  - [x] 7.1 Crear src/components/Location.astro
    - Implementar sección con id="sucursal" y título h2 "Nuestra Sucursal"
    - Mostrar dirección completa y horarios desde company.ts
    - Incluir iframe de Google Maps con sandbox restrictivo
    - Implementar fallback: si el iframe no carga, mostrar dirección en texto con link externo a Google Maps
    - Layout 2 columnas en desktop (info + mapa)
    - _Requisitos: 14.1, 14.2, 14.3_

- [x] 8. Componente Footer
  - [x] 8.1 Crear src/components/Footer.astro
    - Importar datos de company.ts
    - Implementar 3 columnas en desktop: branding/texto, contacto, legal
    - Email como link mailto: y teléfono como link tel:
    - Iconos de redes sociales con links externos (target="_blank", rel="noopener noreferrer")
    - Mostrar número SSN (85861) visible
    - Mostrar copyright con año dinámico (new Date().getFullYear())
    - Responsive: stack vertical en mobile (<768px)
    - _Requisitos: 4.5, 8.1, 8.2, 9.1, 9.2, 15.1, 15.2, 15.3, 15.4_

  - [ ]* 8.2 Escribir tests de propiedades para Footer
    - **Property 3: External links have security attributes**
    - **Property 9: Footer contact links use proper protocols**
    - **Property 10: Footer social links match company data**
    - **Valida: Requisitos 8.1, 8.2, 15.1, 15.2**

- [x] 9. Ensamblaje de la página y accesibilidad
  - [x] 9.1 Crear src/pages/index.astro
    - Importar Layout, Header, Hero, Services, Location, Footer
    - Ensamblar todos los componentes en orden dentro del Layout
    - Envolver Hero, Services y Location en `<main>`
    - Verificar jerarquía semántica de headings (h1 > h2 > h3)
    - _Requisitos: 1.1, 1.2, 1.3, 7.5_

  - [x] 9.2 Verificar accesibilidad global
    - Asegurar alt descriptivo en todas las imágenes
    - Verificar navegabilidad por teclado en elementos interactivos
    - Confirmar contraste de color ≥ 4.5:1 en texto sobre fondos
    - Aplicar lazy loading en imágenes below-the-fold
    - _Requisitos: 7.1, 7.2, 7.4, 10.3_

  - [ ]* 9.3 Escribir tests de propiedades para accesibilidad e imágenes
    - **Property 4: All images have descriptive alt text**
    - **Property 12: Interactive elements have ARIA attributes**
    - **Property 14: Below-fold images use lazy loading**
    - **Valida: Requisitos 7.2, 7.3, 10.3**

- [x] 10. Checkpoint - Verificación de build
  - Ejecutar `npm run build` y confirmar que completa sin errores
  - Verificar que dist/ contiene index.html con todo el contenido renderizado
  - Verificar que dist/ contiene assets CSS optimizados
  - Verificar que las imágenes referenciadas existen en dist/
  - Ensure all tests pass, ask the user if questions arise.
  - _Requisitos: 11.1, 11.2, 11.3, 11.4, 11.5_

- [ ] 11. Actualizar modelo de datos categorizado
  - [ ] 11.1 Refactorizar src/data/services.ts con estructura categorizada
    - Definir tipo `InsuranceCategory` con valores "personas" | "empresa"
    - Actualizar interface `ServiceCard` agregando campos `href` y `category`
    - Crear array `segurosPersonas` con 10 seguros: Auto, Moto, Hogar, Comercio, Consorcio, Garantía Alquiler, Accidentes Personales, Embarcaciones de Placer, Vida, Travel
    - Crear array `segurosEmpresa` con 11 seguros: Responsabilidad Civil, Incendio, Todo Riesgo Operativo, Seguro Técnico, Flotas Automotores, Transporte, Integral de Comercio y de Consorcio, Caución, Vida Colectivo, ART, Travel Corporativo
    - Exportar array combinado `services` que concatene ambos arrays para retrocompatibilidad
    - Cada entrada debe incluir icon, title, description, href y category
    - _Requisitos: 2.3, 2.5, 2.6, 2.7, 18.1, 18.2, 18.3, 18.4, 18.5_

- [ ] 12. Actualizar componentes de seguros en homepage
  - [ ] 12.1 Actualizar src/components/Services.astro con agrupación por categoría
    - Importar `segurosPersonas` y `segurosEmpresa` desde src/data/services.ts
    - Renderizar dos bloques visuales con subtítulos: "Seguros Personas" y "Seguros Empresa"
    - Cada tarjeta debe ser un enlace (`<a>`) a la página individual del seguro usando el campo `href`
    - Mostrar icono SVG, título y descripción en cada card
    - Grid responsivo: 2 columnas mobile, 3-4 columnas desktop
    - Efecto hover con shadow transition
    - _Requisitos: 13.1, 13.2, 13.3, 13.4, 13.5, 13.6_

  - [ ] 12.2 Actualizar src/components/InsuranceCarousel.astro con datos de services.ts
    - Importar `segurosPersonas` y `segurosEmpresa` desde src/data/services.ts en vez de datos hardcodeados
    - Mantener tabs "Personas" / "Empresas" con funcionalidad de switching
    - Carrusel horizontal con flechas de navegación para tab Personas
    - Grid estático para tab Empresas
    - Cada item enlaza a su página individual con icono y título
    - Soporte touch/swipe en mobile, dots indicadores
    - _Requisitos: 16.1, 16.2, 16.3, 16.4, 16.5, 16.6_

  - [ ] 12.3 Actualizar src/pages/index.astro para incluir InsuranceCarousel
    - Verificar que InsuranceCarousel está importado y renderizado en la homepage
    - Asegurar orden correcto: Header, Hero, InsuranceCarousel, Services, Location, Footer
    - _Requisitos: 1.1, 1.2_

- [ ] 13. Crear páginas individuales de seguros faltantes
  - [ ] 13.1 Crear src/pages/seguros/consorcio.astro
    - Usar template ServicePage con título "Consorcio", descripción, coberturas y beneficios relevantes
    - Incluir CTA de WhatsApp
    - _Requisitos: 17.1, 17.2, 17.3, 17.4, 17.5, 17.6, 18.4_

  - [ ] 13.2 Crear src/pages/seguros/embarcaciones.astro
    - Usar template ServicePage con título "Embarcaciones de Placer", coberturas y beneficios
    - _Requisitos: 17.1, 17.2, 17.3, 17.4, 17.5, 17.6, 18.4_

  - [ ] 13.3 Crear src/pages/seguros/travel.astro
    - Usar template ServicePage con título "Travel", asistencia al viajero, cobertura médica y equipaje
    - _Requisitos: 17.1, 17.2, 17.3, 17.4, 17.5, 17.6, 18.4_

  - [ ] 13.4 Crear src/pages/seguros/responsabilidad-civil.astro
    - Usar template ServicePage con título "Responsabilidad Civil", coberturas RC comprensiva, profesional, productos
    - _Requisitos: 17.1, 17.2, 17.3, 17.4, 17.5, 17.6, 18.4_

  - [ ] 13.5 Crear src/pages/seguros/incendio.astro
    - Usar template ServicePage con título "Incendio", protección patrimonial y riesgos aliados
    - _Requisitos: 17.1, 17.2, 17.3, 17.4, 17.5, 17.6, 18.4_

  - [ ] 13.6 Crear src/pages/seguros/todo-riesgo-operativo.astro
    - Usar template ServicePage con título "Todo Riesgo Operativo", cobertura industrial
    - _Requisitos: 17.1, 17.2, 17.3, 17.4, 17.5, 17.6, 18.4_

  - [ ] 13.7 Crear src/pages/seguros/seguro-tecnico.astro
    - Usar template ServicePage con título "Seguro Técnico", maquinaria y equipos electrónicos
    - _Requisitos: 17.1, 17.2, 17.3, 17.4, 17.5, 17.6, 18.4_

  - [ ] 13.8 Crear src/pages/seguros/flotas-automotores.astro
    - Usar template ServicePage con título "Flotas Automotores", gestión centralizada de flotas
    - _Requisitos: 17.1, 17.2, 17.3, 17.4, 17.5, 17.6, 18.4_

  - [ ] 13.9 Crear src/pages/seguros/integral-comercio-consorcio.astro
    - Usar template ServicePage con título "Integral de Comercio y de Consorcio", póliza combinada
    - _Requisitos: 17.1, 17.2, 17.3, 17.4, 17.5, 17.6, 18.4_

  - [ ] 13.10 Crear src/pages/seguros/vida-colectivo.astro
    - Usar template ServicePage con título "Vida Colectivo", seguro grupal para empleados
    - _Requisitos: 17.1, 17.2, 17.3, 17.4, 17.5, 17.6, 18.4_

  - [ ] 13.11 Crear src/pages/seguros/travel-corporativo.astro
    - Usar template ServicePage con título "Travel Corporativo", asistencia viajero corporativo
    - _Requisitos: 17.1, 17.2, 17.3, 17.4, 17.5, 17.6, 18.4_

- [ ] 14. Checkpoint - Verificación de build con catálogo expandido
  - Ejecutar `npm run build` y confirmar que completa sin errores
  - Verificar que dist/seguros/ contiene un archivo .html por cada uno de los 21 seguros
  - Verificar que las rutas href en services.ts corresponden a páginas existentes
  - Verificar que InsuranceCarousel y Services renderizan correctamente ambas categorías
  - Ensure all tests pass, ask the user if questions arise.
  - _Requisitos: 11.1, 11.2, 11.6, 18.4_

  - [ ]* 14.1 Escribir test de propiedad para catálogo categorizado
    - **Property 8: Service cards render all defined services per category**
    - **Property 15: Insurance carousel category filtering is exhaustive**
    - **Valida: Requisitos 13.2, 13.3, 16.2, 16.3, 18.2, 18.3**

## Notas

- Las tareas marcadas con `*` son opcionales y pueden omitirse para avanzar más rápido
- Cada tarea referencia requisitos específicos para trazabilidad
- Los checkpoints validan el progreso incremental
- El diseño usa TypeScript para datos y Astro para componentes
- Las tareas 1-10 corresponden a la implementación base del sitio (completadas)
- Las tareas 11-14 extienden el sitio con el catálogo categorizado completo de 21 seguros
