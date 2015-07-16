//alert("Champs");
setClickHandler("TriSolve",PyTheorem);
setClickHandler("QuadSolve",QuadFormula);

function PyTheorem() {
	var Side1 = Math.pow(getInput("SideA") , 2);
		//console.log(Side1);
	var Side2 = Math.pow(getInput("SideB") , 2);
		//console.log(Side2);
	var Side3 = Math.sqrt(Side1 + Side2).toFixed(4);
		//console.log(Side3);
		setHTML("SideC" ,"Side C: " + Side3);
};

function QuadFormula() {
	var Root = Math.pow(getInput("B"),2)-(4 * getInput("A") * getInput("C"));
		//console.log(Root);
	var PlusB = (-(getInput("B")) + Math.sqrt(Root)).toFixed(3) / (2 * getInput("A"));
		//console.log(PlusB);
	var MinusB = (-(getInput("B")) - Math.sqrt(Root)).toFixed(3) / (2 * getInput("A"));
		//console.log(MinusB);
		setHTML("QuadSolution1" , "Solution 1: " + PlusB);
		setHTML("QuadSolution2" , "Solution 2: " + MinusB);
};