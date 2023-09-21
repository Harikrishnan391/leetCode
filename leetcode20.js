/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1.Open brackets must be closed by the same type of brackets.
2.Open brackets must be closed in the correct order.
3.Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */

var isValid=function (brackets){
    const closingBracketFor={
        "(":")",
        "{":"}",
        "[":"]",
    };

    const openingBrackets=[];

    for(const bracket of brackets){
         // Check if the current character is an opening bracket
        if(bracket in closingBracketFor){
            // If it's an opening bracket, push it onto the stack
            openingBrackets.push(bracket)
        }
        else{
            // If it's a closing bracket, check if it matches the most recent opening bracket
            const lastOpenBracket = openingBrackets.pop();
            if(closingBracketFor[lastOpenBracket]!==bracket){
                return false;
            }
        }
    }

    return openingBrackets.length===0;
}

const inputString="}[]{";
const result=isValid(inputString);
console.log(result)