let header = document.querySelector('header')
let beans1 = document.getElementById('bean2')
let beans2 = document.getElementById('bean3')
let bean3 = document.getElementById('bean5')
let burgerHeader = document.getElementById('header-button');
let product = document.getElementById('product');
let coffeebox = document.getElementById('coffeebox');


    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= 710) {
        header.style.marginTop = '-10vw';
        beans1.style.top = '52vw';
        beans1.style.transform = 'rotate(-80deg)';
        beans2.style.top = '50vw';
        beans2.style.transform = 'rotate(130deg)';
        bean3.style.left = '1vw';
        bean3.style.transform = 'rotate(90deg)'
        burgerHeader.style.visibility = 'visible';
        burgerHeader.style.transform = 'translateX(-100%)';
        product.style.transform = 'translate(10%,30%)';
        product.style.opacity = '1';
        coffeebox.style.transform = 'translateY(-60%)';
        coffeebox.style.opacity = '1';
      } else {
        header.style.marginTop = '0';
        beans1.style.top = '40vw';
        beans1.style.transform = 'rotate(-40deg)';
        beans2.style.top = '31vw';
        beans2.style.transform = 'rotate(-40deg)';
        bean3.style.left = '-10vw';
        bean3.style.transform = 'rotate(40deg)'
        burgerHeader.style.visibility = 'hidden';
        burgerHeader.style.transform = 'translateX(100%)';
        product.style.transform = 'translateX(-100%)';
        product.style.opacity = '0.1';
        coffeebox.style.transform = 'translateY(0%)';
        coffeebox.style.opacity = '0.1';
      }
    });

function headerActive() {
  header.style.marginTop = '0'; 
}