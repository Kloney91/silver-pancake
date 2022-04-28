/**
* @type {HTMLCanvasElement}
*/const canvas=document.getElementById('my-canvas');
const ctx=canvas.getContext('2d');
/**
 * 
 * @param {MouseEvent} event
 */
function draw(event){
    ctx.fillRect(event.offsetX,event.offsetY,50,50)
}

canvas.addEventListener("mousemove", draw);