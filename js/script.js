///Modal boxing

//get modal
var modalBox = document.getElementById('simpleModalBox');
//open modalBox btn
var modalBtnBox = document.getElementById('modalBtnBox');
//close btn
var closeBtnBox = document.getElementsByClassName('closeBtnBox')[0];

//close contactUs
var contactUsBox = document.getElementById('contactUsBox');

//click open listener
modalBtnBox.addEventListener('click', openModal);

//click close listener
closeBtnBox.addEventListener('click', closeModalBox);

//listener outside click
window.addEventListener('click', clickOutsideBox);

//listener contactUsBox click
contactUsBox.addEventListener('click', closeContactBox)

//function to open
function openModal(){
    modalBox.style.display = 'block';
}

//function to cls
function closeModalBox(){
    modalBox.style.display = 'none';
}

//function to cls contact
function closeContactBox(){
    modalBox.style.display = 'none';
}

//function to cls outside
function clickOutsideBox(e){
    if(e.target == modalBox){
    modalBox.style.display = 'none';
    }
}  



///////////////////////Modal weight



//get modal
var modalWeight = document.getElementById('simpleModalWeight');
//open modalWeight btn
var modalBtnWeight = document.getElementById('modalBtnWeight');
//close btn
var closeBtnWeight = document.getElementsByClassName('closeBtnWeight')[0];

//close contactUs
var contactUsWeight = document.getElementById('contactUsWeight');

//click open listener
modalBtnWeight.addEventListener('click', openModalWeight);

//click close listener
closeBtnWeight.addEventListener('click', closeModalWeight);

//listener outside click
window.addEventListener('click', clickOutsideWeight);

//listener contactUsWeight click
contactUsWeight.addEventListener('click', closeContactWeight)

//function to open
function openModalWeight(){
    modalWeight.style.display = 'block';
}

//function to cls
function closeModalWeight(){
    modalWeight.style.display = 'none';
}

//function to cls contact
function closeContactWeight(){
    modalWeight.style.display = 'none';
}

//function to cls outside
function clickOutsideWeight(e){
    if(e.target == modalWeight){
    modalWeight.style.display = 'none';
    }
}


//nav animation
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


//////////////////////// Message summary and Validation/////////////////////////////////


//Form Constructor
function Form(name, email, number, message){
    this.name = name;
    this.email = email;
    this.number = number;
    this.message = message;
}

//UI constructor
function UI() {}

//Add form content
UI.prototype.diplayFormCont = function(form){
    const content = document.getElementById('content-form');

    //create tr element
    const row = document.createElement('tr');

    //insert columns
    row.innerHTML = `
        <td>${form.name}</td>
        <td>${form.email}</td>
        <td>${form.number}</td>
        <td>${form.message}</td>
        <td><a href="javascript:void(0)" class="delete">&times;</a></td>`;

    content.appendChild(row);
}

//Display warning
UI.prototype.showAlert = function(msg, className){
    //create div
    const div = document.createElement('div');
    //add class
    div.className = `alert ${className}`;
    //add text
    div.appendChild(document.createTextNode(msg));
    //get parent , contact-form
    const container = document.querySelector('.contact-form');
    
    //before form-box
    const box = document.querySelector('form-box');
    //add alert
    container.insertBefore(div, box);

    //disappear in a sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 1000);
}

//Delete msg summary
UI.prototype.cancleMsg = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

UI.prototype.clearField = function(){
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
    document.getElementById('message').value = '';
}


//Event listener for submit btn
document.getElementById('form-box').addEventListener('submit', function(e){
    //Getform values
    const name = document.getElementById('name').value,
          email = document.getElementById('email').value,
          number = document.getElementById('number').value,
          message = document.getElementById('message').value

    //  Create an object
          const form = new Form(name, email, number, message);

    // create UI
    const ui = new UI();


    //Validation
    if(name === '' || email === '' || number === '' || message === '') {
        ui.showAlert('Please fill in required fields.', 'error');
    } else {

        //Display form content
        ui.diplayFormCont(form);

        ui.showAlert('Message has been sent!', 'success');

        //Clear inputs
        ui.clearField();
    }

    e.preventDefault();
});


//event listener for delete
document.getElementById('content-form').addEventListener('click', function(e){

    const ui = new UI();

    //Delete msg summary
    ui.cancleMsg(e.target);

    ui.showAlert('Message description removed', 'success');

    
    e.preventDefault();
});

