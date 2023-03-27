class Scroller {
    constructor(){
        this.sections = document.querySelectorAll('.scroller');
        const sectionArr = [...this.sections];

        const currentSectionIndex = sectionArr.findIndex(this.isScrolledIntoView);

        this.currentSectionIndex = Math.max(currentSectionIndex, 0)

        this.isThrottled = false;

        this.drawNavigation();
    }

    isScrolledIntoView = (element) => {
        const rect = element.getBoundingClientRect();
        
        const elTop = rect.top;
        const elBottom = Math.floor(rect.bottom);

        const isVissible = (elTop >= 0) && (elBottom <= window.innerHeight);
        
        return isVissible;
    }

    listenScroll = (e) => {
        if(this.isThrottled) return;
        this.isThrottled = true;
        setTimeout(() => {this.isThrottled = false}, 1000);

        const direction = e.wheelDelta < 0 ? 1 : -1;
   
        this.scroll(direction);

    }

    scroll = (direction) => {
        if(direction === 1){
    
            const isLastSection = this.currentSectionIndex === this.sections.length - 1;
            if(isLastSection) return;
    
        }else if(direction === -1){
    
            const firstSection = this.currentSectionIndex === 0;
            if(firstSection) return;
    
        }
    
        this.currentSectionIndex = this.currentSectionIndex + direction;
    
        this.scrollToCurrentSection()
    }

    scrollToCurrentSection = () => {
        this.selectActiveNavItem()

        this.sections[this.currentSectionIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        })
    }

    drawNavigation = () => {
        this.navigationContainer = document.createElement('aside');
        this.navigationContainer.setAttribute('class', 'scroller_navigation');
        const list = document.createElement('ul');

        this.sections.forEach((sction, index) => {
            const listItem = document.createElement('li');
            listItem.addEventListener('click', () => {
                this.currentSectionIndex = index;
                this.scrollToCurrentSection(); 
            })
            list.appendChild(listItem);
        })

        this.navigationContainer.appendChild(list);

        document.body.appendChild(this.navigationContainer);
        this.selectActiveNavItem()
    }

    selectActiveNavItem = () => {
        const navigationItems = this.navigationContainer.querySelectorAll('li');

        navigationItems.forEach((item, index) => {
            if(index === this.currentSectionIndex){
                item.classList.add('active');
            }else{
                item.classList.remove('active');
            }
        })
    }
}

const scroller = new Scroller();

if(window.innerWidth > 800){
document.addEventListener('mousewheel', scroller.listenScroll)
document.body.style.overflow = 'hidden';
}
