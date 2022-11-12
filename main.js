const myname = document.getElementsByClassName("my-name");
let quotes = document.getElementsByClassName("quotes");

const quote0 = document.createTextNode("Today A Learner, Tomorrow A Leader");
const quote1 = document.createTextNode(" No Pain No Gain");
const quote2 = document.createTextNode("When you have a dream, you've got to grab it and never let go.");
const quote3 = document.createTextNode("There is nothing impossible to they who will try.");
quotes[0].appendChild(quote0);

let i = 1;
setInterval(() => {
        
        if(i == 1){
            quotes[0].innerHTML = "";
            quotes[0].appendChild(quote1);
            i++
        }else if(i == 2){
            quotes[0].innerHTML = "";
            quotes[0].appendChild(quote2);  
            i++
        }else if(i == 3){
            quotes[0].innerHTML = "";
            quotes[0].appendChild(quote3);
            i++
        }else{
            quotes[0].innerHTML = "";
            quotes[0].appendChild(quote0);
            i = 1;
        
    }


}, 6000);