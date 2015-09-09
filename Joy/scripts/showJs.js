function showPic(whichPic){
 var source=whichPic.getAttribute("href");
 var placeholder=document.getElementById("placeholder");
 console.log(source);
 placeholder.setAttribute("src",source);
 var source2=placeholder.getAttribute("src");
 console.log(source2);
}