# Documento de Requisitos

## Introducción

Este documento define los requisitos formales para el sitio web estático de una sola página de "Laglera Asesores de Seguros", una agencia de seguros en Puerto Madryn, Chubut, Argentina. El sitio se construye con Astro + Tailwind CSS, optimizado para SEO, completamente responsivo y desplegable como archivos estáticos en Hostinger.

## Glosario

- **Sitio**: El sitio web estático de Laglera Asesores de Seguros
- **Layout**: Componente Astro principal que envuelve la página con meta tags, JSON-LD y estructura HTML base
- **Header**: Componente de barra de navegación fija superior
- **Hero**: Componente de banner principal con mensaje y CTAs
- **InsuranceCarousel**: Componente de carrusel interactivo con tabs para mostrar seguros por categoría
- **Services**: Componente de grilla de tarjetas de seguros agrupadas por categoría
- **ServicePage**: Componente template reutilizable para páginas individuales de cada seguro
- **Location**: Componente de información de sucursal con mapa
- **Footer**: Componente de pie de página con datos de contacto y legales
- **JSON-LD**: Formato de datos estructurados para SEO embebido en el HTML
- **SSN**: Superintendencia de Seguros de la Nación (ente regulador argentino)
- **CTA**: Call to Action, botón o enlace que invita al usuario a realizar una acción
- **Viewport**: Área visible del navegador del usuario
- **Build**: Proceso de compilación que genera archivos estáticos en la carpeta dist/
- **InsuranceCategory**: Tipo que clasifica seguros como "personas" o "empresa"
- **Seguros Personas**: Categoría de coberturas para individuos y familias (10 seguros)
- **Seguros Empresa**: Categoría de coberturas para empresas y actividades comerciales (11 seguros)

## Requisitos

### Requisito 1: Arquitectura modular de componentes

**User Story:** Como desarrollador, quiero que el sitio esté organizado en componentes Astro modulares, para facilitar el mantenimiento y futuras expansiones.

#### Criterios de Aceptación

1. THE Sitio SHALL estar compuesto por los componentes Layout, Header, Hero, InsuranceCarousel, Services, ServicePage, Location y Footer
2. WHEN se ejecuta el build, THE Sitio SHALL generar un archivo index.html con todo el contenido de la homepage renderizado
3. THE Layout SHALL incluir un `<slot />` que permita inyectar contenido desde la página principal
4. WHEN un componente necesita datos de la empresa, THE componente SHALL importarlos desde los archivos de datos centralizados en src/data/
5. THE ServicePage SHALL ser utilizado como template por cada página individual de seguro en src/pages/seguros/

### Requisito 2: Datos centralizados de la empresa

**User Story:** Como desarrollador, quiero que los datos de la empresa estén centralizados en archivos TypeScript, para evitar duplicación y facilitar actualizaciones.

#### Criterios de Aceptación

1. THE Sitio SHALL mantener los datos de la empresa en un archivo src/data/company.ts exportado como constante
2. THE archivo company.ts SHALL contener nombre, dirección completa, horarios, email, teléfono, número SSN y URLs de redes sociales
3. THE Sitio SHALL mantener los datos de servicios en un archivo src/data/services.ts con arrays tipados separados: segurosPersonas y segurosEmpresa, cada uno de tipo ServiceCard[]
4. WHEN se muestra información de contacto en cualquier componente, THE componente SHALL obtenerla exclusivamente desde company.ts
5. THE archivo services.ts SHALL exportar un tipo InsuranceCategory con valores "personas" y "empresa"
6. THE interface ServiceCard SHALL incluir un campo category de tipo InsuranceCategory que clasifique cada seguro en su categoría correspondiente
7. THE archivo services.ts SHALL exportar un array combinado services que concatene segurosPersonas y segurosEmpresa para retrocompatibilidad

### Requisito 3: SEO y datos estructurados JSON-LD

