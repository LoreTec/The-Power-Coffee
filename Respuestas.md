Documentación, Prueba Técnica Desarrollador(a) Front-End Jr.
Entrega estas respuestas en un archivo RESPUESTAS.md dentro del repositorio.
 – 1.  Explica con un ejemplo la diferencia entre renderizado en el cliente (CSR), del lado del servidor (SSR) y sitios estáticos (SSG). ¿Para un sitio corporativo informativo cuál elegirías y por qué? 

CSR: Un ejemplo seria Facebook que, a la hora de entrar, aparecen rectángulos grises, esto sucede porque el navegador está consultando la API de Facebook para pedir las publicaciones, y una vez que la API tenga los datos mostrara en el navegador los resultados.

SSR: Un ejemplo seria la Consulta de CURP en la página del gobierno, Cuando ingresas tus datos para consultar tu CURP, el servidor recibe tu información, busca en sus registros en ese momento, y genera la página con todos tus datos oficiales y lista para entregar.

SSG: Un ejemplo seria la búsqueda de reseñas en sitio web de Wikipedia, Cuando buscas la reseña de un libro o una guía o un software, la página carga de forma rápida ya que el contenido ya estaba construido mucho mas antes.

¿Para un sitio corporativo informativo cuál elegirías y por qué? 
yo elegiría el SSG, por lo rápido que es ya que, si es un sitio informativo para información, erigiría eso porque sería muy rápido a la hora consultar algunos datos o documentos o información importante, sería más accesible, eficiente y mejor, así no haces muchas llamadas a un api o prácticamente te evitas también de hacer consultas a una base de datos. 

pero también hay que tomar en cuenta que todos son buenos ya que está hecho para un público distinto o necesidades específicas, por ejemplo, como la consulta del CURP si debe tener una base datos ya que por ese medio consulta los datos en tiempo real y nos proporciona los datos, yo creo que el SSG no puede hacer ya que, pues obviamente tiene la información precargada y pues nada seria consultarlo y ya, pero para sitios sin nada de interactuar con datos reales sería muy buena opción el SSG. 

– 2.  Astro, Next.js y Svelte: elige uno con el que te sientas más cómodo y di en qué proyecto real lo usarías frente a los otros dos. 
Elegiría (Next.js) porque permite unir en un solo proyecto la interfaz de usuario interactiva como buscadores, indicadores de color para impuntualidades/asistencias etc. y la lógica del servidor para la validación de contraseñas, consultas seguras a la base de datos y control de sesiones.

Lo aplicaría en una aplicación web que lo llamaría Gestión de Asistencias para tener un mejor control sobre los empleados.

– 3.  ¿Cuándo recomendarías un CMS como WordPress y cuándo un sitio hecho a medida? Menciona una ventaja y una desventaja de cada camino.
WordPress: Recomendaría un sitio o aplicación en wordpress para crear una página o aplicación rápida siempre y cuando el cliente no tenga mucho presupuesto o quiera tener un sitio rápido sin perder mucho tiempo.

Sitio hecho a Medida: Recomendaría un sitio hecho a la medida siempre y cuando el cliente tenga la idea de que es lo que específicamente quiere y que tenga los requerimientos muy bien especificados.

Ventaja (WordPress):
Fácil de Interactuar y bajo presupuesto.

Desventaja (WordPress):
Limitaciones y muy lenta a medida que vaya creciendo.


Ventaja (Sitio hecho a medida):
Mayor control al sitio o aplicación web y mayor escalabilidad.

Desventaja (Sitio hecho a medida):
Mayor Costo y Mayor tiempo de desarrollo.


 – 4.  Para una tienda en línea, ¿qué preguntas le harías al cliente antes de decidir entre Shopify y Magento? 
Las preguntas que yo les haría son:
1.	¿Cuál es tu presupuesto inicial?
2.	¿Cuentas con un equipo o no?
3.	¿En cuánto tiempo necesitas tener la tienda en línea lista para recibir compras?
4.	¿Con cuanto inventario cuentas?
5.	¿Cuentas con un público o no?


– 5.  Describe, paso a paso y con tus palabras, cómo llevarías un cambio de código desde tu computadora hasta producción usando Git y GitHub. Menciona ramas (branches) y Pull Requests.
Mis pasos:
Paso 1: Primero lo que haría crear la rama de git en la terminal con “git pull”, la creo y cambio una nueva rama para no meterme en la rama principal “git checkout -b”.

Paso 2: Empiezo a programar el sitio web o aplicación etc. Y los cambios que voy haciendo y los resultados que voy obteniendo, guardar el avance que tengo en ese momento asi sea lo mínimo y ponerle un mensaje descriptivo de lo que hice, con “git add” y “git commit -m " “comentario”.

Paso 3: Subir el código o trabajo al repositorio de GitHub con “git push origin”.

Paso 4: Entrar a la pagina de GitHub buscar el botón de Pull “Request” presionarlo y poner un comentario breve sobre lo que hice para así que vean mis compañeros que es lo que hice.

Paso 5: Una vez revisado lo que he hecho y estar conforme con mi equipo, presionar el botón de “Merge Pull Request”para integrar los cambios de forma segura a la rama principal.

Paso 6: Después lo desplegamos a producción el servidor compila el nuevo código y lo publica automáticamente a producción.


– 6.  ¿Qué es un “build” y qué crees que pasa cuando conectas un repositorio de GitHub a un servicio como Vercel o Cloudflare Pages? 
El build es un comando el cual se encarga de empaquetar todo tu código en archivos finales listos para ser publicados.
qué crees que pasa cuando conectas un repositorio de GitHub a un servicio como Vercel o Cloudflare Pages? 
Lo que pasa es que automáticamente detecta el código o los cambios que hiciste, inmediatamente le dice a Vercel que hubo un cambio en el repositorio. Vercel descarga la nueva versión y compila la aplicación. Si el código tiene un error de sintaxis u otro automáticamente no compila nada y no muestra nada en pantalla más que el error.


– 7.  Menciona 3 cosas que cuidarías para que una landing page cargue rápido y posicione bien (SEO/rendimiento). 
Las tres cosas que cuidaría para que “Landing page” y cargue rápido serian:
1. Optimización del código y compresión de imágenes.
2. Código limpio, optimizado y bien estructurado.
3. Estructura de HTML semántica y Metadatos.


– 8.  Cuéntanos de una tecnología que aún no dominas. ¿Cómo aprenderías a usarla si empezaras la próxima semana? 

La tecnología que me gustaría dominar a fondo es el desarrollo de aplicaciones de escritorio con C# y el ecosistema .NET utilizando Visual Studio. Ya que he realizado algunos programas pequeños en este entorno, reconozco que al principio su interfaz y la estructura de sus proyectos pueden sentirse complejas debido a lo completo que es el programa ya que tiene muchas herramientas, pero siento que está muy amontonado todo. Sin embargo, sé que es una herramienta muy demandada en el entorno laboral y que con práctica constante se vuelve indispensable.

Comenzaría repasando los fundamentos del lenguaje C# y la arquitectura de aplicaciones de escritorio en .NET. Buscaría cursos o documentación oficial centrados en casos de uso reales, para entender las buenas prácticas al organizar carpetas, manejar la interfaz gráfica y conectar la lógica con bases de datos. También seria autodidacta poniéndome proyect