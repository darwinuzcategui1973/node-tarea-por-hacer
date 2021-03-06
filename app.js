/*
 ** Archivo principal de app
 */
// IMPORTACIONES Y REQUIRE

// const argv = require("yargs").argv;
const argv = require("./config/yargs").argv;
const colors = require("colors");

const porHacer = require("./por-hacer/por-hacer");

let comando = argv._[0];

switch (comando) {

    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case "listar":
        let listado = porHacer.getListado();
        for (let unaTarea of listado) {
            console.log("===== Por Hacer ======".blue);
            console.log(unaTarea.descripcion);
            console.log("Estado: ", unaTarea.completado);

            console.log("======================".blue);


        }
        break;
    case "actualizar":
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

        break;
    case "borrar":
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;


    default:
        console.log("Comando no reconocido");
        break;
}