const html = document.documentElement;
const slider = document.querySelector('.slider');

html.addEventListener('mousedown', onDown);

/*при нажатие клавиши мыши, проверяем на нужно ли элементе сработало событие.
создаем слушателя для движения мыши
используем его чтобы корректировать положение слайдера.
заложить также проверку выходя за рамки.*/
function onDown(e){
  console.log('mousedown');
  let sliderCoor = slider.getBoundingClientRect();
  if (e.target.className != 'pointer')return;
   const pointer = e.target;
   html.addEventListener('mousemove', onMouseMove);
   html.addEventListener('mouseup', onUp);

   function onMouseMove(e){
     /*при движении мыши получаем кординаты курсора и двигаем слайдер на это место*/
     let min = sliderCoor.left;
     let max = sliderCoor.right;

     if (e.clientX >= max){
       pointer.style.left = max - pointer.offsetWidth + 'px';
     } else if (e.clientX <= min){
       pointer.style.left = pointer.offsetWidth - pointer.clientWidth - pointer.border + 'px';
     } else {
       pointer.style.left = e.clientX - sliderCoor.left - pointer.offsetWidth / 2 + 'px';
     }
   }

   function onUp(){
     if (e.target.className != 'pointer')return;
     html.removeEventListener('mousemove', onMouseMove);
   }
}
