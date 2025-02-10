# Proyecto-grupal

Trabajo integrador
Proyecto: Desarrollo de un sitio web para una tienda online
 
Descripción del Proyecto
Desarrollar un sitio web responsivo para una tienda online que permita a los usuarios explorar los productos desde diferentes dispositivos, como computadoras de escritorio, tablets y celulares (3 resoluciones).
 
Características del Sitio Web
Frontend
- Diseño responsivo utilizando Bootstrap para garantizar una experiencia de usuario consistente en diferentes dispositivos y tamaños de pantalla.
- Página principal que muestra los productos destacados y las promociones actuales de la tienda.
- Páginas de categorías que permiten a los usuarios explorar productos por categorías específicas (definan máximo 2 categorías)
- Página de detalles del producto que muestra información detallada sobre un producto seleccionado (pueden trabajar con un máximo de 3 productos por categoría).
 
Git
- Utilización de Git para el control de versiones del código fuente del proyecto.
- Implementación de ramas para trabajar en diferentes características o correcciones de forma aislada.
- Uso de commits descriptivos y mensajes claros para documentar los cambios realizados.
 
Entrega del Proyecto
- Desarrollo del sitio web completo, incluyendo frontend responsivo y optimizado para distintos dispositivos y orientaciones.
- Documentación del código que explique la estructura del proyecto, las decisiones de diseño y las funcionalidades implementadas.
- 
- Implementación de Git para el control de versiones del código y la colaboración entre los miembros del equipo.
 
Resolución:

# Página Web para Peluquería/Barbería

Este proyecto es una página web para una peluquería/barbería, diseñada con HTML5, CSS3, y Bootstrap. Utiliza también Font Awesome para iconos y ofrece una interfaz estilizada y responsiva.

## Descripción

El código HTML de la página comienza con la estructura básica de un documento HTML5 e incluye las secciones necesarias para crear una experiencia de usuario completa y profesional.

### Estructura del Código

- **Estructura HTML5 básica:** La página comienza con la declaración `<!doctype html>`, y etiquetas `<html>`, `<head>`, y `<body>`.
- **Head:** Incluye las etiquetas `<meta>` necesarias para configurar el juego de caracteres a UTF-8 y asegurar la responsividad en dispositivos móviles con `viewport`. Además, se incluyen enlaces a hojas de estilo CSS como Bootstrap y Font Awesome, una hoja de estilos personalizada (`style.css`), y un favicon.
- **Body:** Contiene las siguientes secciones:

  - **Header:** Incluye un `navbar` de Bootstrap con un logo, un botón para colapsar el menú en pantallas pequeñas, y enlaces de navegación a las secciones de "Nosotros", "Productos Destacados", "Categorías", y "Contacto". El `navbar` está fijado en la parte superior de la pantalla y tiene un fondo oscuro.
  - **Carrusel de fotos:** Utilizando Bootstrap, muestra tres imágenes con controles para navegar entre ellas. La sección tiene un margen superior para evitar que el contenido quede oculto detrás del `navbar`.
  - **Productos destacados:** Contiene un título centrado y tres tarjetas (`cards`), cada una mostrando un servicio ofrecido (Afeitado a Navaja, Peinado de Novia, y Coloración). Cada tarjeta incluye una imagen, un título y una descripción breve del servicio.
  - **Logos de métodos de pago:** Muestra un carrusel continuo con logos de diversas opciones de pago disponibles.
  - **Footer:** Incluye enlaces a diferentes secciones de la página y iconos de redes sociales con enlaces a las cuentas de Twitter, Facebook, Instagram, y LinkedIn de la peluquería/barbería. También muestra un mensaje de derechos reservados.

### Scripts

- Enlaces a los archivos JavaScript de Popper.js y Bootstrap, necesarios para algunas funcionalidades de Bootstrap.
- Un archivo de scripts personalizado (`scripts.js`) para cualquier funcionalidad adicional que necesite la página.

Este código CSS tiene varias partes importantes que podemos analizar para entender cómo da estilo a una página web.

Primero, hay un **reset** al inicio. Esto significa que se eliminan los márgenes y los rellenos de todos los elementos con `* { margin: 0; padding: 0; box-sizing: border-box; }`. Esto ayuda a asegurar que todos los elementos tengan el mismo punto de partida en cuanto a diseño.

