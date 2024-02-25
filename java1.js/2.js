let a="rabby"
let kawser=checkName(a)
function checkName(input){
     
    var lastChar = input.charAt(input.length - 1);
    if(lastChar.toLowerCase() === 'a' || lastChar.toLowerCase() === 'y'
     || lastChar.toLowerCase() === 'i' || lastChar.toLowerCase() === 'e'
      || lastChar.toLowerCase() === 'o' || lastChar.toLowerCase() === 'u'
       || lastChar.toLowerCase() === 'w'){
        return "good";
    }
    else{
        return "bad";
    }
   

}
console.log(kawser);




