window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createVisuals();
        });
    });

    const createVisuals = index => {
        const visual = document.querySelector('.visuals');
        const beat = document.createElement('div');
        visual.appendChild(beat);
        //beat.style.animation = `heartbeat 500ms infinite ease`;
        beat.addEventListener('animationend', function(){
            visual.removeChild(this);
        })

    }
});
