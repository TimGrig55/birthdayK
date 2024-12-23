const tracks = [
    "Assets/music/Аллегрова.mp3",
    "Assets/music/Хаски Детка Голливуд.mp3",
    "Assets/music/Chase_Atlantic_-_Swim_49209260.mp3",
    "Assets/music/maslo_chernogo_tmina_-_sovershenno_letnyaya_pesnya_72147322.mp3",
    "Assets/music/maslo_chernogo_tmina_-_ya_tancuyu_vas_72832122.mp3",
    "Assets/music/Skriptonit_-_JEto_lyubov_61448209.mp3",
    "Assets/music/Ssshhhiiittt_-_Tancy_66793065.mp3",
    "Assets/music/UNNV_-_Muza_72911936.mp3"
];

let currentTrack = 0; // Индекс текущего трека
const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");

// Загрузка трека
function loadTrack(trackIndex) {
    audio.src = tracks[trackIndex];
    audio.load();
    console.log(`Now playing: ${tracks[trackIndex]}`);
}

// Запуск трека
function playTrack() {
    audio.play()
        .then(() => {
            playPauseButton.textContent = "⏸️";
        })
        .catch((error) => {
            console.error("Error playing track:", error);
        });
}

// Остановка трека
function pauseTrack() {
    audio.pause();
    playPauseButton.textContent = "▶️";
}

// Переключение на предыдущий трек
function prevTrack() {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
    playTrack(); // Всегда запускаем следующий трек
}

// Переключение на следующий трек
function nextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    playTrack(); // Всегда запускаем следующий трек
}

// Обработчики событий
document.getElementById("prev").addEventListener("click", prevTrack);
document.getElementById("play-pause").addEventListener("click", () => {
    if (audio.paused) {
        playTrack();
    } else {
        pauseTrack();
    }
});
document.getElementById("next").addEventListener("click", nextTrack);

// Инициализация плеера
loadTrack(currentTrack);