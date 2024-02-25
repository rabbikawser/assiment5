


document.addEventListener('keyup',key)

function key(event){
       // console.log("button prassed")
       const word=event.key;
       //console.log(word);
       const currentalpha=document.getElementById('alphabet')
       const alpha = currentalpha.innerText;
      // console.log(alpha,word);
       if(alpha===word){
        //console.log("write press")
       
        section();
        removebgc(alpha);

        const point=document.getElementById('bt2')
        const mui=point.innerText;

        //console.log(mui);
        //const integer=parseInt(mui);
        //console.log(integer);
        //let asol = integer+1;
       // console.log(asol);

        integer=parseInt(mui);
        const score=integer+1;
        point.innerText=score;

        const cool=document.getElementById('num')
        cool.innerText=score;

       }
       else{
        //console.log("wrong press")

        const point1=document.getElementById('bt1')
        const mui1= point1.innerText;
        integer1=parseInt(mui1);
        const score1=integer1-1;
        point1.innerText=score1;
        if(score1===0){
            // console.log("game ovber")
            tophidden('home1');
            tophidden1('home2');
        }

       }

}
function back(){
    const pawa=randomalphabet();
    //console.log(pawa);
    const naw =document.getElementById('alphabet');
    naw.innerText=pawa;

    addbgc(pawa);
}
function section(){
    tophidden('home');
    tophidden1('home1');
    back();
  
}
function again(){
    tophidden('home2');
    tophidden1('home1');

    
}




if(value==='NEW15'){
    // console.log("thik ace")
    //const aa=parseInt(dde)
    const ab=aa*.85;
    console.log(ab);

   }
   else{console.log("vul")}

    }




    if(value==='NEW15'){
        const a=dde*.85;
        console.log( "value",a)
        ab.innerText=a;
        const aa=document.getElementById('van')
    }
 
       
