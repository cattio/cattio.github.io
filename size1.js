function wchest_function() {
  var x, text;

  x = document.getElementById("wchest").value;

  if (isNaN(x) || x == 0){text = "Input not valid, please enter your chest measurement"; }
  else if ( x < 29){ text = "Your chest measurement must be at least 29";}
  else if (x > 28 && x < 31){ text = "Your shirt size is extra extra small (XXS)";}
  else if (x > 30 && x < 33){ text = "Your shirt size is extra small (XS)";}
  else if (x > 32 && x < 36){ text = "Your shirt size is small (S)";}
  else if (x > 35 && x < 39){ text = "Your shirt size is medium (M)";}
  else if (x > 38 && x < 42){ text = "Your shirt size is large (L)";}
  else if (x > 41 && x < 47){ text = "Your shirt size is extra large (XL)";}
  else if (x > 46 && x < 52){ text = "Your shirt size is double extra large (2XL)";}
  else if (x > 51 && x < 57){ text = "Your shirt size is triple extra large (3XL)";}
  else if (x > 56 && x < 61){ text = "Your shirt size is quadruple extra large (4XL)";}
  else if (x > 60 ){ text = "Your chest measurement must be smaller than 61";}
  else { text = "Congrats, you broke the program"; }

  document.getElementById("wchest_size").innerHTML = text;
}

function wwaist_function() {
  var x, text;

  x = document.getElementById("wwaist").value;

  if (isNaN(x) || x == 0){text = "Input not valid, please enter your waist measurement"; }
  else if ( x < 23){ text = "Your waist measurement must be at least 23";}
  else if (x > 22 && x < 25){ text = "Your pant size is US size 0, or extra extra small (XXS)";}
  else if (x > 24 && x < 26){ text = "Your pant size is US size 2, or extra small (S)";}
  else if (x > 25 && x < 29){ text = "Your pant size is US size 4 or 6, or small (S)";}
  else if (x > 28 && x < 32){ text = "Your pant size is US size 8 or 10, or medium (M)";}
  else if (x > 31 && x < 35){ text = "Your pant size is US size 12 or 14, or large (L)";}
  else if (x > 34 && x < 39){ text = "Your pant size is US size 16 or 18, or extra large (XL)";}
  else if (x > 38 && x < 45){ text = "Your pant size is US size 20 or 22, or double extra large (2XL)";}
  else if (x > 44 && x < 50){ text = "Your pant size is US size 24 or 26, or triple extra large (3XL)";}
  else if (x > 49 && x < 54){ text = "Your pant size is US size 28 or 30, or quadruple extra large (4XL)";}
  else if ( x > 53){ text = "Your waist measurement must be smaller than 54";}
  else { text = "Congrats, you broke the program"; }

  document.getElementById("wwaist_size").innerHTML = text;
}

 function wbra_function() {
  var x, y, text;

  x = document.getElementById("wbust").value;
  y = document.getElementById("wunder_bust").value;
// band measurements
  b = 0;
// cup measurement
c = 0;

  if (isNaN(y) || y == 0 || isNaN(x) || x == 0 ){text = "Inputs not valid, please enter a measurement"; }
  else if ( y > x  || y == x) { text = "Your bust measurement should be larger than your under bust measurement"}
  else if ( y < 25){ text = "Your under bust measurement must be at least 25";}
  else if ( y > 40){ text = "Your  under bust measurement must be smaller than 41";}
  else if ( x < 32){ text = "Your bust measurement must be at least 32";}
  else if ( x > 50){ text = "Your bust measurement must be smaller than 51";}
  else if (y > 24 && y < 41){
    if( y== 25 || y== 26) { b = 30}
    else if( y== 27 || y== 28) { b = 32;}
    else if( y== 29 || y== 30) { b = 34;}
    else if( y== 31 || y== 32) { b = 36;}
    else if( y== 33 || y== 34) { b = 38;}
    else if( y== 35 || y== 36) { b = 40;}
    else if( y== 37 || y== 38) { b = 42;}
    else if( y== 39 || y== 40) { b = 44;}
    // get cup size
    c = x-y
    if (c == 1 ) { c = "A";}
    else if (c == 2 ) { c = "B";}
    else if (c == 3 ) { c = "C";}
    else if (c == 4 ) { c = "D";}
    else if (c == 5 ) { c = "DD/E";}
    else if (c == 6 ) { c = "DDD/F";}
    else if (c == 7 ) { c = "DDDD/G";}
    else if (c == 8 ) { c = "H";}
    else if (c == 8 ) { c = "I";}
    else if (c > 8) {c = "Too big";}
    text = "Your bra size is ";
    text += b;
    text += c;

  }
  else { text = "Congrats, you broke the program"; }


    document.getElementById("wbra_size").innerHTML = text;
}

function mchest_function() {
  var x, text;

  x = document.getElementById("mchest").value;

  if (isNaN(x) || x == 0){text = "Input not valid, please enter your chest measurement"; }
  else if ( x < 31){ text = "Your chest measurement must be at least 29";}
  else if (x > 30 && x < 34){ text = "Your shirt size is extra small (XS)";}
  else if (x > 33 && x < 37){ text = "Your shirt size is small (S)";}
  else if (x > 36 && x < 40){ text = "Your shirt size is medium (M)";}
  else if (x > 39 && x < 44){ text = "Your shirt size is large (L)";}
  else if (x > 43 && x < 47){ text = "Your shirt size is extra large (XL)";}
  else if (x > 46 && x < 49){ text = "Your shirt size is double extra large (XXL)";}
  else if (x > 48 ){ text = "Your chest measurement must be smaller than 48";}
  else { text = "Congrats, you broke the program"; }

  document.getElementById("mchest_size").innerHTML = text;
}

function mwaist_function() {
  var x, text;

  x = document.getElementById("mwaist").value;

  if (isNaN(x) || x == 0){text = "Input not valid, please enter your waist measurement"; }
  else if ( x < 28){ text = "Your waist measurement must be at least 28";}
  else if (x > 27 && x < 30){ text = "Your pant size is US size 28R, or extra small (S)";}
  else if (x > 29 && x < 33){ text = "Your pant size is US size 30R or 32R, or small (S)";}
  else if (x > 32 && x < 36){ text = "Your pant size is US size 34R, or medium (M)";}
  else if (x > 35 && x < 39){ text = "Your pant size is US size 36R or 38R, or large (L)";}
  else if (x > 38 && x < 42){ text = "Your pant size is US size 40R or 42R, or extra large (XL)";}
  else if (x > 41 && x < 45){ text = "Your pant size is US size 44R or 46R, or double extra large (2XL)";}
  else if ( x > 44){ text = "Your waist measurement must be smaller than 44";}
  else { text = "Congrats, you broke the program"; }

  document.getElementById("mwaist_size").innerHTML = text;
}
