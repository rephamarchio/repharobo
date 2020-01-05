const readline = require('readline-sync')

function start() {
	// iniciador...

	const content = {}

	content.searchTerm = askAndReturnSearchTerm()
	content.prefix =askAndReturnPrefix()
		
	function askAndReturnSearchTerm(){
		return readline.question("Type a wikipidia search term: ")
	}
	
	function askAndReturnPrefix() {
		const prefixes = ["who is","what is","The history of"]
		const selectedPrefixIndex = readline.keyInSelect(prefixes,"chose one option: ")
		const selectedPrefixText = prefixes[selectedPrefixIndex]

			//console.log(selectedPrefixText)
			//console.log(selectedPrefixIndex)

			return selectedPrefixText

	}


	console.log(content)
}

start()