//IMPORTAMOS MODULO EXPRESS
const express = require("express")
//CREAR UNA APLICACION EXPRESS
const app = express()
const datosPersonajes = require("./data/personajes_es.json")
const cors = require("cors")
//TU CODIGO AQUÍ
app.use(cors())
const today = new Date().toLocaleString();
app.use((req, res, next)=>{
    console.log(`\x1b[36m%s\x1b[0m`, `[INFO] Peticion recibida: ${today}`);

    console.log(`\x1b[36m%s\x1b[0m`, `[INFO] Metodo usado: ${req.method}`);
    console.log(`\x1b[36m%s\x1b[0m`, `[INFO] URL usada: ${req.originalUrl}`);
    next();
})
app.get("/", (req, res, next) => {
  if(req.originalUrl=="/"){
      res.sendFile("/views/index.html", {root: __dirname})
  }else{
    console.log("Error 404")
      res.status(404);
      res.send("Un código de estado 404: Page not found Un <h3>Recurso no encontrado</h3>")
  }  
    
    
})

app.get("/styles.css", (req, res, next) => {
    res.sendFile("/css/styles.css", {root: __dirname})
})

app.get("/logica.js", (req, res, next) => {
    res.sendFile("/js/logica.js", {root: __dirname})
})
app.get("/datosPersonajes.json", (req, res, next) => {
    res.send(datosPersonajes);
  });
app.get("/images/logo/logo_vector.svg", (req, res, next) => {
    res.sendFile("/images/logo/logo_vector.svg", { root: __dirname });
  });
  app.get("/favicon.ico", (req, res, next) => {
    res.sendFile("/images/logo/favicon.ico", { root: __dirname });
  });
  app.get("/sprites/loading/:nombrePj", (req, res, next)=>{
    let nombrePj = req.params.nombrePj;
    console.log(`\x1b[36m%s\x1b[0m`, `[GET] Pidiendo PJ: ${nombrePj}`);
    res.sendFile(`/images/loading/${nombrePj}.jpg`, { root: __dirname });
  });

  app.get("/sounds/jokes/:nombrePj", (req, res, next)=>{
    let nombrePj = req.params.nombrePj;
    res.sendFile(`/sounds/jokes/${nombrePj}`, { root: __dirname });
  });
  app.get("/sounds/laugh/:nombrePj", (req, res, next)=>{
    let nombrePj = req.params.nombrePj;
    res.sendFile(`/sounds/laugh/${nombrePj}`, { root: __dirname });
  });
  app.get("/", (req, res, next) => {
  console.log(`\x1b[34m%s\x1b[0m`, `[POST] Dentro de peticion POST`);
  res.status(404).send();
  '<h1>404</h1>'
});
const PORT = 3001
app.listen(PORT, ()=>{
    console.log("\x1b[41m%s\x1b[0m", `Servidor escuchando en puerto ${PORT}`);
})