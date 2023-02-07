const keys = document.querySelectorAll('.container__keys--key');
const volumeSlider = document.querySelector('.container__header--volume-slider');
const checkBox = document.querySelector('.container__header--keys-checkbox');

// let allKeys = [];

let audio = new Audio(); 
const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; // passing audio src based on key pressed 
    audio.currentTime = 0;
    audio.play(); // playing audio
    const clickedKey = document.querySelector(`[data-key="${key}"]`); // getting clicked key element
    clickedKey.classList.add('active'); // adding active class to the clicked key element
    setTimeout(() => { // removing active class after 150 ms from the clicked key element
        clickedKey.classList.remove('active');
    }, 150);
    return audio;
}
keys.forEach(key => {
    // allKeys.push(key.dataset.key); // adding data-key value to the allKeys array
    // calling playTune function with passing data-key value as an argument
    key.addEventListener('click', () => playTune(key.dataset.key));
});
const handleVolume = (e) => {
    // let audio = playTune();
    audio.volume = e.target.value; // passing the range slider value as an audio volume
}
const showHideKeys = () => {
    // toggling hide class from each key on the checkbox click
    keys.forEach(key => key.classList.toggle('hide'));
}
const pressedKey = (e) => {
    // if the pressed key is in the allKeys array, only call the playTune function
    // if(allKeys.includes(e.key)) 
    playTune(e.key);
}
checkBox.addEventListener('click', showHideKeys);
volumeSlider.addEventListener('input', handleVolume);
document.addEventListener('keydown', pressedKey);

/////////////////////////////////////////////////////////////

// const allKey = [
//     {
//         audio: new Audio('../tunes/a.wav'),
//         id: 'a'
//     },
//     {
//         audio: new Audio('../tunes/d.wav'),
//         id: 'd'
//     },
//     {
//         audio: new Audio('../tunes/e.wav'),
//         id: 'e'
//     },
//     {
//         audio: new Audio('../tunes/f.wav'),
//         id: 'f'
//     },
//     {
//         audio: new Audio('../tunes/g.wav'),
//         id: 'g'
//     },
//     {
//         audio: new Audio('../tunes/h.wav'),
//         id: 'h'
//     },
//     {
//         audio: new Audio('../tunes/j.wav'),
//         id: 'j'
//     },
//     {
//         audio: new Audio('../tunes/k.wav'),
//         id: 'k'
//     },
//     {
//         audio: new Audio('../tunes/l.wav'),
//         id: 'l'
//     },
//     {
//         audio: new Audio('../tunes/o.wav'),
//         id: 'o'
//     },
//     {
//         audio: new Audio('../tunes/p.wav'),
//         id: 'p'
//     },
//     {
//         audio: new Audio('../tunes/s.wav'),
//         id: 's'
//     },
//     {
//         audio: new Audio('../tunes/t.wav'),
//         id: 't'
//     },
//     {
//         audio: new Audio('../tunes/u.wav'),
//         id: 'u'
//     },
//     {
//         audio: new Audio('../tunes/w.wav'),
//         id: 'w'
//     },
//     {
//         audio: new Audio('../tunes/y.wav'),
//         id: 'y'
//     },
//     {
//         audio: new Audio('../tunes/;.wav'),
//         id: ';'
//     }
// ]
// const playNote = (e) => {
//     let audio = new Audio(); 
//     let noteValue = e.target.innerText.toLowerCase();
//     audio.src = `tunes/${noteValue}.wav`;
//     audio.play();
//     // let note = allKey.find(e => e.id === noteValue);
//     // audio = note.audio;
//     // audio.play();
//     return audio;
// }
// const pressedKey = (e) => {
//     let keyValue = e.key.toLowerCase();
//     // audio.src = `tunes/${keyValue}.wav`;
//     // audio.play();
//     let note = allKey.find(e => e.id === keyValue);
//     note.audio.play();
// }
// const handleVolume = (e) => {
//     audioVolume.volume = e.target.value; // passing the range slider value as an audio volume
// }
// const showHideKeys = () => {
//     // toggling hide class from each key on the checkbox click
//     keys.forEach(key => key.classList.toggle('hide'));
// }

// keys.forEach(key => {
//     key.addEventListener('click', playNote);
// })
// checkBox.addEventListener('click', showHideKeys);
// volumeSlider.addEventListener('input', handleVolume);
// document.addEventListener('keydown', pressedKey);
