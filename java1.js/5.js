
let a=[3000,2000,500,4000,5000,6000]
let b=8000;
kawser= monthlySavings(a,b);
function  monthlySavings(inputa,inputb){
   
    let s2=0;
    let s1=0;
    for(const number of inputa){ 
   if(number>3000){
    add1=number*.80;
    s1=s1+add1
    
   }
      else{
    add2=number;
    s2=s2+add2;
   }
   } 

   cam=s1+s2;
   savvings=cam-inputb;

   if( savvings>0){
    return savvings;
   }
   else{
    return "earn more";
   }
   cam=s1+s2;
   savvings=cam-inputb;
   }

    console.log(kawser);
