//toggle textbox and button for adding person 
function addPerson() {
  var add1 = document.getElementById('add1');
  var remove1 = document.getElementById('remove1');
  var adding = document.getElementById('adding');
  var removing = document.getElementById('removing');
  var txt = document.getElementById('txt');
    
  add1.value = '';
  if (adding.className != 'visible') {
    adding.className = 'visible';
    txt.className = 'visible';
    if (removing.className == 'visible') {
      removing.className = 'invisible';
    }
  } else {
    adding.className = 'invisible';
    txt.className = 'invisible';
  };
};

//toggle textbox and button for removing person 
function remPerson(){  
  if (removing.className != 'visible') {
    remove1.value = '';
    removing.className = 'visible';
    txt.className = 'visible';
    if  (adding.className == 'visible') {
      adding.className = 'invisible';
    }
  } else {
    removing.className = 'invisible';
    txt.className = 'invisible';
  };
};

//add person to array 'empl'
function plusPerson() {
  var plusVal = add1.value;
  if (plusVal != '') {
    empl.push(plusVal);
    add1.value = '';
    var elem = document.getElementById('table');
    elem.parentNode.removeChild(elem);
    tableFun();
  }
};
//remove person from array 'empl'
function minusPerson() {
  var remoVal = remove1.value;
  var minusVal = remoVal-1;
  if (remoVal != '') {
    empl.splice(minusVal,1);
    remove1.value = '';
    var elem = document.getElementById('table');
    elem.parentNode.removeChild(elem);
    tableFun();
  }
};
