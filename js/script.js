$(function() {

	$("#button").on("click", function() {
		console.log("Compiling...");

		var raw = editor.getValue();

		console.log(raw);
		console.log(convert(raw));
		
		try {
			eval(convert(raw));
		} catch (e) {
		    // alert(e.message);
		    document.getElementById("out").innerHTML += "<h5 id='error'>Error: Something fishy happened - and this language does not include fishing.<h5>";
		}

	});

});

/*
examples
Hello plant:
grow("Hello plant")

Loops:
replow
plant orchard is []
plow(plant each is 0; each less 10; each increase) {
    orchard.pot(each)
}
dig(orchard.quantity more 0){
    plant weed is "orchard " grafting orchard.uproot()
    grow(weed)
}
*/
function convert(code) {
	var lines = code.split("\n");
	for (var i = 0; i < lines.length; i++){
	
		if (lines[i].search("unveil") >= 0){
			var startIndex = lines[i].search("unveil") + "unveil".length;
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
			lines[i] += "";
		}
		lines[i] = lines[i].replace("{;", "{");
		lines[i] = lines[i].replace("};", "}");
	}
	return lines.join("\n");
}