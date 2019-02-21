(function() {


window.onload= getName();


function getName() {
  var n, q = 'Quel est ton prénom?';
  if (!window.sessionStorage) { // if sessionStorage not supported
  return window.prompt(q); // perform other action
  }
  n = window.sessionStorage.getItem('name');

  if (!n) {
      n = window.prompt(q);
      window.sessionStorage.setItem('name', n);
      if (n === null){
        var txt =  "Bienvenue ";
      }
      else {
        var txt = "Bienvenue " + n;
      }
  }
  //document.getElementById("result").innerHTML = "Bienvenue " + n ;
  //return n;

  var i = 0;
  var speed = 70;



  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("result").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }



    typeWriter(txt, speed);


  }




    })();
