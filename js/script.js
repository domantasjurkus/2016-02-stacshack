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
	
	var print = "";
	
	for (var i = 0; i < codeWords.length; i++) {
		if (codeWords[i] == "grow")
			print = codeWords[i+1];
		for (var j in words) {
			if (words.hasOwnProperty(j) && (codeWords[i] == j)){
				codeWords[i] = words[j];
				break;
			}
		}
	}
	
	var result = codeWords.join(" ") + ";" 
	//if (print != "")
		
	return result;
}