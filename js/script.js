$(function() {

	$("#button").on("click", function() {
		console.log("Compiling...");

		var raw = $("textarea#area").val();
		console.log(raw);

	});

});