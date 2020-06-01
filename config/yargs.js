const opts = {
    descripcion: {
        demand: true,
        alias: "d",
        desc: "Descipcion de la tarea por hace"
    },
    completado: {
        alias: "c",
        default: true,
        desc: "Marca como Completado o Pendiente la Tarea"
    }
};

const argv = require("yargs")
    .command("crear", "Crear un Elemento por Hacer", opts)
    .command("actualizar", "Actualizar las tarea ", opts)
    .command("borrar", "Borrar una tarea ", opts)
    .help()
    .argv;

module.exports = {
    argv
}