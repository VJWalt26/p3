//alert("Champs");
setClickHandler("TriSolve",PyTheorem);
setClickHandler("QuadSolve",QuadFormula);

function PyTheorem() {
	var Side1 = Math.pow(getInput("SideA") , 2);
		console.log(Side1);
	var Side2 = Math.pow(getInput("SideB") , 2);
		console.log(Side2);
	setHTML("Side C" , Math.pow(Side1 + Side2 , 2));
};

function QuadFormula() {
	var Root = Math.pow(getInput("B"),2)-(4* getInput("A") * getInput("C"));
		console.log(Root);
	var Square = Math.sqrt(Root);
		console.log(Square);
};