Luego, se definen algunas **variables de colores** usando `:root`. Las variables como `--primary`, `--secondary` y `--bg` permiten que estos colores se usen fácilmente en toda la hoja de estilos, asegurando consistencia. Por ejemplo, `--primary` es un color morado oscuro y `--bg` es un color de fondo verde claro.

Después, se estiliza la **barra de navegación**. La clase `.navbar-light .navbar-toggler` usa `var(--text-white)` para el color de borde y el fondo. También hay un ajuste para `#navbarNav` que distribuye los elementos de forma uniforme y los alinea.

Para evitar que el contenido de la página se superponga con la barra de navegación, se añade `padding-top: 5rem;` a las secciones `#nosotros-top`, `#productos-top`, `#pregunta-frecuentes-top`, y `#contacto-top`.

En la **sección de productos**, los elementos como `#card-corte`, `#card-coloracion`, y `#card-nupcial` tienen un margen inferior para separarlos unos de otros. Además, el botón en el modal de productos se centra y cambia de color al pasar el ratón sobre él.

Se incluyen **media queries** para ajustar el diseño según el tamaño de la pantalla. Por ejemplo, para pantallas medianas y grandes, los cuerpos de las tarjetas (`.card-body`) tienen una altura mínima específica, y las imágenes en el carrusel se ajustan para no exceder el tamaño de la ventana.

Para dispositivos pequeños, como teléfonos, `.fotos-masonry` se oculta con `display: none;`.

En el **footer**, los enlaces cambian de fondo al pasar el ratón sobre ellos y los elementos se alinean de manera específica.

El diseño también incluye una **animación** llamada `scroll` que hace que un elemento se desplace horizontalmente de manera infinita, aplicado a una clase `.slider` que contiene elementos `.slide`.

Finalmente, hay estilos para **modos oscuro y claro**. En el modo oscuro, el fondo y el texto se ajustan a colores oscuros y claros respectivamente, y en el modo claro, se usan colores más claros para el fondo y más oscuros para el texto.

Este código muestra cómo se puede crear una página web atractiva y funcional con CSS, ajustando elementos y colores para mejorar la experiencia del usuario en diferentes dispositivos y modos de visualización.


Este código JavaScript es para alternar entre el modo oscuro y claro en una página web cuando se hace clic en un botón. Vamos a desglosarlo y explicar cada parte.

Primero, obtenemos el botón que activa el modo oscuro mediante `document.getElementById('toggleDarkMode')`. Luego, añadimos un evento `click` a este botón para que ejecute una función cuando se haga clic en él.

Dentro de esta función, se obtienen varios elementos de la página usando `getElementById` y `getElementsByClassName`. Estos elementos son:

- `body`: El cuerpo de la página.
- `header`: El encabezado de la página.
- `footer`: El pie de página.
- `pfooter` y `pfooter1`: Párrafos dentro del pie de página.
- `sessions`: Elementos con la clase `session`.
- `textos`: Elementos con la clase `dark-text`.

La primera acción dentro de la función es alternar la clase `dark-mode` en el `body`. Esto cambia el estilo del cuerpo de la página para modo oscuro o claro.

Luego, se revisa si el `footer` tiene la clase `bg-light` (fondo claro). Si es así, se reemplaza por `bg-dark` (fondo oscuro). Si no, se hace el cambio inverso. Esto permite cambiar el color de fondo del pie de página.

Después, se hace lo mismo con los párrafos `pfooter` y `pfooter1`, alternando entre `text-dark` (texto oscuro) y `text-light` (texto claro) para cambiar el color del texto.

Para el `header`, se alternan varias clases: `navbar-light`, `bg-light`, `navbar-dark`, y `bg-dark`. Esto ajusta tanto el color de fondo como el estilo del texto del encabezado.

Finalmente, se usa un bucle `for` para recorrer todos los elementos con la clase `session` y alternar la clase `section-dark`. Esto permite aplicar el modo oscuro a varias secciones de la página.

En resumen, este código permite cambiar entre el modo oscuro y claro en una página web al hacer clic en un botón, ajustando dinámicamente los estilos de varios elementos clave como el cuerpo, el encabezado, el pie de página, y las secciones, para mejorar la experiencia del usuario.

## Instalación

1. Clonar el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/peluqueria-barberia.git
    ```
2. Abrir el archivo `index.html` en tu navegador preferido.

## Uso

- Navegar por la página utilizando el menú de navegación.
- Explorar los servicios destacados y los métodos de pago disponibles.
- Contactar a la peluquería/barbería a través de los enlaces de redes sociales.












