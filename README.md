# #CongresoSinCorrupcion2020

## Nosotros

**Agenda Sanchez Carrión**

Iniciativa ciudadana plural voluntaria por un congreso de calidad.

### ¿Quiénes somos?

Somos una iniciativa ciudadana plural voluntaria denominada "Agenda Sánchez Carrión", la cual nace bajo el auspicio del Colegio de Ingenieros del Perú - Consejo Nacional.

### ¿Qué hacemos?

Contribuir a que personas capacitadas y honestas accedan al Congreso:

* Proponemos pautas sobre las cualificaciones deseables en términos de representatividad, experticia e instrucción, trayectoria y transparencia, para que los Partidos Políticos las tomen en cuenta al momento de seleccionar sus candidatos.
* Informamos a los ciudadanos sobre la calidad de las Listas de Candidatos de cada Partido Político de manera que puedan ejercer un voto informado y responsable.
* Proponemos a los Partidos Políticos una "Agenda Parlamentaria Comun 2020 – 2021" de manera de priorizar los temas mas urgentes para la ciudadanía y el Estado, para así poder entregar resultados concretos, a pesar de la corta duración de la gestión del Parlamento a ser elegido.

### ¿Por qué lo hacemos?

Buscamos propiciar condiciones para la paz social, impulsar la competitividad de sectores prioritarios y mejorar la calidad de vida de la población del Perú:

* Nuestras propuestas a los Partidos Politicos para la suscripción de una "Agenda Parlamentaria Común 2020 - 2021" y la aplicacion de criterios para la seleccion de pre-candidatos capaces y honestos para la conformación de un "Congreso de Calidad", contribuirán a propiciar soluciones creativas e inteligentes para temas prioritarios relacionados con la mejora de la competitividad y la calidad de vida de la población. Esto es urgente y necesario, dada la actual coyuntura de enfrentamiento político, polarización de la ciudadanía y desaceleración de nuestra economía.
* La calidad de las Listas de Candidatos es clave, debido a que al aplicarse el método de “Cifra Repartidora” los votos de candidatos específicos que pudieran tener una alta calificación y preferencia ante el electorado, generarán más cupos (escaños) para el partido político al que pertenecen, pudiendo favorecer a una Lista incapaz y deshonesta sin que el votante se percate.

### Agradecimiento

La Iniciativa Ciudadana Plural Voluntaria - Sánchez Carrión, agradece la participación voluntaria del Grupo de Trabajo asignado para el desarrollo de la página web y el procesamiento de la información aplicando la Matriz:

* Jorge del Rio S. (Coordinador)
* Moisés Alexander Salazar V.
* Martín del Rio Lobos
* Eduardo Fernández Aliaga
* Alejandro Santa María S.
* Elias Ruíz Chávez
* Juan Fernández Silva

## Solución técnica

### Adquisición de datos

Debido a que el Jurado Nacional de Elecciones del Perú no liberó una API en el portal de Voto Informado (https://votoinformado.jne.gob.pe), ni tampoco un Dataset en la Plataforma Nacional de Datos Abiertos, ni tampoco nos brindo apoyó para la obtención de la información a pesar de la existencia del DECRETO SUPREMO Nº 016-2017-PCM - "Estrategia Nacional de Datos Abiertos".

Tuve que realizar una técnica básica de **Hacking** llamada **Web Scraping**. El resultado puede visualizarse en el siguiente vídeo: [Scrapeando al JNE](https://www.facebook.com/watch/?v=2579918272129296)

### Proyecto web

El frontend era simple en diseño, sin embargo opte por emplear Angular 8.2 para mantener de forma ordenada cada sección del sitio y los scripts correspondientes a los cálculos, gráficos, grillas, etc. Este proyecto no requirió de backend services.

### Dependencias

* `@fortawesome/fontawesome-free` (^5.11.2)
* `@types/datatables.net` (^1.10.18)
* `bootstrap` (^4.3.1)
* `datatables.net` (^1.10.20)
* `es6-promise` (^4.2.8)
* `jquery` (^3.4.1)
* `linqjs` (^1.0.1)
* `ng-angular8-datatable` (^0.9.11)
* `popper.js` (^1.16.0)

### Visíta la web

* [Agenda Sánchez Carrión - #CongresoSinCorrupcion2020](https://congresosincorrupcion.z19.web.core.windows.net)


### Licencia

Este proyecto tiene la [Licencia MIT][1].

[1]: https://opensource.org/licenses/mit-license.html "The MIT License | Open Source Initiative"