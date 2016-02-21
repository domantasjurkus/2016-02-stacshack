$(function() {

	$("#button").on("click", function() {
		console.log("Compiling...");

		var raw = editor.getValue();

		console.log(raw);
		console.log(convert(raw));
		
		eval(convert(raw));
	});

});

function convert(code) {
	var lines = code.split("\n");
	for (var i = 0; i < lines.length; i++){
	
		if (lines[i].search("grow") >= 0){
			var startIndex = lines[i].search("grow") + "grow".length;
			startIndex += lines[i].substring(startIndex).indexOf('(') + 1;
			var endIndex = startIndex + lines[i].substring(startIndex).indexOf(')');
			
			lines[i] = "document.getElementById(\"out\").innerHTML += " + lines[i].substring(startIndex, endIndex) + " + \"\<br>\";";
		}
		// clean up output
		else if (lines[i].search("replow") >= 0){
			lines[i] = "document.getElementById(\"out\").innerHTML = \"\";";
		}
		else {
			for (var k in words) {
				if (words.hasOwnProperty(k) && (lines[i].search(k) >= 0)){
					lines[i] = lines[i].replace(k, words[k]);
				}
			}
			lines[i] += ";";
		}
		lines[i] = lines[i].replace("{;", "{");
		lines[i] = lines[i].replace("};", "}");
	}
	return lines.join("\n");
}