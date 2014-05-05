//button prompts user to enter grid size (1-64)
//create grid size entered by user
//allow user to use grid as etch-a-sketch
//pressing button resets grid for etch-a-sketch
	
$(document).ready(function() {
	gridFunction();
	setColor("#white");
});

//button id=white	
$("#white").click(function(){	
	gridFunction();
	setColor("#white");
});
//button id=opcaity	
$("#opacity").click(function(){		
	gridFunction();
	setColor("#opacity");
});
//button id=colors
$("#colors").click(function(){	
	gridFunction();
	setColor("#colors");
});

//prompt user for grid size   
function gridFunction()
{	
	removeGrid();
	var gridSize=prompt("Please enter a number from 1 to 64");	
	
	if (gridSize > 0 && gridSize < 65)
	{			
		createGrid(gridSize);		
	}
	else
	{
		alert("Wrong entry, Please enter a number from 1 to 64");
	}
}

// create Table Grid	
function createGrid( max )
{			
	//add 16 rows to table
	for(var i=0; i < max; i++)
	{
		var row=document.getElementById('gridTable').insertRow(i);	
		//add 16 cells to each row
		for(var j=0; j < max; j++)
		{			
			row.insertCell(j);						
		}		
	}
}

//set sketch background-color for button	
function setColor(option)
{
	if(option == "#white")
	{
		$("#gridTable td").mouseenter(function(){
			$(this).css("background-color", "white");
		});
	}
	else if( option == "#opacity")
	{
		$("#gridTable td").mouseenter(function(){
			$(this).css("opacity", $(this).css("opacity") * 0.75);
		});
	}
	else
	{
		$("#gridTable td").mouseenter(function(){
			$(this).css("background-color", newcolors());
		});
	}
	
}

//create a new color	
function newcolors()
{
	var red = Math.floor((Math.random() * 255)+1);
	var green = Math.floor((Math.random() * 255)+1);
	var blue = Math.floor((Math.random() * 255)+1);
	return "rgb(" + red + "," + green + "," + blue + ")";
}
	
//remove Grid and add a new Grid
function removeGrid()
{		
	$("#gridTable").remove();
	$container = $('#container');
	$container.append("<table id='gridTable'></table>");
}
	

