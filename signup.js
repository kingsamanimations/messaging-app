var toggleBtns = document.querySelectorAll('.js-formToggle');
for(var i = 0; i < toggleBtns.length; i++){
  toggleBtns[i].addEventListener("click", toggleForm);
}  


var firstClick = true; 

function toggleForm(){
  
  if(!firstClick){
    document.querySelector('.js-imageAnimate').classList.toggle("animate");
    document.querySelector('.js-imageAnimate').classList.toggle("animateOut");
 
  
    document.querySelector('.js-panel__content').classList.toggle("animate");
    document.querySelector('.js-panel__content').classList.toggle("animateOut");
  }
  else{
    firstClick = false;
        document.querySelector('.js-imageAnimate').classList.add("animate");
    document.querySelector('.js-panel__content').classList.add("animate");

  }
  
}


// Input collecting

var person = {
    name: "john",
    age: 24,
    gender: male
};

console.log(person);

function _(element) {
    return document.getElementbyId(element);
}

var signup_button = _("signup_button");
signup_button.addEventListener("click", collect_data);

function collect_data(e) {

    signup_button.disabled = true;
    signup_button.value = "Loading...";
    var myform = _("myform");
    var inputs = myform.getElementbyTagName("INPUT");

    var data = {};
    for (var i = inputs.length - 1; i >= 0; i--) {
        var key = inputs[i].name;

        switch(key){
            case "email":
                data.email = inputs[i].value;
                break;
            
            case "username":
                data.username = inputs[i].value;
                break;
                 
            case "gender":
                if(inputs[i].checked){
                    data.gender = inputs[i].value;
                }
                break;
            
            case "password":
                data.password = inputs[i].value;
                break; 
        }
    }

    send_data(data, "signup");
     
    
}

function send_data(data, type) {
    var xml = new XMLHttpRequest();

    xml.onload = function(){

        if(xml.readyState === 4 || xml.status == 200){

            handle_result(xml.responseText);
            signup_button.disabled = false;
            signup_button.value = "Signup";
        }
    }

    data.data_type = type;
    var data_string = JSON.stringify(data);
    xml.open("POST", "api.php", true);
    xml.send(data_string);
}



function handle_result($result) {

    var data = JSON.parse(result);
    if (data.data_type == "info") {
        window.location "index.html";
    } else {
        var error = _("error").
        error.innerHTML = data.message;
        error.style.display = "block";
    }
}

