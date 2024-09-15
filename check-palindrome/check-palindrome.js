function checkPalindrome(text) {
    var formatText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    console.log(formatText);
    var start = 0;
    var end = formatText.length - 1;
    while (start < end) {
        if (formatText[start] != formatText[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
var value1 = "A man, a plan, a canal: Panama";
var value2 = "hello";
console.log(checkPalindrome(value1));
console.log(checkPalindrome(value2));
