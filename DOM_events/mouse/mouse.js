const clock = document.getElementById('elem');
const hoverIntent = new HoverIntent(clock);
const body = document.querySelector('body');



clock.addEventListener('mouseenter', hoverIntent);
clock.addEventListener('mouseleave', hoverIntent);
clock.addEventListener('mousemove', hoverIntent);



function HoverIntent(elem){
  const speed = 2;
  this.tooltip = document.getElementById('tooltip');
  if (!this.tooltip) return;
  this.elem = elem;

   this.handleEvent = function(e){
     switch(e.type){
       case "mouseenter":
         this.mouseenter(e);
       break;
       case "mouseleave":
         this.mouseleave(e);
       break;
       case "mousemove":
          this.mousemove(e);
       break;
     }
   }

   this.mouseenter = function(e){
     console.log('mouseenter');
   }

   this.mouseleave = function(e){
     this.tooltip.hidden = true;
   }

   this.mouseover = function(){
     let tooltip = this.tooltip;   //создаем ссылку на элемент подсказки привязанные к обьекту
    if (!tooltip.hidden) return;
     tooltip.hidden = false;
     let coor = elem.getBoundingClientRect();
      tooltip.style.left = coor.left + 'px';
      tooltip.style.top = coor.bottom + 5 + 'px';
   }

   this.mousemove = function(e){
     let x = e.movementX;
     let y = e.movementY;
     if (Math.abs(x) < speed && Math.abs(y) < speed){
      this.mouseover();
    }
  }
}
