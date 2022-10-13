let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;

function check1(){
    if(a === 0){
    document.querySelector(".verylittlebox1").style.visibility = "visible"
    a++;
    }else{
    document.querySelector(".verylittlebox1").style.visibility = "hidden"
    a--;
    }    
}

function check2(){
    if(b === 0){
    document.querySelector(".verylittlebox2").style.visibility = "visible"
    b++;
    }else{
    document.querySelector(".verylittlebox2").style.visibility = "hidden"
    b--;
    }  
}

function check3(){
    if(c === 0){
    document.querySelector(".verylittlebox3").style.visibility = "visible"
    c++;
    }else{
    document.querySelector(".verylittlebox3").style.visibility = "hidden"
    c--;
    }  
}

function check4(){
    if(d === 0){
    document.querySelector(".verylittlebox4").style.visibility = "visible"
    d++;
    }else{
    document.querySelector(".verylittlebox4").style.visibility = "hidden"
    d--;
    }  
}

function check5(){
    if(e === 0){
    document.querySelector(".verylittlebox5").style.visibility = "visible"
    e++;
    }else{
    document.querySelector(".verylittlebox5").style.visibility = "hidden"
    e--;
    }  
}

function check6(){
    if(f === 0){
    document.querySelector(".verylittlebox6").style.visibility = "visible"
    f++;
    }else{
    document.querySelector(".verylittlebox6").style.visibility = "hidden"
    f--;
    }  
}

function wanish(){
    document.querySelector(".verylittlebox1").style.visibility = "hidden"
    document.querySelector(".verylittlebox2").style.visibility = "hidden"
    document.querySelector(".verylittlebox3").style.visibility = "hidden"
    document.querySelector(".verylittlebox4").style.visibility = "hidden"
    document.querySelector(".verylittlebox5").style.visibility = "hidden"
    document.querySelector(".verylittlebox6").style.visibility = "hidden"
    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
}