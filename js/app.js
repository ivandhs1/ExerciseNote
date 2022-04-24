const btnBackground = document.querySelector("#btnBackground");
const btnConfirm = document.querySelector("#btnConfirm");
const btnSelect = document.querySelector("#btnSekect");
const btnCancel = document.querySelector("#btnCancel");
const btnCancelBox = document.querySelector("#btnCancelBox");

const blue = document.querySelector('#blue');
const red = document.querySelector('#red');
const white = document.querySelector('#white');
const default1 = document.querySelector('#default');

blue.addEventListener('click', verifique);
red.addEventListener('click', verifique);
white.addEventListener('click', verifique);
default1.addEventListener('click', verifique);
btnConfirm.addEventListener('click',verificDate);
btnBackground.addEventListener('click',viewWindow);
btnCancelBox.addEventListener('click',closeBox)

function verificDate(event){
    event.preventDefault();
    console.log("hola")
    let name=document.querySelector('#name').value;
    let noteOne=document.querySelector('#noteOne').value;
    let noteTwo=document.querySelector('#noteTwo').value;

    if(name=="" || noteOne=="" || noteTwo==""){
        let box2=document.querySelector('.box2');
        box2.style.display="block";
        let textConfirm=document.querySelector('#textConfirm');
        textConfirm.textContent="Please The dates full";
        setTimeout(() => {
            box2.style.display="none";
        }, 5000);
    }else{
        validateNotes(noteOne, noteTwo, name);
    }

}

function validateNotes(noteOne, noteTwo, name){
    noteOneInt = parseFloat(noteOne);
    noteTwoInt = parseFloat(noteTwo);
    name = name;

    if(noteOneInt >= 1 && noteOneInt <= 5 && noteTwoInt >= 1 && noteTwoInt <= 5){

        validateoption(noteOne, noteTwo, name)

    }else{
        let box2=document.querySelector('.box2');
        box2.style.display="block";
        let textConfirm=document.querySelector('#textConfirm');
        textConfirm.textContent="Enter notes between 1 and 5";
        setTimeout(() => {
            box2.style.display="none";
        }, 5000);
    }

}

function validateoption(noteOne, noteTwo, name){
    let option= document.querySelector('#btnValidate');
    let select= option.options[option.selectedIndex].text;
    console.log(select);

    if(select=="HONOR ROLL"){

        honorRoll(noteOne, noteTwo, name);

    }else if(select=="WIN"){

        win(noteOne, noteTwo, name);

    }else if(select=="GET IT BACK"){

        getItBack(noteOne, noteTwo, name);

    }else if(select=="LOSE"){

        lose(noteOne, noteTwo, name);

    }
}

function honorRoll(noteOne, noteTwo, name) {
    
    let honorRolln=4.0;
  //  console.log('1 = '+honorRolln);
    let valueHonorRoll=(honorRolln/((0.3*noteOne)+(0.3*noteTwo)))/0.4;
    valueHonorRoll=valueHonorRoll.toFixed(1);
  //  console.log('2 = '+valueHonorRoll);
    let noteFinal=resultNoteFinal(valueHonorRoll, noteOne, noteTwo);
 //   console.log('3 = '+noteFinal)

    if(valueHonorRoll>5){
        let box2=document.querySelector('.box2');
        box2.style.display="block";
        let textConfirm=document.querySelector('#textConfirm');
        textConfirm.textContent="It will not be able to be in the honor roll because the necessary note is higher than 5";
    }else{

        if(noteFinal>=4 ){
            let box2=document.querySelector('.box2');
            box2.style.display="block";
            let textConfirm=document.querySelector('#textConfirm');
            let cadena="You need a third note from: "+valueHonorRoll+" and so with this you will get a final note: "+noteFinal
            textConfirm.textContent=cadena;
            setTimeout(() => {
                box2.style.display="none";
            }, 5000);
        }else{
            let box2=document.querySelector('.box2');
            box2.style.display="block";
            let textConfirm=document.querySelector('#textConfirm');
            let cadena="You need a third note from: "+valueHonorRoll+" and so with this you will get a final note: "+noteFinal+" he will not be able to be in the honor roll but he will win it"
            textConfirm.textContent=cadena;
            setTimeout(() => {
                box2.style.display="none";
            }, 5000);
        }

    }




//    console.log('4 = '+cadena)
    
}
function win(noteOne, noteTwo, name){

    let honorRolln=3.5;
    //  console.log('1 = '+honorRolln);
    let valueHonorRoll=(honorRolln/((0.3*noteOne)+(0.3*noteTwo)))/0.4;
    valueHonorRoll=valueHonorRoll.toFixed(1);
    //  console.log('2 = '+valueHonorRoll);
      let noteFinal=resultNoteFinal(valueHonorRoll, noteOne, noteTwo);
   //   console.log('3 = '+noteFinal)

    if(valueHonorRoll>5){
        let box2=document.querySelector('.box2');
        box2.style.display="block";
        let textConfirm=document.querySelector('#textConfirm');
        textConfirm.textContent="You will not be able to win the subject because the necessary grade is higher than 5";
    
    }else{

        if(noteFinal>=3.5 && noteFinal<=4 ){
            let box2=document.querySelector('.box2');
            box2.style.display="block";
            let textConfirm=document.querySelector('#textConfirm');
            let cadena="You need a third note from: "+valueHonorRoll+" and so with this you will get a final note: "+noteFinal+" to win matter";
            textConfirm.textContent=cadena;
            setTimeout(() => {
                box2.style.display="none";
            }, 5000);
        }else if(noteFinal<3.5){
            let box2=document.querySelector('.box2');
            box2.style.display="block";
            let textConfirm=document.querySelector('#textConfirm');
            let cadena="You need a third note from: "+valueHonorRoll+" and so with this you will get a final note: "+noteFinal+" you will not be able to win the matter"
            textConfirm.textContent=cadena;
            setTimeout(() => {
                box2.style.display="none";
            }, 5000);
        }
    }
}


