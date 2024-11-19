const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeChange = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");
const mapedKey = [];

let audio = new Audio("src/assets/audios/a.wav");

const playTune = (key) => {
    audio.src = `src/assets/audios/${key}.wav`;
    audio.play();
    const clickKey = document.querySelector(`[data-key = "${key}"]`);
    clickKey.classList.add("active");
    setTimeout(() => {
        clickKey.classList.remove("active");
    },150)
};

const changeVolume = (e) =>{
    audio.volume = e.target.value;
};

const showKeys = () =>{
    pianoKeys.forEach((key) => key.classList.toggle("hide"));
}

volumeChange.addEventListener("input", changeVolume); 

pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener("click",()=> playTune(key.dataset.key));
    mapedKey.push(key.dataset.key);
});

document.addEventListener("keydown",(e)=>{
    if (mapedKey.includes(e.key)) {
        playTune(e.key);
    }
});

keysCheck.addEventListener("clicl", showKeys);
