function string_shift(str, shift) {
	var str_length = str.length;
	var	result = [];
	
	for(var i = 0; i < str_length; i++)
	{
		result.push(str[(shift + i)%str_length]);
	}

	result= result.join("");

	return result;
}


alert(string_shift("hello world", 2));  // llo worldhe


