window.onload = () => {
    document.querySelector('#color').addEventListener('change', () => {
        let color = document.querySelector('#color').value;
        console.log(color);
        let r = document.querySelector(':root');
        r.style.setProperty('--bg-color', color);
    });

    document.querySelector('#blur').addEventListener('mousemove', () => {
        let blur = document.querySelector('#blur').value;
        document.querySelector('#blurval').innerText = blur;
        let r = document.querySelector(':root');
        r.style.setProperty('--blur', blur+"px");
    });

    document.querySelector('#spacing').addEventListener('mousemove', () => {
        let spacing = document.querySelector('#spacing').value;
        let r = document.querySelector(':root');
        r.style.setProperty('--spacing', spacing+"px");
    });
}