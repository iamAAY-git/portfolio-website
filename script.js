let bar=document.getElementById('bars');
bar.addEventListener("click",myfunction);
function myfunction(){
    let list=document.getElementById('list');
    if(list.style.display==="none"){
    list.style.display="block";
    }
    else{
        list.style.display="none";  
    }
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}