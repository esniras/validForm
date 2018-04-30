$( document ).ready(function() {
	 
	$( "#pavarde, #vardas" ).change(function() { 
		var vardas = $( "#vardas" ).val();
		var pavarde = $( "#pavarde" ).val();
		$( "#vardaspavarde" ).val(vardas + ' ' + pavarde);

	});
});


$(function() {
	
	$("#register").validate({
		rules: {
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			email: {
				required: "Įvesti el. pašto adresą",
				email: "Neteisingas el. pašto formatas"
			}
		}
	});
	
});

 function isInputNumber(evt){
                
	var ch = String.fromCharCode(evt.which);
	
	if(!(/[0-9]/.test(ch))){
		evt.preventDefault();
	}
	
}




/*$(document).ready(function(){
    $("field").click(function(){
        $("field").css("border-color", "red");
    });
}); */
