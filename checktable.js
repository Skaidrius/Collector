//function of checking value
  function valCheck() {
    var attend = 0;
    var payed = 0;
    var debt = 0;
    var suma = document.getElementById('sel').value;
            
        for (var u = 0; u < empl.length; u++) {
          var Id1 = "InputA" + u + '';
          var Id2 = "InputB" + u + '';
          var Input1 = document.getElementById(Id1);
          var Input2 = document.getElementById(Id2);
          var person = "Person" + u + '';
                    
          //change background and denied Input2 while Input1 is false 
          if (!Input1.checked) {
            Input2.checked = false;
            document.getElementById(person).className = "notattend";
          } else {
            document.getElementById(person).className = "attend";
          }
          var value = "Value" + u + '';
          var valEntry = document.getElementById(value);
       
          //checking debt value
          if (Input1.checked!=Input2.checked) {
            valEntry.innerHTML = 'Yes';
            document.getElementById(person).className = "notpayed";
          } else if (!Input1.checked&&!Input2.checked) { 
            valEntry.innerHTML = '';
          } else {                                                 
            valEntry.innerHTML = 'No';
          }
          //filling footer entries and style
          if (Input1.checked) {attend++;}
          if (Input2.checked) {payed++;}
          if (Input1!=Input2) {debt = attend - payed;}
          
          var footer2 = document.getElementById('Footer2');
          var footer3 = document.getElementById('Footer3');
          var footer4 = document.getElementById('Footer4');
          
          footer2.innerHTML = attend;
          footer3.innerHTML = payed+' from '+attend;
          footer4.innerHTML = debt*suma+ ' $'; 
          if (attend!=payed) {
            footer2.className = "notpayed";
            footer3.className = "notpayed";
            footer4.className = "notpayed";
          } else {
            footer2.className = "payed";
            footer3.className = "payed";
            footer4.className = "payed";
          }
        }
  }
