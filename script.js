// 1.
var a;
var date = parseInt(a);
date = prompt("Enter your year of birth: ");
if(!isNaN(date)) {
    date = (date - 4) % 12;
    if(date == 0) {
        alert("You are a Rat");
    }
    else if(date == 1) {
        alert("You are an Ox");
    }
    else if(date == 2) {
        alert("You are a Tiger");
    }
    else if(date == 3) {
        alert("You are a Rabbit");
    }
    else if(date == 4) {
        alert("You are a Dragon");
    }
    else if(date == 5) {
        alert("You are a Snake");
    }
    else if(date == 6) {
        alert("You are a Horse");
    }
    else if(date == 7) {
        alert("You are a Goat");
    }
    else if(date == 8) {
        alert("You are a Monkey");
    }
    else if(date == 9) {
        alert("You are a Rooster");
    }
    else if(date == 10) {
        alert("You are a Dog");
    }else {
        alert("You are a Pig")
    }
}else {
    alert("Enter a valid birth year!!!")
}

// Extra homework
// 1.
var p;
var points = parseInt(p);
points = prompt("Enter the number of points: ");
if(!isNaN(points)) {
    if(points > 90) {
        alert("Congrats you have the best grade 10");
    }
    else if(points <= 90 && points > 80) {
        alert("Congrats your grade is 9");
    }
    else if(points <= 80 && points > 70) {
        alert("Congrats your grade is 8");
    }
    else if(points <= 70 && points > 60) {
        alert("Congrats your grade is 7");
    }
    else if(points <= 60 && points > 50) {
        alert("Congrats your grade is 6");
    } else {
        alert("You have failed. Better luck next time!")
    }
}else {
    alert("Enter a valid number!");
}

// 2.
var e;
var year = parseInt(e);
year = prompt("Enter your year of birth: ");
if(!isNaN(year)) {
    if(year % 4 == 0) {
        alert("Your year of birth is a leap year");
    }else {
        alert("Your year of birth is NOT a leap year");
    }
    
}else {
    alert("Enter a valid year!");
}

// 3.
var number1 = parseInt(prompt('Enter the first number: '));
if(isNaN(number1)) {
    alert("Your First entry is not a number!");
} 
else {
    var number2 = parseInt(prompt('Enter the second number: '));
    if(isNaN(number2)) {
        alert("Your Second entry is not a number!");
    } 
    else {
        var sum = number1 + number2;
        if(number1 == number2) {
            alert(number1 * 3)
        }
        else {
            alert(`The sum of ${number1} and ${number2} is ${sum}`);
        }
    }
}

sum = 0;

// 4.
var numb1 = parseInt(prompt('Enter the first number: '));
if(isNaN(numb1)) {
    alert("Your First entry is not a number!");
}else if(numb1 == 50) {
    console.log(true);
} 
else {
    var numb2 = parseInt(prompt('Enter the second number: '));
    if(isNaN(numb2)) {
        alert("Your Second entry is not a number!");
    }
    else if(numb2 == 50) {
        console.log(true);
    } 
    else {
        sum = numb1 + numb2;
        if(sum == 50) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}
