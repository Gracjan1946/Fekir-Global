
const data = document.querySelectorAll("input[name='data']");
const dane = document.querySelector("input[name='DANE_OSOBOWE']");

const radioFirst = document.querySelector('#inpost');
const radioSecound = document.querySelector('#poczta');
const input = data[5];

console.log(data)


const typing = (e) => {
    e.addEventListener('input',()=>{
let imie = data[0].value;
let ulica = data[1].value;
let kod = data[2].value;
let miasto = data[3].value;
let telefon = data[4].value;
let codeAdress = data[5].value;

dane.value=`Imie i Nazwisko: ${imie},
 Ulica: ${ulica}, 
 Kod: ${kod}, 
 Miasto: ${miasto}, 
 Telefon: ${telefon},
 ${radioFirst.checked ?  `Kod paczkomatu: ${codeAdress}` : ''}`;

    })
};

data.forEach(typing);



const CheckShip = () => {
    console.log(input);
    if(radioFirst.checked){
        input.style.display = 'block';
        input.required = true;
        typing(radioFirst);

    }else if(radioSecound.checked){
        input.style.display = 'none';
        input.textContent = '';
        input.required = false;
        typing(radioSecound);
    }
}


radioFirst.addEventListener('click', CheckShip);
radioSecound.addEventListener('click', CheckShip);





const code = document.querySelector("input[name='ID_ZAMOWIENIA']");

const codesGenerator = () => {
    for(let i=0;i<4;i++){
            code.value += (Math.random()*9).toFixed();
    }
}
codesGenerator();