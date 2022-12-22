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
        //console.log(cellArray[i].selected);
        //cell position [1-16] (used to calculate valid moves up down left right)
        cellArray[i].cellPosition = i + 1;
        //console.log(cellArray[i].cellPosition);
        //the current number that is displayed at this cell
        cellArray[i].display = i + 1;

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
//redo function.. create validMove first
function select(cell){
    selectCounter++;
    if(selectCounter == 1)
    {
        selected = cell;
    }
    else if(selectCounter == 2){
        if (validMove(cell)){
            slide(selected,cell);
        }
        else{
            console.log("not a valid move");
        }
        selectCounter = 0;
    }
}

//@returns true or false depending on if the secondCell is a valid move
//checks if the two selected cells are valid to move(one of them is a blank)
function validMove(secondCell){
    var validMoves = calculateValid(selected);
    var position2 = secondCell.cellPosition;
    for(move of validMoves){
        if(position2 == move){
            return true;
        }
    }
    return false;
}

//need to fix this function
//@returns an array of valid moves
//calculates the valid move
function calculateValid(cell){
    var valid = [];
    var position1 = cell.cellPosition;
    var up = -1;
    var down = -1;
    var left = -1;
    var right = -1;
    //calculates for edge of the board and corners.
    //up valid moves
    if (!position1 <= 4){
        up = position1 - 4;
        valid.push(up);
    }
    //down valid moves
    if(!position1 >= 13){ 
        down = position1 + 4;
        valid.push(down);
        console.log(down);
    }
    //left valid moves
    if(!(position1 == 1 || position1 == 5 || position1 == 9 || position1 == 13)){ 
        left = position1 - 1;
        valid.push(left);
    }
    //right valid moves
    if(!(position1 == 4 || position1 == 8 || position1 == 12 || position1 == 16)){ 
        right = position1 + 1;
        valid.push(right);
    }
    console.log(valid);
    return valid;
}

//swaps the innnerHTML of the cell
function slide(first, second){
    
    var tempDisplay = second.display;
    second.display = first.display;
    first.display = tempDisplay;

    console.log(tempDisplay);
    console.log(first.display);
    console.log(second.display);

    second.innerHTML = second.display;
    first.innnerHTML = first.display;
}


