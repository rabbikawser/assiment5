function a(){
    const b=document.getElementById('input')
    const result1 =b.value;

    const c=document.getElementById('input1')
    const result2 =c.value;

    const area=.5*result1*result2;
    console.log(area);
    const d =document.getElementById('ja');
    d.innerText=area;
    
}