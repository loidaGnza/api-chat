const express = require('express')
const app = express()
const usersRouter = require("./users/users.router");
const db = require("./utils/database");
const responseHandlers = require("./utils/handleResponses");

app.use(express.json());

app.use("/api/v1", usersRouter);

db.authenticate()
    .then(() => {
        console.log("las credenciales son correctas");
    })
    .catch((error) => {
        console.log(error);
    });

    db.sync()
    .then(() => {
        console.log("la base de datos se sincronizo");
    })
    .catch((error) => {
        console.log(error);
    });

    app.get("/", (req, res) => {
        res.json({
            message: "server ok",
        });
    });

    app.get('/', (req, res) => {
        responseHandlers.success({
            res,
            status: 200,
            message: 'Servidor inicializado correctamente',
            data: {
                "users": "http://localhost:9000/api/v1/users",
                "conversations": "http://localhost:9000/api/v1/conversations"
            }
        })
    })
    
app.use('*', (req, res)=> {
    responseHandlers.error({
        res,
        status: 404,
        message: 'URL not found, please try with http://localhost:9000/',
    })
})

app.listen(9000,() => {
    console.log('Server started at port 9000')
})