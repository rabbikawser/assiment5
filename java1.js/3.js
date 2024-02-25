
let a=[NaN, 1,12,0 ,-1 , undefined ];
kawser= deleteInvalids(a)
function deleteInvalids(input) {
  let b=[];
   let count = 0;
    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] === 'number' && !isNaN(input[i])) {
            b.push(input[i])   
        }
       
    }

   return b; 
}
console.log(kawser);
   
      