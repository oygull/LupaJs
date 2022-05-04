let lupaImg = document.getElementById('lupaImg');
let img2 = document.getElementById('img2');

lupaImg.addEventListener('mousemove', enlarge);

function enlarge(point){
  let zoomer = point.currentTarget;


  let x = point.offsetX ;
  let y = point.offsetY ;
  img2.style.transform= `translate(-${x}px;)`
}