const express = require("express"); // Importar express
const router = express.Router();
const cuadrado = require('../calculos');

router.get('/calculos/:width', (req, res) => {
    const {
        width
    } = req.params;
    let a = cuadrado.area(width);
    let b = cuadrado.perimetro(width);
    console.log(width, a, b);
    res.send({
        ancho: width,
        area: a,
        perimetro: b
    });
});

module.exports = router;