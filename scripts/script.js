let audio = document.querySelector('audio')
let speedSelect = document.querySelector('.speed')
let speedOption = document.querySelectorAll('.itemspeed')
const currentTimeEl = document.getElementById("current-time");
let playBtn = document.querySelector('.play') 
let time = document.querySelector('.time')
const durationEl = document.getElementById("duration");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
let musicName = document.querySelector('.musicName')
let artist = document.querySelector('.artist')
let img = document.querySelector('.img')
const songs = [
    
    {path:'music/Kasra Zahedi Darya.mp3', display:'Darya',artist:'Kasra Zahedi',cover:'img/kasar.jpg'},

    {path:'music/Aron Afshar - Aram Aram.mp3', display:'Aram Aram',artist:'Aron Afshar',cover:'img/aron.jpg'},

    {path:'music/1.mp3', display:'There You Are',artist:'Zayn Malik',cover:'img/zayn.jpg'},

    {path:'music/Afshin Azari - Ne Gozlerdi Bu.mp3', display:'Ne Gozlerdi Bu',artist:'Afshin Azari',cover:'img/afshin.jpg'},

    {path:'music/Asef Aria Mooye Lakht.mp3', display:'Mooye Lakht',artist:'Asef Aria',cover:'img/asef.jpg'},

    {path:'music/Farzad Farzin -  Medly.mp3', display:'Medly',artist:'Farzad Farzin',cover:'img/farzad.jpg'},

    {path:'music/Macan Band - Mosaferat.mp3', display:'Mosaferat',artist:'Macan Band',cover:'img/Macan.jpg'},

    {path:'music/Shut Down - BLACKPINK.m4a', display:'Shut Down',artist:'BLACKPINK',cover:'img/black.jpg'},

]


audio.src = songs[0].path

let isPlay = false

function playAudio(){
    if(isPlay){
        PauseHandler()
    }else{
        playHandler()
    }
}

function playHandler(){
    isPlay = true
    playBtn.classList.replace('fa-play','fa-pause')
    audio.play()
    console.log('Play!');
}
function PauseHandler(){
    isPlay = false
    playBtn.classList.replace('fa-pause','fa-play')
    audio.pause()
    console.log('pause!');
}
speedSelect.addEventListener('change',function(){
    audio.playbackRate = speedSelect.value
})

function updateProgressBar(e) {
    if (isPlay) {
      const duration = e.srcElement.duration;
      const currentTime = e.srcElement.currentTime;

      let progressPercent = (currentTime / duration) * 100;
      progress.style.width = progressPercent + "%"

      const durationMinutes = Math.floor(duration / 60);
      let durationSeconds = Math.floor(duration % 60);
      if (durationSeconds < 10) {
        durationSeconds = "0" + durationSeconds;
      }

      if (durationSeconds) {
        durationEl.textContent = durationMinutes + ":" + durationSeconds;
      }

      const currentMinutes = Math.floor(currentTime / 60);
      let currentSeconds = Math.floor(currentTime % 60);
      if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
      }
      currentTimeEl.textContent = currentMinutes + ":" + currentSeconds;
    }
  }


let indexAudio = 0
function Next(){

    indexAudio++
    if(indexAudio<songs.length){
        // audio change
        audio.src = songs[indexAudio].path
        // 
        // cover Image
        imageIndex = songs[indexAudio]['cover']
        img.setAttribute('src',imageIndex)
        // 
        // artist & name music
        musicNameIndex = songs[indexAudio]['display']
        artistIndex = songs[indexAudio]['artist']
        musicName.innerHTML = musicNameIndex
        artist.innerHTML = artistIndex
        // 
        img.classList.remove("active");
        setTimeout(function(){
          img.classList.add("active")
        }, 100)
        playHandler()
    }else{
        indexAudio=0
        // cover Image
        imageIndex = songs[indexAudio]['cover']
        img.setAttribute('src',imageIndex)
        // 
        audio.src = songs[indexAudio].path
        // artist & name music
        musicNameIndex = songs[indexAudio]['display']
        artistIndex = songs[indexAudio]['artist']
        musicName.innerHTML = musicNameIndex
        artist.innerHTML = artistIndex
        // 
        img.classList.remove("active");
        setTimeout(function(){
          img.classList.add("active")
        }, 100)
        playHandler()
    }
}
function Previous(){
    indexAudio--
    if(indexAudio<0){
        indexAudio=songs.length -1
        audio.src = songs[indexAudio].path
        // cover Image
        imageIndex = songs[indexAudio]['cover']
        img.setAttribute('src',imageIndex)
        // 
        // artist & name music
        musicNameIndex = songs[indexAudio]['display']
        artistIndex = songs[indexAudio]['artist']
        musicName.innerHTML = musicNameIndex
        artist.innerHTML = artistIndex
        // 
        img.classList.remove("active");
        setTimeout(function(){
          img.classList.add("active")
        }, 100)

        playHandler()
    }else{
        audio.src = songs[indexAudio].path
        // cover Image
        imageIndex = songs[indexAudio]['cover']
        img.setAttribute('src',imageIndex)
        // 
        // artist & name music
        musicNameIndex = songs[indexAudio]['display']
        artistIndex = songs[indexAudio]['artist']
        musicName.innerHTML = musicNameIndex
        artist.innerHTML = artistIndex
        // 
        img.classList.remove("active");
        setTimeout(function(){
          img.classList.add("active")
        }, 100)

        playHandler()
    }
}

// Set Progress Bar
function setProgressBar(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
audio.currentTime = (clickX / width) * duration;
  }
progressContainer.addEventListener("click", setProgressBar);

audio.addEventListener("timeupdate",updateProgressBar);
playBtn.addEventListener('click',playAudio)