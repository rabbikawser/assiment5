let a={ name: "rabby" , birthYear: 1999 , siteName: "google" };
kawser=password(a);

function password(input)
{
  out=input.siteName.toUpperCase()+'#'+ input.name+'@'+input.birthYear;
  return out;
}
console.log(kawser);


