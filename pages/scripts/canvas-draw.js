window.onload = () => {
    const canvas = document.getElementById('board');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = '#000000';
    ctx.lineJoin = 'line';
    ctx.lineCap = 'round';
    ctx.lineWidth = 10;

    let canDraw = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;

    function draw(e) {
        if(!canDraw) return;
        
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

        [lastX, lastY] = [e.offsetX, e.offsetY];
        hue++;
        if (hue >= 360) hue=0;
    }
    if('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
        canvas.addEventListener('pointerdown', (e) => {
            canDraw = true;
            [lastX, lastY] = [e.offsetX, e.offsetY];
        });
        canvas.addEventListener('pointermove', draw);
        canvas.addEventListener('pointerup', () => canDraw = false);
    } else {
        canvas.addEventListener('mousedown', (e) => {
            canDraw = true;
            [lastX, lastY] = [e.offsetX, e.offsetY];
        });
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', () => canDraw = false);
        canvas.addEventListener('mouseout', () => canDraw = false);
    }
}