**User Story:** Como dueño de la agencia, quiero que el sitio esté optimizado para buscadores con datos estructurados, para mejorar la visibilidad en Google.

#### Criterios de Aceptación

1. THE Layout SHALL incluir meta tags title, description, Open Graph y Twitter Cards en el `<head>`
2. THE Layout SHALL incluir un bloque JSON-LD de tipo "InsuranceAgency" con datos de Schema.org
3. THE JSON-LD SHALL contener name, address (PostalAddress), telephone, email, openingHours y url
4. WHEN se renderiza la página, THE Sitio SHALL generar exactamente un elemento `<h1>`
5. THE Layout SHALL incluir una URL canónica apuntando al dominio definitivo

### Requisito 4: Diseño responsivo

**User Story:** Como usuario, quiero que el sitio se vea correctamente en cualquier dispositivo, para poder navegar desde mi celular, tablet o computadora.

#### Criterios de Aceptación

1. THE Sitio SHALL renderizarse sin overflow horizontal en viewports de 320px o más de ancho
2. WHEN el viewport es menor a 768px, THE Header SHALL mostrar un menú hamburguesa en lugar de la navegación expandida
3. WHEN el viewport es menor a 768px, THE Services SHALL mostrar las tarjetas en 2 columnas
4. WHEN el viewport es de 768px o más, THE Services SHALL mostrar las tarjetas en una grilla de 4 columnas
5. WHEN el viewport es menor a 768px, THE Footer SHALL apilar sus columnas verticalmente

### Requisito 5: Navegación y scroll suave

**User Story:** Como usuario, quiero navegar entre secciones del sitio con scroll suave, para una experiencia fluida.

#### Criterios de Aceptación

1. THE Header SHALL contener links de ancla que apunten a las secciones #inicio, #seguros, #sucursal y #contacto
2. WHEN el usuario hace click en un link de ancla, THE Sitio SHALL realizar un scroll suave hasta la sección destino
3. WHEN se realiza scroll a una sección, THE Sitio SHALL compensar la altura del header sticky para que la sección no quede oculta
4. THE Header SHALL permanecer visible (sticky) en la parte superior durante el scroll

### Requisito 6: Menú mobile

**User Story:** Como usuario en dispositivo móvil, quiero un menú hamburguesa funcional, para acceder a la navegación sin ocupar espacio en pantalla.

#### Criterios de Aceptación

1. WHEN el usuario hace click en el botón hamburguesa, THE Header SHALL mostrar u ocultar el menú de navegación mobile
2. WHEN el menú está abierto y el usuario hace click en un link, THE Header SHALL cerrar el menú automáticamente
3. THE botón hamburguesa SHALL actualizar su atributo aria-expanded para reflejar el estado del menú
4. WHILE JavaScript está deshabilitado, THE menú mobile SHALL ser accesible mediante una solución CSS alternativa

### Requisito 7: Accesibilidad

**User Story:** Como usuario con discapacidad, quiero que el sitio sea accesible, para poder navegar y entender el contenido con tecnologías asistivas.

#### Criterios de Aceptación

1. THE Sitio SHALL cumplir contraste de color mínimo de 4.5:1 para texto normal según WCAG 2.1 AA
2. THE Sitio SHALL incluir atributo alt descriptivo y no vacío en todas las imágenes
3. THE Sitio SHALL incluir atributos ARIA apropiados en elementos interactivos (botones, menú toggle)
4. THE Sitio SHALL ser navegable mediante teclado en todos los elementos interactivos
5. THE Sitio SHALL usar estructura semántica de headings (h1, h2, h3) en orden jerárquico correcto

### Requisito 8: Seguridad en enlaces externos

**User Story:** Como usuario, quiero que los enlaces externos sean seguros, para que mi navegación no se vea comprometida por tabnapping.

#### Criterios de Aceptación

1. THE Sitio SHALL incluir `target="_blank"` y `rel="noopener noreferrer"` en todos los enlaces que abren en nueva pestaña
2. THE Sitio SHALL aplicar estos atributos a los enlaces de redes sociales, WhatsApp y cualquier enlace externo

