const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const app = express()
//configurar que la compu escuche desde un navegador , del tipo get
//en este caso a nuestra compu poniendo local host o pongo la ip de mi pc


app.use(express.json())
//funcion que se ejecuta antes de entrar a las funciones

app.get('/',function(req,res){ 
    res.send('hola mundo')
})
// le paso una funcion peticion que quiero recibir y pongo la ruta 


app.post('/imagen',upload.single('imagen'),function(req,res){

    const body = req.body
    const imagen = req.file
    console.log(imagen)

    res.send('hola mundo desde el post')
})

app.listen(3000)
//le pongo en que puerto quiero ponerlo en el 3000

