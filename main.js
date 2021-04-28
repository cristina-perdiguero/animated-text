'use strict'; 

const nodoText      = document.querySelector('.container'); 
const cursor        = '|'; 
const listaMensajes = ['¡Hola mundo!', 'Soy Cristina', 'y soy frontend Junior']; 
let   mensajeActual = listaMensajes[0]; 
let   nodoMensaje; 
let   intervalBorrar; 
let   intervalEscribir; 
let   cantidad; 

maquinaEscribir(); 

function maquinaEscribir(){
    insertarMensaje(); 
    insertarCursor(); 
    efectoEscribir(); 
}

function insertarMensaje(){
    nodoMensaje = document.createElement('div'); 
    nodoText.appendChild( nodoMensaje ); 
}

function insertarCursor(){
    const nodoCursor = document.createElement('div'); 
    nodoCursor.classList.add('cursor'); 
    nodoCursor.innerHTML = cursor; 
    nodoText.appendChild( nodoCursor ); 
}

function escribirTexto( cantidad ){
    nodoMensaje.innerHTML = mensajeActual.substring(0, cantidad)
}

function borrarTexto(){
    nodoMensaje.innerHTML = nodoMensaje.innerHTML.substring(0,nodoMensaje.innerHTML.length -1);
}

function efectoBorrar(){
    let tiempo = getTiempo(); 
    intervalBorrar = setInterval(() => {
        borrarTexto(); 
        tiempo = getTiempo(); 
        if( nodoMensaje.innerHTML.length === 0 && listaMensajes.indexOf(mensajeActual) === listaMensajes.length - 1 ){
            clearInterval( intervalBorrar ); 
        } else if(nodoMensaje.innerHTML.length === 0  ){
            clearInterval( intervalBorrar ); 
            setTimeout(() => {
                mensajeActual = listaMensajes[listaMensajes.indexOf(mensajeActual) + 1]; 
                efectoEscribir(); 
            }, 10);
        }
    }, tiempo);
}

function efectoEscribir(){
    cantidad = 0;
    let tiempo = getTiempo(); 
    intervalEscribir = setInterval(()=>{
        escribirTexto( cantidad ); 
        cantidad++; 
        tiempo = getTiempo(); 
        if ( cantidad === mensajeActual.length + 1  ){
            clearInterval( intervalEscribir ); 
            setTimeout(() => {
                efectoBorrar(); 
            }, 1000);
        }
    }, tiempo)
}

function getTiempo(){
    let tiempo = 1 + Math.random()* 10;
    tiempo = Math.round(tiempo) * 15; 
    return tiempo; 
}