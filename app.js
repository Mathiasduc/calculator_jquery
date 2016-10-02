
var calc_obj = {
	operator: "",
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
	},
	cancel: function(cancel_obj) {
		if (cancel_obj.cancel === "cancel") {
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

$("button").click(function(){
	console.log($(this).data());

	if (($(this).data("cancel")) || ($(this).data("canceleverything"))) {
		calc_obj.cancel($(this).data());
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