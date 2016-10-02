
var calc_obj = {
	operator: false,
	str1: "",
	str2: "",
	calcul: function(str1, operator, str2){
		switch(operator){
			case "+":
			return(parseInt(str1, 10) + parseInt(str2, 10));
			break;
			case "-":
			return(parseInt(str1, 10) - parseInt(str2, 10));
			break;
			case "*":
			return(parseInt(str1, 10) * parseInt(str2, 10));
			break;
			case "/":
			return(parseInt(str1, 10) / parseInt(str2, 10));
			break;
		}
	}
};
			

$("button").click(function(){
	console.log($(this).data());

	if ($(this).data("compute")) {
		console.log($(this).data("compute"));
		$("#result").html(calc_obj.calcul(calc_obj.str1, calc_obj.operator, calc_obj.str2));

	}
	else if ($(this).data("ope")) {
		console.log($(this).data("ope"));
		calc_obj.operator = $(this).data("ope");
		$("#result").html("<br>");
		console.log(calc_obj.operator);
	}
	else if (($(this).data("chiffre")) && (calc_obj.operator === false)) {
		calc_obj.str1 = calc_obj.str1 + $(this).data("chiffre");
		$("#result").html("<br>");
		console.log($(this).data("chiffre"), calc_obj.str1, "str1");

	}
	else if (($(this).data("chiffre")) && (calc_obj.operator)){
		calc_obj.str2 = calc_obj.str2 + $(this).data("chiffre");
		$("#result").html("<br>");
		console.log($(this).data("chiffre"), calc_obj.str2, "str2");
	}
	/*DEMANDE AMIMNE PK MARCHE PAS*/
	$("#str1").html(calc_obj.str1/*," ", calc_obj.operator, " ", calc_obj.str2*/);
	$("#operator").html(calc_obj.operator);
	$("#str2").html(calc_obj.str2);
	
});