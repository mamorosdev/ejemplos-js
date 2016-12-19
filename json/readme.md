#EJEMPLOS JAVASCRIPT Y JSON.

Ejemplos de código que sirven para mostrar las posibilidades del formato JSON - JavaScript Object Notation; un formato de texto ligero para la transferencia de datos. 

Las 2 operaciones más importantes que proporciona Javascript de forma nativa para convertir texto a objetos JSON son:

### JSON.parse
Converte una cadena texto en formato JSON en un objeto JSON.

### JSON.stringfy
Hace lo contrario que el parse; transforma un objeto JSON a una cadena de texto.

Se pueden probar estas operaciones online desde esta página:
http://www.jsoneditoronline.org/


### mostrarJSON.html
Este es un ejemplo básico que muestra por HTML partes de un fichero JSON con datos de una fruteria.
Para ello uso el método nativo JSON.stringify.

### TablaFacturaJSON.html
Este ejemplo muestra por pantalla una tabla con una factura obtenida a través de un objeto.
A pesar de que la forma de pintar la tabla es bastante obsoleta; me ha parecido bastante interesante incluir 
este ejemplo, con una estructura de datos más compleja.

### parseAlumnosJSON.html 
Este programa permite convertir una lista de alumnos introducidos por texto a formato JSON.

Formato entrada:
Laura, 7.5, 6, 8
Albert, 5, 6.5, 7

Formato salida:
[{	"Alumno": "Laura",	"nota1t": 7.5,	"nota2t": 6,	"nota3t": 8
}, {	"Alumno": "Albert",	"nota1t": 5,	"nota2t": 6.5,	"nota3t": 7 }]

