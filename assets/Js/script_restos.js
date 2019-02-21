(function() {



function aujourdHui() {
      var d = new Date();
      var y = d.getFullYear();
      var m = d.getMonth();
      var j = d.getDate();
      var s = d.getDay();
      var h = d.getHours();
      var min = d.getMinutes();
      if (min<10){
        min = "0" + min
      }
      
      var jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
      var mois = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");


      var date = jours[s] + " "+ j + " " + mois[m] + " " + y;
      var heure = h + "h" + min;



  function ouverture(){

      if (j>0){
        if (h >=12 && h<=21){
          var ouv = "OUVERT";
          return ouv;
        }

        else if( h === 11 || h===22 ){
        if(min>=30){
          var ouv = "OUVERT";
          return ouv;
          }
        else {
          var ouv = "FERMÉ";
          return ouv;        }
      }

      else {
        var ouv = "FERMÉ";
        return ouv;
      }
      }
    }

var ouverture = ouverture();
console.log(ouverture);

  document.getElementById('date').innerHTML ="Nous sommes le " + date +" , " + heure + "<br>" + "Le restaurant est donc " + ouverture;
  document.getElementById('dateG').innerHTML ="Nous sommes le " + date +" , " + heure + "<br>" + "Le restaurant est donc " + ouverture;
  document.getElementById('dateL').innerHTML ="Nous sommes le " + date +" , " + heure + "<br>" + "Le restaurant est donc " + ouverture;






  };


aujourdHui();

    })();
