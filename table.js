var tableFun = function () {

    var cellTitle = ['No.', 'Name Lastname', 'Attend', 'Payed', 'Debt'];
      var body = document.getElementById('tabinfo');
      var table = document.createElement('table');
      table.id = "table";
      var tableBody = document.createElement('tbody');
      var tableFooter = document.createElement('tfoot');
      var tableHeader = document.createElement('thead');
         
      //creating table header and footer
        //header
      for (var x = 0; x<cellTitle.length; x++) {
        var tableRowH = document.createElement('td');
        tableRowH.appendChild(document.createTextNode(cellTitle[x]));
        tableHeader.appendChild(tableRowH);
        var tableRowF = document.createElement('td');
        
        //footer
        var footerDiv = document.createElement('DIV');
        footerDiv.id = "Footer" + x + '';
        footerDivText = document.createTextNode(cellTitle[x]);
        footerDiv.appendChild(footerDivText);
        tableRowF.appendChild(footerDiv);
        tableFooter.appendChild(tableRowF);
      }
        
      // creating table body
      for (var y = 0; y < empl.length; y++) {
        var row = document.createElement('tr');
        
        // Creates rows and a text nodes
        var firstCell = document.createTextNode(y+1+'.');
        var secondCell = document.createElement('DIV');
          secondCell.id = "Person" + y + '';
          secondCellText = document.createTextNode(empl[y]);
          secondCell.appendChild(secondCellText);
          
        var thirdCell = document.createElement('INPUT'); 
          thirdCell.setAttribute('type','checkbox'); 
          thirdCell.id = "InputA" + y + '';
          thirdCell.checked = false;
          
        var fourthCell = document.createElement('INPUT'); 
          fourthCell.setAttribute('type','checkbox'); 
          fourthCell.id = "InputB" + y +'';
          fourthCell.checked = false;
          
        var fifthCell = document.createElement('DIV');
          fifthCell.id = "Value" + y + '';
          fifthCellText = document.createTextNode('');
          fifthCell.appendChild(fifthCellText);
  
        //filling table with cells
        for (var x2 = 0; x2 < cellTitle.length; x2++) {
          var cell = document.createElement('td');    
          var tContent = [firstCell, secondCell, thirdCell, fourthCell, fifthCell];    
          cell.appendChild(tContent[x2]);
          row.appendChild(cell);
        }
        //finishing table       
        tableBody.appendChild(row);
        table.appendChild(tableHeader);
        table.appendChild(tableBody);
        table.appendChild(tableFooter);
        body.appendChild(table);
      }
            
 }
       document.addEventListener('change', valCheck, false);
