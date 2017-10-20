    var win_numb = 0;
    var lose_numb = 0;
    var guess_left = 9;
    var comp_guess=String.fromCharCode(Math.floor(Math.random()*25)+97);

       


    document.onkeyup = function(event){ 

    console.log(comp_guess);      

    var user_guess = event.key;

     document.getElementById("winnerimg").innerHTML='';

 

  if (user_guess.charCodeAt(0)< 123 && user_guess.charCodeAt(0)>96 ||user_guess.charCodeAt(0)==70){ //only works if key input was within lowercase alphabet and F#
    document.getElementById("warning").innerHTML ="";
   
    if (user_guess===comp_guess){

      win_numb += 1; //matches will get win +1
      document.getElementById("winnerimg").innerHTML='<img src="asset/image/win.jpg">';
      comp_guess = String.fromCharCode(Math.floor(Math.random()*25)+97);
      console.log(comp_guess);
      guess_left =9;      
      
     }

    else{
      guess_left -= 1; //not matching will get guess left -1

    }

    if (guess_left===0){ // if guess left = 0
      lose_numb += 1;  // lose number +1
      guess_left =9; // guess left will be returned to 9 (starting point)
      document.getElementById("your_guess").innerHTML="Your Guess: "; //Write "Your Guess: " This is a bug fix.
      document.getElementById("winnerimg").innerHTML='<img src="asset/image/loser.jpg">';
      comp_guess = String.fromCharCode(Math.floor(Math.random()*25)+97);
      console.log(comp_guess);  

    }

  }

  else{
    document.getElementById("warning").innerHTML ="<h2><b> Please only use lower case alphabets </b></h2>";

  }
    document.querySelector("#score").innerHTML =  //displaying current status
    "<p> Win Number: <b> " +win_numb + "</b></p>"+
    "<p> Loses Number: <b> " +lose_numb + "</b></p>"+
    "<p> Guess Left: <b> " +guess_left + "</b></p>";


    var x = document.createElement("span");  //appending user's input 
    x.appendChild(document.createTextNode(user_guess + ", "));
    document.getElementById("your_guess").appendChild(x);


    }