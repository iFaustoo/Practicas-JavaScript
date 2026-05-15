//TRANSFORMACIÓN COMPLEJA
//Tarea: En una sola línea (encadenando métodos), hacé lo siguiente:
//Filtrá los mayores de edad (>= 18).
//Multiplicá esas edades por 2.
//Sumá todos los resultados.

const edades = [12, 18, 25, 10, 30, 16];

const mayoresFinales = edades
.filter((element) => element >= 18)
.map((element) => element * 2)
.reduce((a, b) => a +b);

console.log(mayoresFinales);

//Este ejercicio me gustó mucho, me hizo pensar bastante y buscar info acerca de
//la manera correcta de concatenar métodos, bastante bueno de aprender, se ve que
//los métodos a medida que los voy aplicando usan el resultado del método anterior,
//eso no lo sabía pero ahora lo voy a tener en cuenta, muy importante