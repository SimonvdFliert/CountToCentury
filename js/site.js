

// get the values from the Page
function getValues(){
    // get vaules from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    

    // attempt parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        // need to call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        
        // need to call displayNumbers
        displayNumbers(numbers);
    }
    else{
        alert("One of the values was not an number. Please enter a number for the start and end values.");
    }


}

// generate numbers from startvalue to the endvalue
function generateNumbers(startValue, endValue){

    let numbers = [];

    for(let index = startValue; index <= endValue; index++){
        numbers.push(index);
    }

    return numbers;
}

// display the numbers and mark the even numbers bold
function displayNumbers(numbers){

    let templateRows = "";

    for(let index = 0; index < numbers.length; index++){
        
        let className = "even";
        let number = numbers[index]

        if(number % 2 == 0){
            className = "even";
        }
        else{
            className = "odd";
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;

}