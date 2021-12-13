const datosControl = {};
const db = require("./database.js");

estControl.getDatos = (req, res) => {
    db.query("Select * FROM smarthomepst", (err, result, fields) => {
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result);
    });
}

estControl.getDato = (req, res) => {
    if (isNaN(req.params.id)) {
        res.status(400).send("No es un id numérico");
        return;
    }
    db.query("SELECT * FROM smarthomepst WHERE id=" + req.params.id,
        (err, result, fields) => {
            if (err) {
                res.status(500).send(err);
                console.log(err);
                return;
            }
            res.json(result);
        });
}


estControl.postDato = (req, res) => {
    const { id, nombre, consumo } = req.body;
    if (!id || !nombre) {
        res.status(400).send("Datos incompletos {id, nombre}");
        return;
    }
    let SQLbody = {};
    if (!id) SQLbody = { nombre, consumo };
    else SQLbody = { id, nombre, consumo };

    db.query("INSERT INTO smarthomepst SET ?", [SQLbody],
        (err, result) => {
            if (err) {
                res.status(500).send(err);
                console.log(err);
                return;
            }
            res.send('Estudiante insertado con id: ' + result.insertId);
        });
}


estControl.putEstudiante = (req, res) => {
    const {nombre, apellido} = req.body;

    if (!nombre || !apellido) {
        res.status(400).send("Datos incompletos {nombre, apellido}");
        return;
    }

    let SQLbody = {nombre, apellido};

    if (isNaN(req.params.id)) {
        res.status(400).send("No es un id numérico");
        return;
    }
    
    db.query("UPDATE smarthomepst SET nombre='"+SQLbody.nombre+"'",
        (err, result, fields) => {
            if (err) {
                res.status(500).send(err);
                console.log(err);
                return;
            }
            res.send('Estudiante modificado');
    })
    db.query("UPDATE smarthomepst SET apellido='"+SQLbody.apellido+"'")
        
}

estControl.deleteEstudiante = (req, res) => {
    
    db.query("DELETE FROM smarthomepst WHERE id=" + req.params.id,
        (err, result, fields) => {
            if (err) {
                res.status(500).send(err);
                console.log(err);
                return;
            }
            res.send('Se ha eliminado el estudiante');
    });
}

module.exports = datosControl;
