window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const color = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createVisuals(index);
        });
    });

    const createVisuals = index => {
        const visual = document.querySelector('.visuals');
        const beat = document.createElement('div');
        beat.style.backgroundColor = color[index];
        visual.appendChild(beat);
        //beat.style.animation = `heartbeat 500ms infinite ease`;
        beat.addEventListener('animationend', function(){
            visual.removeChild(this);
        })

    }
});

//rescord sound
const recBtn = document.querySelector('.btn-rec');

recBtn.addEventListener('click', () => {
    console.log('pressed');
});

// navigator.mediaDevices.getUserMedia({audio: true})
//     .then(stream => {
//         const mediaRecorder = new mediaRecorder(stream);
//         mediaRecorder.start();
//     });
