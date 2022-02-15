window.onload = () => {
    function changeBG() {
        let color = document.querySelector('#color').value;
        console.log(color);
        let r = document.querySelector(':root');
        r.style.setProperty('--bg-color', color);
    }
    function changeBlur() {
        let blur = document.querySelector('#blur').value;
        document.querySelector('#blurval').innerText = blur;
        let r = document.querySelector(':root');
        r.style.setProperty('--blur', blur+"px");
    }
    function changeSpacing() {
        let spacing = document.querySelector('#spacing').value;
        let r = document.querySelector(':root');
        r.style.setProperty('--spacing', spacing+"px");
    }
    document.querySelector('#color').addEventListener('change', changeBG);
    document.querySelector('#blur').addEventListener('mousemove', changeBlur);
    document.querySelector('#blur').addEventListener('change', changeBlur);
    document.querySelector('#spacing').addEventListener('mousemove', changeSpacing);
    document.querySelector('#spacing').addEventListener('change', changeSpacing);
}