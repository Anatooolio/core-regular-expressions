// Изучи тесты `spec/snils.spec.js`
// Чтобы понимать как должны работать твои методы.

// Определи, есть ли во входной строке номер СНИЛС.
function hasSNILS(string) {
	const regExp = /(\d{3})\D(\d{3})\D(\d{3})\s(\d{2})/gim
	const res = string.match(regExp)
	if ((string = res)) {
		return true
	}
	return false
}

// Найди и верни номер СНИЛС из строки.
function grabSNILS(string) {
	const regExp = /\d{3}\D\d{3}\D\d{3}\s\d{2}/
	return string.match(regExp).join()
}

// Найди и верни все номера СНИЛС, что есть в строке.
function grabAllSNILS(string) {
	const regExp = /\d{3}\D\d{3}\D\d{3}\s\d{2}/g
	return string.match(regExp)
}

// Зашифруй номера СНИЛС. Example: XXX-XXX-XXX 30.
function hideAllSNILS(string) {
	const regExp = /\d{3}\D\d{3}\D\d{3}\s/g
	return string.replace(regExp, 'XXX-XXX-XXX ')
}

// Отформатируй все номера СНИЛС, чтобы использовались правильные разделители:
// '48001443027', '480.014.430.27', и '480--014--430 27' должны превратиться в '480-014-430 27'.
function formatSNILS(string) {
	const regExp = /\b(\d{3})[\s.-]*(\d{3})[\s.-]*(\d{3})[\s.-]*(\d{2})\b/g
	return string.replace(regExp, '$1-$2-$3 $4')
}

module.exports = {
	hasSNILS,
	grabSNILS,
	grabAllSNILS,
	hideAllSNILS,
	formatSNILS,
}
