var songInfo = [
    {
        songName:"Enemy - J.I.D Imagine Dragons",
        path:"musicStorage/imagine_dragons_jid_enemy_lyrics_-3296914827515575038.mp3",
        img_bgr:"backgroundImages/567335_l2aI4lyyZC_fcyktfyvqaud_7r.jpg"
      
    },
    {
        songName:"SHELTER - Porter Robinson",
        path:"musicStorage/porter_robinson_madeon_shelter_official_audio_-5432759799879275287.mp3",
        img_bgr:"backgroundImages/artworks-000388696515-4cco5n-t500x500.jpg"
       

        
    },
    {
        songName:"Animal Crossing 'Bubblegum K.K.' Cover",
        path:"musicStorage/animal_crossing_bubblegum_k_k_cover_trifect_remix_japanese_version_-7757724125644579668.mp3",
        img_bgr:"backgroundImages/artworks-ICAIPt3WUgynHLzm-GePbkA-t500x500.jpg "
        
        
    },
    {
        songName:"",
        path:"",
        img_bgr:"./backgroundImages/27e4160b0e3d0b90cbcf6aee8e133951.jpg"
        
        
    },
    {
        songName:"",
        path:"",
        img_bgr:"./backgroundImages/1600x900_cute-anime-girl-4k.jpg"
        
       
    },
    {
        songName:"",
        path:"",
        img_bgr:"./backgroundImages/anime-girl-in-city-4k-oj-1920x1080.jpg"
        
    
        
    },
    {
        songName:"",
        path:"",
        img_bgr:"./backgroundImages/wp6137562.jpg"
        
    },
    {
        songName:"Sorbet - Galdive",
        path:"./musicStorage/galdive_sorbet_lyrics_-6515265397258060509.mp3",
        img_bgr:"./backgroundImages/maxresdefault.jpg"
    }
]



// SONG SELECTION PORTION
var sep = 0;
var songSelect = document.getElementsByClassName("songSelection")[0];
var controls = document.getElementsByClassName("songControls")[0];
var songs = songInfo.length;
//style everything inside song selection part
for(let i = 0; i < songs ; i++){
    var createDiv = document.createElement("div");
    var child = songSelect.appendChild(createDiv);
  
    child.style.marginTop = "50px";
    child.style.width = "90%";
    child.style.height = "fit-content";
    child.style.border = "1px solid gray";
    child.style.display = "flex";
    child.style.borderRadius = "12px";
    
   

   
}
const all = document.querySelectorAll(".songSelection div");
for(let i = 0; i < songs; i++){
    var description = document.createElement("p");
    var addP = all[i].appendChild(description);
    addP.style.height = "100%";
    addP.style.width = "10%";
    addP.style.boxSizing = "border-box";
    addP.style.fontSize = "1vw";
    addP.style.fontFamily = "monospace";
    addP.style.boxSizing = "border-box";
    addP.style.textAlign = "center";
    addP.style.padding = "2%";
    addP.textContent = songInfo[i].songName;
    
}

for(let i = 0; i < songs; i++){
    var nestDiv = document.createElement("div");
    var bgr_div = all[i].appendChild(nestDiv);
    bgr_div.style.width = "75%";
    bgr_div.style.backgroundImage = "url" + "(" + songInfo[i].img_bgr + ")";
    bgr_div.style.backgroundSize = "cover";
    bgr_div.style.backgroundRepeat = "no-repeat";
    bgr_div.style.marginLeft = "10%";
    bgr_div.style.height = "101%";
    bgr_div.style.opacity = "0.6";
}

var spin = document.getElementById("spin_song");
var text = document.getElementById("change");
var vol = document.getElementById("vol-control");
var play = false;
for(let i = 0; i < songs; i++){
    all[i].addEventListener("mouseover", () => move(all[i], i));
    all[i].addEventListener("click", () => {
        var audio = new Audio('musicStorage/menu-sfx--select---11-sound-effect-14694214.mp3');
        audio.play();
        audio.volume = 0;

        vol.style.display = "inline";

        document.getElementById("name").innerText = songInfo[i].songName;
        document.getElementById("name").style.textAlign = "center";
        document.getElementById("name").style.fontSize = "2.75vw";
        spin.style.backgroundImage = "url" + "(" + songInfo[i].img_bgr + ")";
        spin.style.backgroundSize = "cover";
        spin.classList.add("spin_animate");

        text.innerText = "--Playing--";
        spin.style.display = "inline";
        btn.style.display = "inline";

        

        changeBoxShadow(i);

        playSong(i);

        
      //Onclick song => active play button on state change
    });
}
function changeBoxShadow(songNum){
    for(let i = 0; i < songs; i++){
        if(i !== songNum){
            all[i].style.boxShadow = "";
        }
    }
    all[songNum].style.boxShadow = "rgba(190, 46, 170, 0.4) 5px 5px, rgba(190, 46, 170, 0.3) 10px 10px, rgba(190, 46, 170, 0.2) 15px 15px, rgba(190, 46, 170, 0.1) 20px 20px, rgba(190, 46, 170, 0.05) 25px 25px";
}



function move(elem, num){
    elem.classList.add("animation1");
    elem.classList.remove("return");
    for(let k = 0; k < songs; k++){
        if(k != num){
            all[k].classList.replace("animation1", "return");
        }
    }
}


//play button animation:

var btn = document.querySelector(".button");
btn.addEventListener("click", () => state(play));
function state(turn){
    if(turn == true){
        btn.classList.add("paused");
        play = false;
        take(play);
        spin.classList.add("spin_animate");
        text.innerText = "--Playing--";
    }
    else if(turn == false){
        btn.classList.remove("paused");
        play = true; 
        take(play);  
        spin.classList.remove("spin_animate");
        text.innerText = "--Paused--";
    }
 }
 var track = document.getElementById("track");
 var duration = null;
 track.onloadedmetadata = () => {
     console.log(track.duration);
     duration = track.duration;
    };

 function take(state){
     if(state == false){
         track.play();
     }
     else if(state == true){
         track.pause();
     }
 }
 function playSong(songNum){
     state(true);
     track.setAttribute("src", songInfo[songNum].path);
     track.play();
 }
 
// Volume slide

function SetVolume(val)
{    
    track.volume = val / 100;
    document.getElementById("vol-text").innerText = "Volume: " + val;
}





















