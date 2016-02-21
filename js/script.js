$(function() {

	$("#button").on("click", function() {
		console.log("Compiling...");

		var raw = $("textarea#area").val();
		console.log(raw);

	});

});

function convert(code) {
	code = code.replace("\n", ";\n ");
	var codeWords = code.split(" ");
	
	for (var i = 0; i < codeWords.length; i++) {
		for (var j in words) {
			if (words.hasOwnProperty(j) && (codeWord[i] == j)){
				codeWord[i] = words[j];
				break;			
			}
		}
	}
	return codeWords.join(" ");
}