

const select = document.querySelector('.scroller-clothes__select');
const btnClothes = document.querySelectorAll('.scroller-clothes__btn');

const sectionCart = document.querySelector('.scroller-checkout__cart');
console.log(sectionCart);

const money = document.querySelector("input[name='KWOTA']");
const nameService = document.querySelector("input[name='NAZWA_USLUGI']");
const itemPrice = document.querySelector(".scroller-checkout__price");


const cart = [
    {
        size: 'Album',
        quantity: 0,
        cost: 44.99,
    },
    {
        size: 'Kominiarka',
        quantity: 0,
        cost: 74.99,
    },
    {
        size: 'Box',
        quantity: 0,
        cost: 114.99,
    },
]

const quantityChange = (btn) => {
    cart.map(item => {
        if(item.size === btn.name){

            if(btn.getAttribute('data-name') === '+')
            {
                item.quantity++;
            }else{
                item.quantity--;
            }

            cartItems();
        }
    })
}

const cartItems = () => {
    
    sectionCart.innerHTML = '<h1 class="title-checkout">Cart</h1>';
    let priceItems = 0;
    nameService.value ='';

    cart.map(item => {

        if(item.quantity > 0){

            const section = document.createElement('section');
            section.setAttribute('class', 'scroller-checkout__cart-item');

            const size = document.createElement('section');
            size.setAttribute('class', 'scroller-checkout__size')
            size.textContent = item.size;
 
            const quantity = document.createElement('section');
            quantity.setAttribute('class', 'scroller-checkout__quantity');
            quantity.innerHTML = item.quantity;

            const btnMinus = document.createElement('button');
            btnMinus.setAttribute('class','scroller-checkout__btn-quantity ');
            btnMinus.setAttribute('name',`${item.size}`);
            btnMinus.setAttribute('data-name',`-`);
            btnMinus.textContent = '-';


            const btnPlus = document.createElement('button');
            btnPlus.setAttribute('class','scroller-checkout__btn-quantity');
            btnPlus.setAttribute('name',`${item.size}`);
            btnPlus.setAttribute('data-name',`+`);
            btnPlus.textContent = '+';

    
            

            section.appendChild(size);
            section.appendChild(btnMinus);
            section.appendChild(quantity);
            section.appendChild(btnPlus);
            sectionCart.appendChild(section);

            nameService.value += ` ${item.size} ilosc: ${item.quantity} |`;
        }

    
        priceItems += item.quantity * item.cost;
    })

    itemPrice.textContent = `${(priceItems).toFixed(2)} zł + 15zł ship`;
    money.value = (priceItems +15).toFixed(2);



    const buttons = document.querySelectorAll('.scroller-checkout__btn-quantity');
    buttons.forEach(btn => {
        btn.addEventListener('click', ()=> quantityChange(btn));
    })


}

const addCart = (name) => {

    cart.map(item => {

        if(item.size === name){
            item.quantity++;
            console.log(item.quantity)
        }

    })

    cartItems();

}

btnClothes.forEach(btn => {
    btn.addEventListener('click',() => addCart(btn.name));
    
})

