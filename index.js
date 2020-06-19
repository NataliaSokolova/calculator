var bplus = document.getElementById("bplus");
var bminus = document.getElementById("bminus");
var bmultiplay = document.getElementById("bmultiplay");
var bdivide = document.getElementById("bdivide");

var input2 = document.getElementById('number2');
var input1 = document.getElementById('number1');




function makeOperation (operationCode){

    var number1 =  Number(input1.value);
    var number2 = Number(input2.value)

    if(operationCode === '+'){

        var result =number1+number2;

     } else if(operationCode === '-'){
        
        var result =number1- number2;
        
     

    } else if (operationCode === '*') {
        var result =number1* number2;

    } else if (operationCode === '/') {
     
        var result =number1 / number2;
    } else {
        window.alert("unknown operation")
    }
    window.alert(result)
}





function operationButtonClick(eventObject){
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
     makeOperation(operation);
}




var operationButtons = [bplus,bminus, bmultiplay, bdivide];

for (var i  =0; i < operationButtons.length; i ++){
    var button = operationButtons[i];
    button.addEventListener('click', operationButtonClick);

  
}

