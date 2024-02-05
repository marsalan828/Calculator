let string = "";
let memReg = 0;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }else if(e.target.innerHTML == "M+"){
            memReg += parseFloat(string) || 0;
            document.querySelector('input').value = string;
        }else if (e.target.innerHTML == 'M-') {
            memReg -= parseFloat(string);
            document.querySelector('input').value = string;
        }
        else
        {
            string = string +e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})