const mouseFollower = document.getElementById('highlight-follower');
const html = document.querySelector('html');

document.addEventListener('mousemove',(e) => {
    const percentMove = MouseMove(e,html.clientWidth);
    
    mouseFollower.style.left = percentMove+'%';
});

function MouseMove(e,clientWidth: number){
    const movePercent = 100 * (e.clientX / clientWidth);

    const percentMove = movePercent;

    return percentMove;
}

export { MouseMove }