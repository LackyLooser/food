function slider(){
    // Slider

    const slides = document.querySelectorAll('.offer__slide'),
          sliderBlock = document.querySelector('.offer__slider'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current'),
          slidesConteiner = document.querySelector('.offer__slider-offset'),
          sliderWrapper = document.querySelector('.offer__slider-wrapper'),
          width = window.getComputedStyle(sliderWrapper).width;
          
          let slideIndex = 1;
          let offset = 0;
          const dotsWrapper = document.createElement('ol');
          let dots =[];
          sliderWrapper.style.overflow = 'hidden';
          slidesConteiner.style.display = 'flex';
          slidesConteiner.style.width = `${100 *slides.length}%`;
          slidesConteiner.style.transition = '0.5s all'
          
            if(slides.length < 10){
                total.textContent = `0${slides.length}`;
                current.textContent = `0${slideIndex}`;
            } else {
                total.textContent = slides.length;
                current.textContent = slideIndex;
            }
          
          slides.forEach(slide =>{
            slide.style.width = width;
          });

          next.addEventListener('click', () => {
            if(offset == +width.slice( 0, width.length -2 ) * (slides.length - 1)){
                offset = 0;
                slideIndex = 1
            } else {
                offset += +width.slice( 0, width.length -2 );
                slideIndex++;
            }
            slidesConteiner.style.transform = `translateX(-${offset}px)`;
            
            if(slides.length < 10){
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }

            dots.forEach(dot=> dot.style.opacity = '0.5');
            dots[slideIndex-1].style.opacity = '1';
          });

          prev.addEventListener('click', () => {
            if(offset == 0){
                offset = +width.slice( 0, width.length -2 ) * (slides.length - 1);
                slideIndex = slides.length;
            } else {
                offset -= +width.slice( 0, width.length -2 );
                slideIndex--;
            }
            slidesConteiner.style.transform = `translateX(-${offset}px)`;
            
            if(slides.length < 10){
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }
            dots.forEach(dot=> dot.style.opacity = '0.5');
            dots[slideIndex-1].style.opacity = '1';
          });

          //dots

          
          sliderBlock.style.position = 'relative';
          dotsWrapper.style.cssText = `
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 15;
            display: flex;
            justify-content: center;
            margin-right: 15%;
            margin-left: 15%;
            list-style: none;
          `;
          sliderBlock.append(dotsWrapper);

          slides.forEach((slide, index) =>{
            const dot = document.createElement('li');
            dot.style.cssText = `
                box-sizing: content-box;
                flex: 0 1 auto;
                width: 30px;
                height: 6px;
                margin-right: 3px;
                margin-left: 3px;
                cursor: pointer;
                background-color: #fff;
                background-clip: padding-box;
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent;
                opacity: .5;
                transition: opacity .6s ease;
            `;
            if(index+1 === slideIndex){
                dot.style.opacity = '1';
            }
            dotsWrapper.append(dot);
            dots.push(dot);
          });

          dots.forEach((dot, i) =>{
            dot.setAttribute("data-slide-to", i+1);
            dot.addEventListener('click', (e) =>{
                if(e.target.getAttribute('data-slide-to')){
                    slideIndex = e.target.getAttribute('data-slide-to')
                }
                offset = +width.slice( 0, width.length -2 ) * (slideIndex - 1);
                slidesConteiner.style.transform = `translateX(-${offset}px)`;

                if(slides.length < 10){
                    current.textContent = `0${slideIndex}`;
                } else {
                    current.textContent = slideIndex;
                }
                dots.forEach(dot=> dot.style.opacity = '0.5');
                dots[slideIndex-1].style.opacity = '1';
                
            });
          });
};
export default slider;