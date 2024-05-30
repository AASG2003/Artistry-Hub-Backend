import app from './app.js'

const port = 3001;

app.listen(port, ()=>{
  console.log("Ejecutando servidor en el puerto:" + port)
})