### Requisito 9: Información legal obligatoria (SSN)

**User Story:** Como dueño de la agencia, quiero que el número de inscripción SSN sea visible en el sitio, para cumplir con la normativa de la Superintendencia de Seguros de la Nación.

#### Criterios de Aceptación

1. THE Footer SHALL mostrar el número de inscripción SSN (85861) de forma visible en todas las resoluciones de pantalla
2. THE número SSN SHALL obtenerse del archivo de datos centralizado company.ts

### Requisito 10: Performance

**User Story:** Como usuario, quiero que el sitio cargue rápidamente, para no abandonar la página por tiempos de espera.

#### Criterios de Aceptación

1. THE Sitio SHALL obtener un puntaje de Lighthouse Performance de 90 o superior
2. THE Sitio SHALL precargar la fuente principal con `font-display: swap` para evitar FOIT
3. THE Sitio SHALL utilizar lazy loading en imágenes que estén debajo del fold
4. WHEN se ejecuta el build, THE Tailwind CSS SHALL purgar las clases no utilizadas generando CSS minimal

### Requisito 11: Build y despliegue estático

**User Story:** Como desarrollador, quiero que el sitio se compile a archivos estáticos con un solo comando, para desplegarlo fácilmente en Hostinger.

#### Criterios de Aceptación

1. WHEN se ejecuta `npm run build`, THE Astro CLI SHALL generar archivos estáticos en la carpeta dist/
2. THE build SHALL completarse sin errores
3. THE carpeta dist/ SHALL contener index.html con todo el contenido HTML de la homepage renderizado
4. THE carpeta dist/ SHALL contener los assets CSS y JS optimizados
5. THE carpeta dist/ SHALL contener todas las imágenes referenciadas en el sitio
6. THE carpeta dist/seguros/ SHALL contener un archivo .html individual por cada seguro definido en segurosPersonas y segurosEmpresa

### Requisito 12: Componente Hero

**User Story:** Como visitante del sitio, quiero ver un banner principal atractivo con un mensaje claro y botones de acción, para entender rápidamente qué ofrece la agencia.

#### Criterios de Aceptación

1. THE Hero SHALL mostrar un headline principal con tipografía destacada
2. THE Hero SHALL incluir dos botones CTA: uno primario ("Conocé nuestros seguros") y uno secundario ("Contactar un asesor")
3. WHEN el viewport es menor a 768px, THE Hero SHALL apilar los botones verticalmente
4. THE Hero SHALL incluir una imagen de fondo con overlay para garantizar legibilidad del texto

### Requisito 13: Componente Services

**User Story:** Como visitante del sitio, quiero ver los tipos de seguro disponibles en tarjetas claras organizadas por categoría, para identificar rápidamente lo que necesito.

#### Criterios de Aceptación

1. THE Services SHALL mostrar un título de sección "Nuestros Seguros"
2. THE Services SHALL agrupar las tarjetas en dos bloques visuales: "Seguros Personas" y "Seguros Empresa"
3. THE Services SHALL renderizar una tarjeta por cada servicio definido en segurosPersonas bajo la sección Personas, y una por cada servicio en segurosEmpresa bajo la sección Empresa
4. THE tarjeta de servicio SHALL mostrar icono, título y descripción
5. WHEN el usuario pasa el cursor sobre una tarjeta, THE tarjeta SHALL mostrar un efecto hover sutil (shadow)
6. THE tarjeta de servicio SHALL ser un enlace a la página individual del seguro correspondiente

### Requisito 14: Componente Location

**User Story:** Como visitante del sitio, quiero ver la ubicación y horarios de la agencia, para saber dónde y cuándo puedo visitarla.

#### Criterios de Aceptación

