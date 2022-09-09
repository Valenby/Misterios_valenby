
const express = require('express'); // importa el modulo, se tiene que descargar.
const creaObjetoServidor =  express(); //devuleve objetvo express para cerar servifores etc

creaObjetoServidor.use(express.static('public'));

// listen crea el servidor: 
creaObjetoServidor.listen(3000,()=>{
    console.log("servidor en el puerto: ",3000);
});

// creaObjetoServidor.get('/vista/' , function (req,res){
//     res.sendFile('index.html', { root: '.'});   // mandamos a llamar el archivo aula.html
// });

creaObjetoServidor.get('/indexPrincipal/' , function (req,res){
    res.sendFile('index.html', { root: '.'});   
});

creaObjetoServidor.get('/formulario2/' , function (req,res){
    res.sendFile('formulario2.html', { root: '.'});   
});


creaObjetoServidor.get('/menuMisterios/' , function (req,res){
    res.sendFile('menu.html', { root: '.'});   
});

creaObjetoServidor.get('/Misterios5/' , function (req,res){
    res.sendFile('misterios.html', { root: '.'});   
 });

