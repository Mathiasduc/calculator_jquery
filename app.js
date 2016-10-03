
var calc_obj = {
	operator: "",
	str1: "",
	str2: "",
	plus: "+",
	minus: "-",
	division: "/",
	multiplication: "*",

	calcul: function(str1, operator, str2){
		var operande1 = parseInt(str1, 10);
		var operande2 = parseInt(str2, 10);
		var result;
		if (operator === "+"){
			result = operande1 + operande2;
		}
		else if (operator === "/"){
			result = operande1 / operande2;
		}
		else if (operator === "*" || operator === "x"){
			result = operande1 * operande2;
		}
		else if (operator === "-"){
			result = operande1 - operande2;
		}
		return(result);
		
	},
	cancelFunction: function(cancel_obj) {
		if (cancel_obj.cancel === "Cancel" || cancel_obj === "Cancel") {
			if (calc_obj.str2) {
				calc_obj.str2 = "";
				$("#result").html("Cancel");
			}
			else if (calc_obj.operator) {
				calc_obj.operator = "";
				$("#result").html("Cancel");
			}
			else if (calc_obj.str1) {
				calc_obj.str1 = "";
				$("#result").html("Cancel");
			}
		}
		else {
			calc_obj.str1 = "";
			calc_obj.operator = "";
			calc_obj.str2 = "";
			$("#result").html("Cancel Everything");
		}
	}
};

function is_operator(x){
	if((x === "x") || (x === "+" )|| (x === "/") || (x === "-") || (x === "*"))
		return(true);
	else
		return(false);
}

$("button").click(function(){
	console.log($(this).data());

	if (($(this).data("cancel")) || ($(this).data("canceleverything"))) {
		calc_obj.cancelFunction($(this).data());
	}
	else if ($(this).data("compute")) {
		$("#result").html(calc_obj.calcul(calc_obj.str1, calc_obj.operator, calc_obj.str2));
	}
	else if ($(this).data("ope")) {
		calc_obj.operator = $(this).data("ope");
		$("#result").html("<br>");
	}
	else if (($(this).data("chiffre")) && (calc_obj.operator == false)) {
		calc_obj.str1 = calc_obj.str1 + $(this).data("chiffre");
		$("#result").html("<br>");
	}
	else if (($(this).data("chiffre")) && (calc_obj.operator)){
		calc_obj.str2 = calc_obj.str2 + $(this).data("chiffre");
		$("#result").html("<br>");
	}
	/*DEMANDE AMIMNE PK MARCHE PAS*/
	$("#str1").html(calc_obj.str1/*," ", calc_obj.operator, " ", calc_obj.str2*/);
	$("#operator").html(calc_obj.operator);
	$("#str2").html(calc_obj.str2);
});	



document.addEventListener('keydown', function(event) {
	console.log(event.key);

	var key_pad = event.key;
	var result = calc_obj.calcul(calc_obj.str1, calc_obj.operator, calc_obj.str2);

	if (key_pad === "Backspace") {
		calc_obj.cancelFunction("Cancel");
	}
	else if (key_pad === "Escape"){
		calc_obj.cancelFunction("canceleverything");
	}
	else if (key_pad === "=" || key_pad === "Enter") {
		$("#result").html(result);
	}
	else if (is_operator(key_pad)) {
		calc_obj.operator = key_pad;
		$("#result").html("<br>");
	}
	else if ((parseInt(key_pad, 10) >= 0) && (parseInt(key_pad, 10) <= 9) && (calc_obj.operator == false)) {
		calc_obj.str1 = calc_obj.str1 + key_pad;
		$("#result").html("<br>");
	}
	else if (((parseInt(10, key_pad)) >= 0) && ((parseInt(10, key_pad)) <= 9) && (calc_obj.operator)) {
		calc_obj.str2 = calc_obj.str2 + key_pad;
		$("#result").html("<br>");
	}
	/*DEMANDE AMIMNE PK MARCHE PAS*/
/*	$("#str1").html(calc_obj.str1," ", calc_obj.operator, " ", calc_obj.str2);*/
	$("#str1").html(calc_obj.str1);
	$("#operator").html(calc_obj.operator);
	$("#str2").html(calc_obj.str2);
});
//Demander pk j ai mal gerer le scope / variable modif