1. THE Location SHALL mostrar la dirección completa y horario de atención de la agencia
2. THE Location SHALL incluir un iframe de Google Maps o un placeholder con link externo a Google Maps
3. IF el iframe de Google Maps no carga, THEN THE Location SHALL mostrar un fallback con la dirección en texto y un enlace directo a Google Maps

### Requisito 15: Componente Footer

**User Story:** Como visitante del sitio, quiero encontrar información de contacto y redes sociales en el pie de página, para poder comunicarme con la agencia.

#### Criterios de Aceptación

1. THE Footer SHALL mostrar email y teléfono como links clicables (mailto: y tel:)
2. THE Footer SHALL mostrar iconos de redes sociales con enlaces a las plataformas de la empresa
3. THE Footer SHALL mostrar el copyright con el año actual
4. THE Footer SHALL organizar su contenido en columnas (branding, contacto, legal) en desktop

### Requisito 16: Componente InsuranceCarousel

**User Story:** Como visitante del sitio, quiero ver un carrusel interactivo de seguros organizado por categoría, para explorar fácilmente la oferta de la agencia desde la homepage.

#### Criterios de Aceptación

1. THE InsuranceCarousel SHALL mostrar dos tabs de selección: "Personas" y "Empresas"
2. WHEN el usuario selecciona el tab "Personas", THE InsuranceCarousel SHALL mostrar únicamente los 10 seguros de la categoría personas
3. WHEN el usuario selecciona el tab "Empresas", THE InsuranceCarousel SHALL mostrar únicamente los 11 seguros de la categoría empresa
4. THE InsuranceCarousel SHALL incluir flechas de navegación para desplazar el carrusel horizontalmente en desktop
5. WHEN el usuario cambia de tab, THE InsuranceCarousel SHALL reiniciar la posición del carrusel al inicio
6. THE InsuranceCarousel SHALL mostrar cada seguro como un item con icono y título que enlaza a su página individual
7. WHILE JavaScript está deshabilitado, THE InsuranceCarousel SHALL mostrar todos los items en un grid estático sin interactividad

### Requisito 17: Páginas individuales de seguros (ServicePage)

**User Story:** Como visitante del sitio, quiero acceder a una página dedicada para cada tipo de seguro, para obtener información detallada sobre coberturas y beneficios.

#### Criterios de Aceptación

1. THE ServicePage SHALL mostrar título, subtítulo y descripción del seguro
2. THE ServicePage SHALL incluir secciones opcionales de coberturas, beneficios y planes según el seguro
3. THE ServicePage SHALL incluir un CTA de contacto por WhatsApp para cotización
4. THE ServicePage SHALL reutilizar el Layout, Header y Footer del sitio principal
5. WHEN el usuario accede a una ruta /seguros/{slug}, THE Sitio SHALL renderizar la página individual correspondiente usando el template ServicePage
6. THE ServicePage SHALL incluir navegación de vuelta a la homepage

### Requisito 18: Modelo de datos categorizado

**User Story:** Como desarrollador, quiero que el catálogo de seguros esté tipado y categorizado en el código, para garantizar consistencia entre datos, componentes y páginas.

#### Criterios de Aceptación

1. THE tipo InsuranceCategory SHALL aceptar únicamente los valores "personas" o "empresa"
2. THE array segurosPersonas SHALL contener exactamente los 10 seguros de la categoría personas: Auto, Moto, Hogar, Comercio, Consorcio, Garantía Alquiler, Accidentes Personales, Embarcaciones de Placer, Vida y Travel
3. THE array segurosEmpresa SHALL contener exactamente los 11 seguros de la categoría empresa: Responsabilidad Civil, Incendio, Todo Riesgo Operativo, Seguro Técnico, Flotas Automotores, Transporte, Integral de Comercio y de Consorcio, Caución, Vida Colectivo, ART y Travel Corporativo
4. THE campo href de cada ServiceCard SHALL corresponder a una página existente en src/pages/seguros/
5. THE campo category de cada ServiceCard SHALL coincidir con el array (segurosPersonas o segurosEmpresa) en el que está definido
