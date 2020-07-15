// alert("welcome");
noOfDrum = document.querySelectorAll(".drum").length;

for (let i = 0; i<noOfDrum;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",myFunction);
}

// let i = 0;
// while(i < noOfDrum)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click",myFunction);
//     i+=1;
// }
// document.querySelector("body").this.color="red";
function myFunction()
{
    let buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAimation(buttonInnerHtml);
   
   
       
    }

    document.addEventListener("keypress",function(event){
              makeSound(event.key);
              buttonAimation(event.key);
    });


//     document.addEventListener("keydown",function(event){
//      console.log(event);
// });


function makeSound(key)
{
     switch (key) {
          case "w":
               let audio = new Audio('crash.mp3');
               audio.play();
               break;
  
          case "a":
               let audio1 = new Audio('kick-bass.mp3');
               audio1.play();
               
               break;
  
          case "s":
               let audio2 = new Audio('snare.mp3');
               audio2.play();
               
               break;
  
          case "d":
               let audio3 = new Audio('tom-1.mp3');
               audio3.play();
              break;
  
          case "j":
               let audio4 = new Audio('tom-2.mp3');
               audio4.play();
               break;
  
          case "k":
               let audio5 = new Audio('tom-3.mp3');
               audio5.play();
               break;
  
          case "l":
               let audio6 = new Audio('tom-4.mp3');
               audio6.play();
               break;
      
          default: console.log(buttonInnerHtml);
               break;
}






    // this.style.color="white";
    // let audio = new Audio('sounds/tom-1.mp3');
    // audio.play();
    
   
}

// function myFunction()
// {
//     document.querySelectorAll(".drum")[0].style.backgroundColor="red";
//     document.querySelectorAll(".drum")[1].style.backgroundColor="yellow";
//     document.querySelectorAll(".drum")[2].style.backgroundColor="red";
//     document.querySelectorAll(".drum")[3].style.backgroundColor="red";
//     document.querySelectorAll(".drum")[4].style.backgroundColor="green";
//     document.querySelectorAll(".drum")[5].style.backgroundColor="red";
//     document.querySelectorAll(".drum")[6].style.backgroundColor="red";
// }


function buttonAimation(currentkey)
{
     let activebutton = document.querySelector("."+currentkey);
     activebutton.classList.add("pressed");

     setTimeout(function(){
          activebutton.classList.remove("pressed")
     },100);
}