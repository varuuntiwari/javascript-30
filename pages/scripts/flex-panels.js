window.onload = () => {
    const panels = document.querySelectorAll('.wrapper-node');
    panels.forEach(panel => { panel.style.backgroundImage = "url('"+panel.getAttribute('data-content')+"')"; });

    function highlight(panel) {
        if(window.innerWidth > 800) {
            panels.forEach(e => { if(e !== panel) { e.style.width = "15vw"; }});
            panel.style.width = "40vw";
        } else {
            panels.forEach(e => { if(e !== panel) { e.style.height = "15vh"; }});
            panel.style.height = "40vh";
        }
    }

    // Add listener on each panel to highlight on click or hover
    panels.forEach(panel => {
        if(window.innerWidth > 800) {
            panel.addEventListener('mouseover', event => { highlight(event.target); })
            panel.addEventListener('mouseout', event => {
                panels.forEach(panel => {
                    panel.style.width = "20vw";
                });
            });
        } else panel.addEventListener('click', event => { highlight(event.target); })
    });
}