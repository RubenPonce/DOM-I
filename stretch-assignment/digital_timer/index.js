console.log('what up')
const digit = [...document.querySelectorAll(".digit")];
const digits = document.querySelector(".digits");
console.log(digit);
//Counts up to 10 seconds
// Increments every 10 ms
// Has digits change to red when it gets to 10 seconds
// Should not count past 10 seconds
digit[digit.length-1].textContent = 0;
digit[digit.length-2].textContent = 0;
digit[digit.length-4].textContent = 0;
digit[digit.length-5].textContent = 0;
const time = ()=>{
    if(digit[digit.length-1].textContent < 9){
        if(digit[digit.length-5].textContent === 10){
            digit[digit.length-5].textContent = 1;
            digit[digit.length-1].textContent = 0;
            digit[digit.length-2].textContent = 0;
            digit[digit.length-4].textContent = 0;
            zaWarudo();
        }
        digit[digit.length-1].textContent++
        
    }
    else if(digit[digit.length-2].textContent < 9){
        digit[digit.length-2].textContent++
        digit[digit.length-1].textContent = 0;
    }
    else if(digit[digit.length-4].textContent < 9){
        digit[digit.length-4].textContent++
        digit[digit.length-2].textContent = 0
    } else if(digit[digit.length-5].textContent < 9){
        digit[digit.length-5].textContent++
       
    }else if(digit[digit.length-5].textContent === 10){
        zaWarudo();
        digit[digit.length-6].textContent = 1;
        digit[digit.length-1].textContent = 0;
        digit[digit.length-2].textContent = 0;
        digit[digit.length-4].textContent = 0;
        zaWarudo();
       
    }else{
    zaWarudo();
    }
}
const scope = window.setInterval(time, 5);
const zaWarudo = () =>{
   return clearInterval(scope);
}