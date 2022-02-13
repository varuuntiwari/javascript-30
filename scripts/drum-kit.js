let audios = {
    'W': '/sounds/crash_cymbal.mp3',
    'A': '/sounds/snare_drum.mp3',
    'S': '/sounds/drum_sticks.mp3',
    'D': '/sounds/bass_drum.mp3'
};
let keyReg = /^Key\w$/;

window.onload = () => {
    window.addEventListener('keypress', (val) => {
        let key = val.code;
        if(keyReg.test(key)) {
            let letter = key[3];
            if(letter in audios) {
                let beat = new Audio(audios[letter]);
                beat.play();
            }
        }
    });
};