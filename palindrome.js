var testVariable
function checkPalindrome(testVariable){
let revStr=reverse(testVariable)

    console.log(testVariable)
    
    if(revStr==testVariable)
    {
        console.log(testVariable+ ' is palindrome')
    }
    else
        console.log(testVariable+ ' is not a palindrome')
}
checkPalindrome('Madam')
checkPalindrome('121')


function reverse(str){
    var x=str.length-1
    var strRev=""
    for(i=x;i>=0;i--){
        strRev=strRev+str[i]
    }
    return strRev
   
}
