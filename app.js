const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/home",function (req, res) {
    console.log("entraron a la ruta home")

    const rutaAlArchivo = path.join(__dirname, './views/home.html')

    res.sendFile(rutaAlArchivo);
});

app.get("/register",function (req, res) {
    console.log("entraron a la ruta register")

    const rutaAlArchivo = path.join(__dirname, './views/register.html')

    res.sendFile(rutaAlArchivo);
});

app.get("/login",function (req, res) {
    console.log("entraron a la ruta login")

    const rutaAlArchivo = path.join(__dirname, './views/login.html')

    res.sendFile(rutaAlArchivo);
});

app.listen (PORT, () => {
    console.log('servidor en el puerto'+PORT);
});