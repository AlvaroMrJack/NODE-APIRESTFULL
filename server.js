const express = require("express");

const app = express();

//para configurar el puerto
app.set("port", process.env.PORT || 3000);

//para aceptar formatos json (midleware)
app.use(express.json());

app.use("/api/user", require("../node_apirestfull/routes/user.route"));

//para configurar por donde escucha el servidor
app.listen(app.get("port"), ()=>{
	console.log("Servidor corriendo en el puerto: ", app.get("port"));
});