
    const images = document.querySelectorAll('.scroller-clothes__all-img');
    const mainImg = document.querySelectorAll('.scroller-clothes__main-img');
    const animationTime = 1;

    changeImage = (src, name) => {
        mainImg.forEach(img => {
            if(img.name === name){

            img.style.animation = `fade ${animationTime}s linear`;
        
            setTimeout(()=>{
                img.src=src;
            },animationTime*1000 / 2.5)
    
            setTimeout(()=>{
                img.style.animation = ``;
            },animationTime*1000);
        }

        })
       
         
    }

    
    images.forEach(image => {
        let src = image.src;
        image.addEventListener('click', () => changeImage(src, image.name));
    })
    


