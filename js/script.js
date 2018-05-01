$(document).ready(function() {

    $("#pavarde, #vardas").change(function() {
        var vardas = $("#vardas").val();
        var pavarde = $("#pavarde").val();
        $("#vardaspavarde").val(vardas + ' ' + pavarde);

    });

});


$(function() {

    $("#register").validate({
        rules: {
            email: {
                /* required: true, */
                email: true
            }
        },
        messages: {
            email: {
                /*required: "Įvesti el. pašto adresą",*/
                email: "Neteisingas el. pašto formatas"
            }
        }
    });

});

function isInputNumber(evt) {

    var ch = String.fromCharCode(evt.which);

    if (!(/[0-9]/.test(ch))) {
        evt.preventDefault();
    }

}

/* var vardas1 = $("#vardas").val();
if (vardas1 == "") {
    $("#vardas").css({
        'border-color': 'red' // cia jquery
    });
} */

	function validateForm() {
		var vardas = document.forms["myForm"]["vardas"].value;
		var pavarde = document.forms["myForm"]["pavarde"].value;
		var email = document.forms["myForm"]["email"].value;
		var gimimodata = document.forms["myForm"]["gimimodata"].value;
		var miestas = document.forms["myForm"]["miestas"].value;
		var adresas = document.forms["myForm"]["adresas"].value;
		var numeris = document.forms["myForm"]["numeris"].value;

		if (vardas == "") {
			document.getElementById("vardas").style.borderColor = "red"; // cia javascript.
			/* return false; */
		}
		
		if (pavarde == "") {
			document.getElementById("pavarde").style.borderColor = "red"; // cia javascript.
			/* return false; */ 
		}
		
		if (email == "") {
			document.getElementById("email").style.borderColor = "red"; // cia javascript.
			/* return false; */ 
		}
		
		if (gimimodata == "") {
			document.getElementById("gimimodata").style.borderColor = "red"; // cia javascript.
			/* return false; */ 
		}
		
		if (miestas == "") {
			document.getElementById("miestas").style.borderColor = "red"; // cia javascript.
			/* return false; */ 
		}
		
		if (adresas == "") {
			document.getElementById("adresas").style.borderColor = "red"; // cia javascript.
			/* return false; */ 
		}
		
		if (numeris == "") {
			document.getElementById("numeris").style.borderColor = "red"; // cia javascript.
			/* return false; */ 
		}
		}		

	 



/*$(document).ready(function(){
    $("field").click(function(){
        $("field").css("border-color", "red");
    });
}); */