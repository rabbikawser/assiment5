function main(){
    const homescreen=document.getElementById('home')
   //console.log (homescreen.classList);
    homescreen.classList.add('hidden')


    const screen1=document.getElementById('home1')
    screen1.classList.remove('hidden')

    const alpha='abceefghijklmnopqrseuvwxyz'
    const ab=alpha.split('');
   // console.log(a);
    const bb = Math.random()
    //console.log(bb);
    const cb=bb*25;
    const db=Math.round(cb);
   // console.log(db);
    const eb=ab[db];
   // console.log(eb)
     
const fb=document.getElementById('alphabet')
fb.innerText=eb;

//gb.classList.add('hidden');
const add=document.getElementById(eb)
add.classList.add('bg-orange-400');

}
document.addEventListener('keyup',add)
function add(event){
    //console.log(event.key)
    const bb=event.key;

    const dbb=document.getElementById('alphabet')
   const db=dbb.innerText;
   // console.log(fb.innerText,eb);

    if(db===bb)
    {
        console.log("press wright")
        const alpha='abceefghijklmnopqrseuvwxyz'
        const ab=alpha.split('');
       // console.log(a);
        const bb = Math.random()
        //console.log(bb);
        const cb=bb*25;
        const db=Math.round(cb);
       // console.log(db);
        const eb=ab[db];
       // console.log(eb)
         
    const fb=document.getElementById('alphabet')
    fb.innerText=eb;
    
    //gb.classList.add('hidden');
    const add=document.getElementById(eb)
    //add.classList.remove('bg-orange-400');
    add.classList.add('bg-orange-400');

    const  btn=document.getElementById('bt1')
    const nawa=btn.innerText;
    //console.log(nawa);
    const integer=parseInt(nawa);
    const score=integer+1;
    btn.innerText=score;



    const number=document.getElementById('number')
    number.innerText=score;



    }
    else{
        const btn1=document.getElementById('bt2')
        //console.log("press wrong")
        const value=btn1.innerText;
        const integer1=parseInt(value);
        score=integer1-1;
        btn1.innerText=score;

        if( score==0){
            const homescreen0=document.getElementById('home1')
            //console.log (homescreen.classList);
             homescreen0.classList.add('hidden')
         
         
            const screen2=document.getElementById('home2')
           screen2.classList.remove('hidden')
           // const aaa=screen2.classList;
           //  console.log(aaa);
           
          
        }

    }

   
}



function again(){
    const homescreen=document.getElementById('home2')
   //console.log (homescreen.classList);
    homescreen.classList.add('hidden')


    const screen1=document.getElementById('home1')
    screen1.classList.remove('hidden')


    const btn1=document.getElementById('bt2')
    //console.log("press wrong")
    const value=btn1.innerText;
    const integer1=parseInt(value=5);
    score=integer1-1;
    btn1.innerText=score;

    if( score==0){
        const homescreen0=document.getElementById('home1')
        //console.log (homescreen.classList);
         homescreen0.classList.add('hidden')
     
     
        const screen2=document.getElementById('home2')
       screen2.classList.remove('hidden')
       // const aaa=screen2.classList;
       //  console.log(aaa);
       
      
    }



 

   
}
 

   