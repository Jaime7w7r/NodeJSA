const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'https://node-jsa.vercel.app'
}));

app.use(express.static(process.cwd() + "/public/"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const misRutas = require("./routes/rutas");
app.use('/', misRutas);

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});