const BASIC_DELIMITERS_REGEX = /[,:]/;
const CUSTOM_DELIMITER_REGEX = /^\/\/(.)\n(.*)$/;

const _parseInput = (inputString) => {

	 const customMatch = inputString.match(CUSTOM_DELIMITER_REGEX);

	//커스텀 구문자
    if (customMatch) {
        const customDelimiter = customMatch[1];
		const numbersString = customMatch[2];
		
        const allDelimitersSource = customDelimiter + BASIC_DELIMITERS_REGEX.source.slice(1, -1);
		const delimiterRegex = new RegExp(`[${allDelimitersSource}]`);
		
        return { delimiter: delimiterRegex, numbersString };
	} else {
		//기본 구문자
        return { delimiter: BASIC_DELIMITERS_REGEX, numbersString: inputString };
    }
}

const _sum = (numberTokens) => {

	let sum = 0;
	
	for (const token of numberTokens) {

		const number = Number(token);
        
		if (isNaN(number)) {
			throw new Error(`[ERROR] 숫자가 아닌 문자(${token})가 포함되어 있습니다.`);
		}

		if (number < 0 || number === 0) {
			throw new Error(`[ERROR] 음수(${number})는 사용할 수 없습니다.`);
		}

		sum += number;
	}

	return sum;
}

export const calculate = (inputString) => {
    const { delimiter, numbersString } = _parseInput(inputString);
	const numberTokens = numbersString.split(delimiter)

    return _sum(numberTokens);
};