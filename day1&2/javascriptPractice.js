// checking cookies
function checkCookie() {
    document.cookie="name=zunaira";
    document.write ("Setting Cookies : " + "name=zunaira" );
  }
// functions
  function myFunction() {
      alert("hello world");
    // return a * b;    
  }
//   console.log(myFunction(1,5));
  // objects
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  console.log(person.age);
// if else 
var greeting;
const time = new Date().getHours();
if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  console.log(greeting);
  // switch-case
var day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log(day);

  // while loop
  const cars = ["BMW", "Volvo", "Saab", "Ford"];
  var count = cars.length;
  var i=0;
while(i<count){
    console.log(cars[i]);
    i++;
}

// for loop
for(var j=0;j<count;j++){
    console.log(cars[j]);
}
// for in
for(let x in cars){
    console.log(cars[x]);
}
// for of
 for(let y of cars){
     console.log(y);
 }

 // strings

 let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let str = "abc,def,ghi,jkl";
let length = txt.length;
let part = txt.slice(7, 13);
let sub = txt.substring(7,13);
let sbstr = txt.substr(7);
console.log("using splice"+ " "+part,"using substring"+" "+sub,"using substr"+" "+ sbstr);
let newText = txt.replace("MNO", "mno");
console.log(newText);
let newSplit = str.split(",");
console.log(newSplit);

// error handling
try {
    adddlert("Welcome guest!");
  }
  catch(err) {
    document.getElementById("demo").innerHTML = err.message;
  }

  function myFunction2() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo1").value;
    try {
      if(x == "") throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 5) throw "too low";
      if(x > 10) throw "too high";
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
}

// form validation
function validateForm() {
    let name = document.forms["myForm"]["fname"].value;
    let email = document.forms["myForm"]["email"].value;
    let password = document.forms["myForm"]["password"].value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (name == "") {
      alert("Name must be filled out");
    }
    if(email == "" || !email.match(mailformat) ){
        alert("invalid email format");
    }
    if(password == "" || password.length < 6){
        alert("password is too small");
    }
  }


  