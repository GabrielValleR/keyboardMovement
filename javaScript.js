var px=0, py=0;
function movement(){
    let object = document.getElementById("objetc");
    let key = event.keyCode;
    //37=left, 38=top, 39= right, 40=down 13=enter
    if(key==37){
        px-=10;
        object.style.left=px+"px";
    }
    else if(key==38){
        py-=10;
        object.style.top=py+"px";
    }
    else if(key==39){
        px+=10;
        object.style.left=px+"px";
    }
    else if(key==40){
        py+=10;
        object.style.top=py+"px";
    }
    else if(key==13){
        object.style.backgroundColor="white";                
        document.removeEventListener("keydown",movement);
        alert("Removido Movimento");

    }
}
function addMovement(){
    let object = document.getElementById("objetc");
    object.style.backgroundColor="darkblue";
    alert("Adicionado Movimento");
    document.addEventListener("keydown",movement);
}


//Iniciando eventos
function addEvents(){
    document.addEventListener("click",addMovement);

}

window.addEventListener("load",addEvents);