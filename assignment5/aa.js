
function cool(abc){
    const a1=document.getElementById(abc)
   const a2= a1.classList.add('bg-green-400');
   // a1.classList.add('hidden');
  // console.log("great")
  //a1.style.background = "red";
 //console.log('click')

 const newdiv=document.getElementById('jog')
 const div1=document.createElement('div');
 div1.classList.add('flex')
 div1.classList.add('justify-between')
 newdiv.appendChild(div1);

 const h11=document.createElement('h1')
  h11.innerText=abc;
  div1.appendChild(h11);

  const h12=document.createElement('h1')
  h12.innerText="Economoy";
  div1.appendChild(h12);

  const h13=document.createElement('h1')
  h13.innerText=550;
  div1.appendChild(h13);
 //div1.innerText= abc;'550';
// newdiv.appendChild(div1);
   
}
//bg-green-400


