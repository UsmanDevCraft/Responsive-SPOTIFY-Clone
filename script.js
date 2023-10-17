
// PLAY AND PAUSE BUTTON DISPLAY JS

//------------------ USING CLASSLIST PROPERTY WHICH WORKS 😋 ------------------
let songIndex = 0;
let audio_Des = new Audio();
let mainPPButt = document.querySelector('.mainPPButt');
// console.log(mainPPButt);
mainPPButt.addEventListener('click', ()=>{
    if (audio_Des.paused || audio_Des.currentTime<=0) {
        audio_Des.play();
        mainPPButt.classList.remove('mainPlayButt');
        mainPPButt.classList.add('mainPauseButt');
    } else {
        audio_Des.pause();
        mainPPButt.classList.add('mainPlayButt');
        mainPPButt.classList.remove('mainPauseButt');
    }
});




//------------------ USING HIDDEN PROPERTY WHICH DIDNT WORK 😁 ------------------
// let pauseButt = document.querySelector('.pauseButt');
// let playButt = document.querySelector('.playButt');
// let PPButt = ()=>{
//     playButt.addEventListener('click', ()=>{
//         audio_Des.play()
//         pauseButt.hidden = false;
//         playButt.hidden = true;
//     });
//  pauseButt.addEventListener('click', ()=>{
//         audio_Des.pause();
//         pauseButt.hidden = true;
//         playButt.hidden = false;
//     });
// };
// PPButt();




//------------------ PROGRESS BAR TIME UPDATE ------------------
let progBar = document.getElementById('progressBar');
audio_Des.addEventListener('timeupdate',()=>{
    Progress = parseInt((audio_Des.currentTime/audio_Des.duration)*100);
    progBar.value = Progress;
});
progBar.addEventListener('change', ()=>{
    audio_Des.currentTime = (progBar.value * audio_Des.duration)/100;
});




//------------------ ARRAY OF SONGS IN LIST OBJECT ------------------
let song1 = Array.from(document.getElementsByClassName('song1'));
let songs = [
    {songName:'Despacito', songFile:'Songs/1.mp3', songImg:'Songspics/1.despacito.img'},
    {songName:'Tere Waste ...', songFile:'Songs/2.mp3', songImg:'Songspics/2.terewastefalak.jpg'},
    {songName:'Tu Aake Dek', songFile:'Songs/3.mp3', songImg:'Songspics/3.tuaakdekhle.jpg'},
    {songName:'Main Dil Ko', songFile:'Songs/4.mp3', songImg:'Songspics/4.madilkosamjha.jpg'},
    {songName:'Gulab Jaisan', songFile:'Songs/5.mp3', songImg:'Songspics/5.gulaabjaisan.jpg'},
    {songName:'Unstoppable', songFile:'Songs/6.mp3', songImg:'Songspics/6.unstoppable.jpg'},
    {songName:'Saanjha', songFile:'Songs/7.mp3', songImg:'Songspics/7.saanjha.jpg'},
    {songName:'Cheques', songFile:'Songs/8.mp3', songImg:'Songspics/8.Cheques.jpg'},
    {songName:'Tere Bin', songFile:'Songs/9.mp3', songImg:'Songspics/9.TereBin.jpg'},
    {songName:'Guli Mata', songFile:'Songs/10.mp3', songImg:'Songspics/10.GuliMata.jpg'},
    {songName:'Gone Girl', songFile:'Songs/11.mp3', songImg:'Songspics/11.GoneGirl.jpg'},
    {songName:'Yadav Brand 2', songFile:'Songs/12.mp3', songImg:'Songspics/12.YadavBrand2.jpg'}
];

song1.forEach((element, i)=>{
    element.getElementsByClassName('image30')[0].src = songs[i].songImg;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
});



//------------------ PLAY/PAUSE BUTTON FOR EACH CHILD ------------------
const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('playButt');
        element.classList.remove('pauseButt');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('playButt');
        e.target.classList.add('pauseButt');
        audio_Des.src = `Songs/${songIndex+1}.mp3`;
        audio_Des.currentTime = 0;
        audio_Des.play();
        mainPPButt.classList.remove('mainPlayButt');
        mainPPButt.classList.add('mainPauseButt');
    });
});



//------------------ PLAY/PAUSE BUTTON FOR MAIN DIV ------------------
document.getElementById('next').addEventListener('click', ()=>{
    if (songIndex >= 11) {
        songIndex = 0;
    } else {
        songIndex += 1;
        audio_Des.src = `Songs/${songIndex+1}.mp3`;
        audio_Des.currentTime = 0;
        audio_Des.play();
        mainPPButt.classList.remove('mainPlayButt');
        mainPPButt.classList.add('mainPauseButt');
    }
});


document.getElementById('prev').addEventListener('click', ()=>{
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
        audio_Des.src = `Songs/${songIndex+1}.mp3`;
        audio_Des.currentTime = 0;
        audio_Des.play();
        mainPPButt.classList.remove('mainPlayButt');
        mainPPButt.classList.add('mainPauseButt');
    }
});



// let img = document.querySelector('.imgChild')[0].src = songs.songImg[songIndex];
// console.log(img);




//------------------ DOWNLOAD BUTTON FOR MAIN DIV ------------------
// let array = Array.from(document.getElementsByClassName('download'));
// array.forEach((element)=>{
//     element.addEventListener('click', console.log(123));
// });
// console.log(array);




//------------------ MUSIC EMOJI CHANGE CODE ------------------
let emoji = document.getElementById('emoji');
let changeEmoji = ()=>{
    setTimeout(()=>{
        emoji.innerHTML = 'MyMusic😃';
    },2000);
    setTimeout(()=>{
        emoji.innerHTML = 'MyMusic😊';
    },4000);
    setTimeout(()=>{
        emoji.innerHTML = 'MyMusic😋';
    },6000);
    setTimeout(()=>{
        emoji.innerHTML = 'MyMusic🤩';
    },8000);
    setTimeout(()=>{
        emoji.innerHTML = 'MyMusic🤗';
    },10000);
    setTimeout(()=>{
        emoji.innerHTML = 'MyMusic😎';
    },12000);
}
changeEmoji();

let emojiInterval = ()=>{
    setInterval(()=>{
        return changeEmoji();
    }, 14000);
};
emojiInterval();





//------------------ TYPEWRITER SENTENCE CHANGE CODE ------------------
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};