function changer(id, newvalue){
	document.getElementById(id).innerHTML = newvalue;
};

function adder(operation, res){
	var element = document.getElementById(operation).innerHTML.split("+");
	var result = parseInt(element[0]) + parseInt(element[1]);
	changer(res, '='+result);
};

function adder_rand(operation){
	var element1 = Math.round(Math.random()*1000);
	var element2 = Math.round(Math.random()*1000);
	document.getElementById(operation).innerHTML = element1 + "+" + element2;
}
