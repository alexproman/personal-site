const menuToggle = document.querySelectorAll('.line');
const sideNav = document.querySelector('.side-nav');
const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('.section');
const main = document.querySelector('main')
function menu (){
    menuToggle.forEach((line)=>{
line.classList.toggle('active')
    if(line.classList.contains('active')){
        sideNav.classList.add('active')
        main.style.width='85%'

    }else{
        sideNav.classList.remove('active')
        main.style.width='100%'
    }
    })
}


const wrapperEl = document.getElementById('wrapper');


function wrapper(id) {

    if (id == "about-list") {
        wrapperEl.style.transform = 'translate(10.2vw, -50%)'; // Adjust the percentage based on your design
    } else if (id == "portfolio-list") {
        wrapperEl.style.transform = 'translate(19.5vw, -50%)';
    } else if (id == "contact-list") {
        wrapperEl.style.transform = 'translate(29.4vw, -50%)';
    } else {
        wrapperEl.style.transform = 'translate(2vw, -50%)';
    }
}

function changColor(target) {
    links.forEach(link => {
        link.classList.remove('active');
    });
    target.classList.add('active');
}



function addClickListenerAndScroll(targetId, scrollPosition) {
    const navLi = document.getElementById(targetId + '-list');
    const sideLi = document.getElementById(targetId + '-side');
    const targetSec = document.getElementById(targetId);
    

    navLi.addEventListener('click', () => {
        sections.forEach(sec=>{
            sec.classList.remove('active')
        })
        targetSec.classList.add('active');
        scroll({
            top: scrollPosition,
            behavior: 'smooth'
        });
    });
    sideLi.addEventListener('click', () => {
        sections.forEach(sec=>{
            sec.classList.remove('active')
        })
        targetSec.classList.add('active');
        scroll({
            top: scrollPosition,
            behavior: 'smooth'
        });
    });
}

const navigationItems = ['home', 'about', 'portfolio', 'contact'];

navigationItems.forEach((item) => {
    addClickListenerAndScroll(item, navigationItems.indexOf(item) * 640);

});

function setActiveSection() {
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', setActiveSection);
setActiveSection();


function creatbubbels(){
    const bubbels =document.querySelectorAll('.bubbels');
    const bubbel = document.createElement('span')
    bubbel.classList.add('bubbel');
    let size = Math.random() * 70 ;

    bubbel.style.width = `${size + 20 }px`;
    bubbel.style.height = `${size + 20 }px`;
    bubbel.style.left = Math.random(20) * innerWidth +'px';
    sections.forEach((sec,i)=>{
        bubbels.forEach((bub,j)=>{
            if(sec.classList.contains('active')&& i === j){
                bub.appendChild(bubbel);
            }
        })
    })
    setTimeout(()=>{
        bubbel.remove();
    },4000)

}
setInterval(creatbubbels,100);
const togglebtn = document.querySelector('.toggle-btn')
const moodIcon = document.getElementById('sun-moon');
const body= document.querySelector('body')
const header= document.querySelector('.header')
const footer= document.querySelector('footer')
togglebtn.addEventListener('click',()=>{
    moodIcon.classList.toggle('active')

    if(moodIcon.classList.contains('active')){
        setTimeout(()=>{
            moodIcon.src='./assets/icons/moon/moon-solid-24.png'
        },200)
        body.classList.add('light')
        header.classList.add('light')
        footer.classList.add('light')
        sideNav.classList.add('light')
        menuToggle.forEach(line=>{
            line.classList.add('light')
        })
    }else{
        setTimeout(()=>{
            moodIcon.src='./assets/icons/sun/sun-solid-24.png'

        },200)
        body.classList.remove('light')
        header.classList.remove('light')
        footer.classList.remove('light')
        sideNav.classList.remove('light')
        menuToggle.forEach(line=>{
            line.classList.remove('light')
        })

    }
})




