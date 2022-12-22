function initialize(){
    //diceTable = document.getElementById("dicetable");

    //HTML Element Objects
    c1 = document.getElementById("cell1");
    c2 = document.getElementById("cell2");
    c3 = document.getElementById("cell3");
    c4 = document.getElementById("cell4");
    c5 = document.getElementById("cell5");
    c6 = document.getElementById("cell6");
    c7 = document.getElementById("cell7");
    c8 = document.getElementById("cell8");
    c9 = document.getElementById("cell9");
    c10 = document.getElementById("cell10");
    c11 = document.getElementById("cell11");
    c12 = document.getElementById("cell12");
    c13 = document.getElementById("cell13");
    c14 = document.getElementById("cell14");
    c15 = document.getElementById("cell15");
    c16 = document.getElementById("cell16");

    cellArray = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16];
    //createTable();
    console.log(cellArray);
    //the cell that is selected
    selected = "";
    //counter of selected cells 
    selectCounter = 0;
    //blank cell
    blankCell = c16;

    for(var i = 0; i < cellArray.length ; i++)
    {
        cellArray[i].selected = false;
        console.log(cell.selected);
        //cell position [1-16] (used to calculate valid moves up down left right)
        cellArray[i].cellPosition = i + 1;
    }
}

function createTable(){
    var num = 0;
    /*
    for (var i = 0; i < 4; i++){
        var newRow = diceTable.insertRow();
        
        for(var x = 0; x < 4; x++)
        {
            var newCell = newRow.insertCell();
            if(num != 15)
            {
                newCell.innerHTML = num + 1;
                newCell.innerHTML.onclick = "BRUH";
                num++;
            }
            else{
                newCell.innerHTML = "empty";
            }
            cellArray.push(newCell);
        }
    }
    */
}
//checks if the two selected cells are valid to move(one of them is a blank)
function validMove(secondCell){
    
}

//@returns an array of valid moves
//calculates the valid move
function calculateValid(cell){
    var valid = [];
    var position = cell.getPosition;
    var up = -1;
    var down = -1;
    var left = -1;
    var right = -1;
    if (!position <= 4){
        up = position - 4;
        valid.push(up);
    }
    if(position >= 16){ 
        down = position + 4;
        valid.push(down);
    }
    if(!(position == 1 || position == 5 || position == 9 || position == 13)){ 
        left = position - 1;
        valid.push(left);
    }
    if(!(position == 4 || position == 8 || position == 12 || position == 16)){ 
        right = position + 1;
        valid.push(right);
    }
    //calculates for edge of the board and corners.
    

}


//redo function.. create validMove first
function select(cell){
    selectCounter++;
    if(selectCounter == 1)
    {
        selected = cell;
    }
    else if(selectCounter == 2){
        validMove(cell);
    }
}
