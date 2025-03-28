window.onload = function() {
    const genBtn = document.querySelector("button");
    genBtn.addEventListener("click", function(){
        genPsw.innerText = getRandomString(slider.value);
    });
    genBtn.addEventListener("click", strenghPoints)
    
    const slider = document.getElementById("range");
    slider.addEventListener('input', sliderValue);
    
    const pswLength = document.getElementById("psw-length");
    const genPsw = document.getElementById("password");
    const checkbox1 = document.getElementById("checkbox1");
    const checkbox2 = document.getElementById("checkbox2");
    const checkbox3 = document.getElementById("checkbox3");
    const checkbox4 = document.getElementById("checkbox4");
    const staple1 = document.getElementById("staple1");
    const staple2 = document.getElementById("staple2");
    const staple3 = document.getElementById("staple3");
    const staple4 = document.getElementById("staple4");
    const staple5 = document.getElementById("staple5");
    const strengthText = document.getElementById("strength-text");


    const svg = document.getElementById("svg");
    svg.addEventListener('click', function(){
        if(genPsw.innerHTML === "Generate a password"){
            alert("You must first generate a password");
        } else {
            navigator.clipboard.writeText(genPsw.innerHTML);
            genPsw.innerHTML = "Password copied!";
        }
        
    });
    
    pswLength.innerHTML = slider.value;

    function getRandomString(length){
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const symbols = "!?%&@£$€";
        const numbers = "0123456789"

        let chars = "";

        if(checkbox1.checked)
            chars += uppercase;

        if(checkbox2.checked)
            chars += lowercase;
        

        if(checkbox3.checked)
            chars += numbers;
        

        if(checkbox4.checked)
            chars += symbols;
        

        if(chars === "")
            return alert("You need to choose at least 1 alternative"); 

        if(slider.value < 1){
            alert("You need at least 1 character!") 
        }
        
        let randomPsw = "";
        for(let i=0; i<length; i++){
            randomPsw += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return randomPsw;
    }


    function strenghPoints(){

        let pswStrenghPoints = genPsw.innerText.length;
            
        if(checkbox1.checked)
            pswStrenghPoints *= 1.5;

        if(checkbox2.checked)
            pswStrenghPoints *= 1.5;
    
        if(checkbox3.checked)
            pswStrenghPoints *= 1.5;

        if(checkbox4.checked) {
            pswStrenghPoints *= 1.5;
        } 
        showStrength(pswStrenghPoints);
    }


    function showStrength(pswStrenghPoints){
        staple1.style.backgroundColor = '#A638F6';
        staple2.style.backgroundColor = '#A638F6';
        staple3.style.backgroundColor = '#A638F6';
        staple4.style.backgroundColor = '#A638F6';
        staple5.style.backgroundColor = '#A638F6';


        if(pswStrenghPoints > 80){
            strengthText.innerText = "Unhackable!";
            staple1.style.backgroundColor = '#B9E5E8';
            staple2.style.backgroundColor = '#B9E5E8';
            staple3.style.backgroundColor = '#B9E5E8';
            staple4.style.backgroundColor = '#B9E5E8';
            staple5.style.backgroundColor = '#B9E5E8'; 

        } else if(pswStrenghPoints > 55){
            strengthText.innerText = "Strong!";
            staple1.style.backgroundColor = '#4ABEA0';
            staple2.style.backgroundColor = '#4ABEA0';
            staple3.style.backgroundColor = '#4ABEA0';
            staple4.style.backgroundColor = '#4ABEA0';
            staple5.style.backgroundColor = '#4ABEA0'; 

        } else if (pswStrenghPoints <= 54 && pswStrenghPoints >= 40){
            strengthText.innerText = "Great!";
            staple1.style.backgroundColor = '#4ABEA0';
            staple2.style.backgroundColor = '#4ABEA0';
            staple3.style.backgroundColor = '#4ABEA0';
            staple4.style.backgroundColor = '#4ABEA0';

        } else if (pswStrenghPoints <= 39 && pswStrenghPoints >= 30){
            strengthText.innerText = "Ok";
            staple1.style.backgroundColor = '#FFA257';
            staple2.style.backgroundColor = '#FFA257';
            staple3.style.backgroundColor = '#FFA257';

        } else if(pswStrenghPoints <= 29) {
            strengthText.innerText = "Poor!";
            staple1.style.backgroundColor = '#F72C5B';
            staple2.style.backgroundColor = '#F72C5B';
        }
    }


    function calcValue() {
        let pswLengthPercentage = (slider.value / slider.max) * 100;
        slider.style.background = `linear-gradient(to right, #a638f6 ${pswLengthPercentage}%, #16111A ${pswLengthPercentage}%)`;
    }

    function sliderValue(){
        pswLength.textContent = slider.value;
        calcValue();
    }

    calcValue();
}

