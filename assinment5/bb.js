const aaaa=document.getElementById('you')

aaaa.addEventListener('click',key);
function key(event) {
      // Get the element that was clicked
      const clickedElement = event.target;
      const a=clickedElement.innerText;
     // console.log(a)

    

      
      cool(a)
     // const apend=document.getElementById('jog');
    //  const element =document.createElement('h1')
      // apend.appendChild("hi");
     

      const aa=document.getElementById('sit')
      const bb=aa.innerText;
      //console.log(bb);
      const cc=parseInt(bb);
      //console.log(cc)
      const dd=cc-1;
      console.log(dd);
       aa.innerText=dd;


       const aaa=document.getElementById('ad')
       const bbb=aaa.innerText;
       //console.log(bb);
       const ccc=parseInt(bbb);
       //console.log(cc)
       const ddd=ccc+1;
       console.log(ddd);
        aaa.innerText=ddd;
      

        const aab=document.getElementById('bdt')
       const bbc=aab.innerText;
       //console.log(bb);
       const ccd=parseInt(bbc);
       //console.log(cc)
       const dde=ccd+550;
       
        aab.innerText=dde;
       // return dde;
       //console.log(dde)
       mid(dde);
        
   
     }
     

     function mid(dde) {
   var inputElement = document.getElementById('i');
   var value = inputElement.value;
   console.log("Input value:", value);
   console.log("value is:",dde); 
   //typeof(dde)
   const ab=document.getElementById('kup1')
     ab.innerText=dde;

     if(value==='NEW15'){
      const a=dde*.85;
      //console.log( "value",a)
      ab.innerText=a;
      const aa=document.getElementById('move')
      const ac=aa.classList.add('hidden');

        }
        else if(value==='COUPLE20'){
          

          b=dde*.80;
          ab.innerText=b;
          aa1=document.getElementById('move')
         const aa=document.getElementById('move')
           const ac=aa.classList.add('hidden');
          
       }

        else{ ab.innerText=dde;}

  
  }
  function next(){
    const a=document.getElementById('start')
    const b=document.getElementById('end')
    //console.log('hello i am')
    const aa=a.classList.add('hidden')
    const ab=b.classList.remove('hidden')
    //console.log(ab)
  }
  function continu(){
    const a=document.getElementById('start')
    const b=document.getElementById('end')
    const aa=a.classList.remove('hidden')
    const ab=b.classList.add('hidden')

  }




   
 
