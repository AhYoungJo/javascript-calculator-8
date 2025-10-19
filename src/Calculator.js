const BASIC_DELIMITERS_REGEX = /[,:]/;

const _parseInput = (inputString) => {

	const isCustomDelimiter = false

	if(isCustomDelimiter){
	} else {
		//기본 구문자
        return { delimiter: BASIC_DELIMITERS_REGEX, numbersString: inputString };
    }
}

const _sum = (numberTokens) => {

	let sum = 0;
	
	for (const token of numberTokens) {

		//조건
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
    const numberTokens = numbersString.split(delimiter);

    return _sum(numberTokens);
};