function getItBack(noteOne, noteTwo, name){
    let honorRolln=3.4;
    let valueHonorRoll=(honorRolln/((0.3*noteOne)+(0.3*noteTwo)))/0.4;
    valueHonorRoll=valueHonorRoll.toFixed(1);
      let noteFinal=resultNoteFinal(valueHonorRoll, noteOne, noteTwo);

    if(valueHonorRoll>5){
        let box2=document.querySelector('.box2');
        box2.style.display="block";
        let textConfirm=document.querySelector('#textConfirm');
        textConfirm.textContent="You will not be able to win the subject because the necessary grade is higher than 5";
    
    }else{
        let box2=document.querySelector('.box2');
        box2.style.display="block";
        let textConfirm=document.querySelector('#textConfirm');
        let cadena="you need more than: "+valueHonorRoll+" so as not to be left recovering "
        textConfirm.textContent=cadena;
        setTimeout(() => {
            box2.style.display="none";
        }, 5000);
    }
}
function lose(noteOne, noteTwo, name){
    let honorRolln=2;
    let valueHonorRoll=(honorRolln/((0.3*noteOne)+(0.3*noteTwo)))/0.4;
    valueHonorRoll=valueHonorRoll.toFixed(1);
      let noteFinal=resultNoteFinal(valueHonorRoll, noteOne, noteTwo);

    if(valueHonorRoll>5){
        let box2=document.querySelector('.box2');
        box2.style.display="block";
        let textConfirm=document.querySelector('#textConfirm');
        textConfirm.textContent="You will not be able to win the subject because the necessary grade is higher than 5";
    
    }else{
        let box2=document.querySelector('.box2');
        box2.style.display="block";
        let textConfirm=document.querySelector('#textConfirm');
        let cadena="you need more than: "+valueHonorRoll+" to avoid losing the course and recovering "
        textConfirm.textContent=cadena;
        setTimeout(() => {
            box2.style.display="none";
        }, 5000);
    }
}

function resultNoteFinal(valueHonorRoll, noteOne, noteTwo){

    valueHonorRoll=Number(valueHonorRoll);
    noteOne=Number(noteOne);
    noteTwo=Number(noteTwo);

    let noteFinal=(valueHonorRoll + noteOne + noteTwo);
 //   console.log('suma='+noteFinal);
    noteFinal=parseFloat(noteFinal/3)
 //
 
 console.log(noteFinal)
    noteFinal=noteFinal.toFixed(1);
    return noteFinal;
}



function closeBox(event){
    console.log("ss")
    event.preventDefault();
    let box1=document.querySelector('.box1');
    box1.style.display="none";
}






function viewWindow(event){
    event.preventDefault();
    let box = document.querySelector('.box1');
    box.style.display="block";

}

function verifique(event){

    if (event.target.value=="red") {
        console.log("red");
        backgroundRed();
    }else if(event.target.value=="blue"){
        console.log("blue");
        backgroundBlue();
    }else if(event.target.value=="white"){
        console.log("white");
        backgroundWhite();
    }else if(event.target.value=="default"){
        console.log("default");
        backgroundDefault();

    }
}

function backgroundRed(){
    let body= document.querySelector('#bodyS');
    body.classList.remove("bg-dark");
    body.classList.remove("bg-danger");
    body.classList.remove("bg-primary");
    body.classList.remove("text-white");
    body.classList.add("bg-danger");
    body.classList.add("text-white");
    let box = document.querySelector('.box1');
    box.style.display="none";

    let btn= document.querySelector('#btnValidate')
    btn.classList.remove("btn-danger")
    btn.classList.remove("btn-dark")
    btn.classList.add("btn-dark")
}
function backgroundBlue(){
    let body= document.querySelector('#bodyS');
    body.classList.remove("bg-dark");
    body.classList.remove("bg-danger");
    body.classList.remove("bg-primary");
    body.classList.remove("text-white");
    body.classList.add("bg-primary");
    body.classList.add("text-white"); 

    let box = document.querySelector('.box1');
    box.style.display="none";

    let btn= document.querySelector('#btnValidate')
    btn.classList.remove("btn-danger")
    btn.classList.remove("btn-dark")
    btn.classList.add("btn-danger")
}
function backgroundWhite(){
    console.log("en white")
    let body= document.querySelector('#bodyS');
    body.classList.remove("bg-dark");
    body.classList.remove("bg-danger");
    body.classList.remove("bg-primary");
    body.classList.remove("text-white");
    let box = document.querySelector('.box1');
    box.style.display="none";

    let btn= document.querySelector('#btnValidate')
    btn.classList.remove("btn-danger")
    btn.classList.remove("btn-dark")
    btn.classList.add("btn-danger")
    
}
function backgroundDefault(){
    let body= document.querySelector('#bodyS');
    body.classList.remove("bg-dark");
    body.classList.remove("bg-danger");
    body.classList.remove("bg-primary");
    body.classList.remove("text-dark");
    body.classList.add("bg-dark");
    body.classList.add("text-white");
    let box = document.querySelector('.box1');
    box.style.display="none";

    let btn= document.querySelector('#btnValidate')
    btn.classList.remove("btn-danger")
    btn.classList.remove("btn-dark")
    btn.classList.add("btn-danger")
    
}
