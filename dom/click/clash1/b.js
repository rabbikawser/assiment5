function tophidden(ad){
    const home=document.getElementById(ad)
    const remove=home.classList.add('hidden')
}
function tophidden1(ad1){
    const home=document.getElementById(ad1)
    const remove=home.classList.remove('hidden')
}
function randomalphabet(){
    const alphabetstring='abcdefghijklmnopqrstuvwxyz';
    const alphabet=alphabetstring.split('');
    //console.log(alphabet);
    const randomnumber=Math.random();
    //console.log(randomnumber);
    const pochis=randomnumber*25;
    const purnosonkha=Math.round(pochis);
    //console.log(purnosonkha);
    const letter=alphabet[purnosonkha];
    //console.log(letter);
    return letter;
}
function addbgc(abc){
    const adding=document.getElementById(abc)
    adding.classList.add('bg-orange-400');
}
function removebgc(abc){
    const adding=document.getElementById(abc)
    adding.classList.remove('bg-orange-400');
}
