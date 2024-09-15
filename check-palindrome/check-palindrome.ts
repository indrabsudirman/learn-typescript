function checkPalindrome(text: string): boolean {
    let formatText: string = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    console.log(formatText);
    let start: number = 0;
    let end: number = formatText.length - 1;

    while(start < end) {
        if(formatText[start] != formatText[end]) {
            return false;
        }
        start ++;
        end --;
    }
    return true;
}

let value1: string = "A man, a plan, a canal: Panama";
let value2: string = "hello";

console.log(checkPalindrome(value1))
console.log(checkPalindrome(value2))
