// 1.
var a;
var date = parseInt(a);
date = prompt("Enter your year of birth: ");
if(isNaN(a)) {
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
