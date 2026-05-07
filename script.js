function firstChar(text) {
  let result =  text.trim();

	if(result.length === 0){
		return '';
	}
  return result[0];
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
