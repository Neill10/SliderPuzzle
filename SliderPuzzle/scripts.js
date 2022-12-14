function initialize(){
    diceTable = document.getElementById("dicetable");
    cellArray = [];
    createTable();
    console.log(cellArray);
}

function createTable(){
    var num = 0;
    for (var i = 0; i < 4; i++){
        var newRow = diceTable.insertRow();
        
        for(var x = 0; x < 4; x++)
        {
            var newCell = newRow.insertCell();
            if(num != 15)
            {
                newCell.innerHTML = num + 1;
                num++;
            }
            else{
                newCell.innerHTML = "empty";
            }
            cellArray.push(newCell);
        }
    }
}

function select(){
    
}