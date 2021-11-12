$(document).ready(function(){
    let vek = document.getElementById("vek");
    let dnes = new Date();
    let currentvek = dnes.getFullYear() - 2000;
    vek.value = currentvek;
})