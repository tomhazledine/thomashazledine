function StyleFreeAudio(e,a){function t(){for(var e=0;e<m.length;e++)f[e].pause()}function n(e){y=e;for(var a=0;a<m.length;a++)a!=e&&f[a].pause();f[e].play()}function s(e,a){var t=f[a].duration,i=t*(e/100);f[a].currentTime=i}function r(){var e=this.getAttribute("data-song-index");if(u(this,"songPlaying"))t(),c(this,"songPlaying");else{for(i=0;i<p.length;i++)c(p[i],"songPlaying");n(e),d(this,"songPlaying"),u(this,"notPlayedYet")&&(g(e),c(this,"notPlayedYet"))}}function o(){var e=f[y].currentTime,a=f[y].duration;progressParsed=l(e),v[y].innerHTML=progressParsed,e>=a&&c(p[y],"songPlaying");var t=(e/a*100).toFixed(2);h[y].value=t}function l(e){var a=Math.floor(e%3600/60);a=a.toFixed(0),a=a.toString();var t=Math.floor(e%3600%60);t=t.toFixed(0),t=t.toString(),10>t&&(t="0"+t);var i=a+":"+t;return i}function g(e){var a=f[e].duration,t=l(a);P[e].innerHTML=t}function u(e,a){if(e.classList)var t=e.classList.contains(a);else var t=new RegExp("(^| )"+a+"( |$)","gi").test(e.className);return t}function d(e,a){e.classList?e.classList.add(a):e.className+=" "+a}function c(e,a){e.classList?e.classList.remove(a):e.className=e.className.replace(new RegExp("(^|\\b)"+a.split(" ").join("|")+"(\\b|$)","gi")," ")}var y,m=e,p=a.getElementsByClassName("playlistSongTrigger"),f=[],v=a.getElementsByClassName("songPlayTimer"),h=a.getElementsByClassName("songProgressSlider"),P=a.getElementsByClassName("songDuration");for(i=0;i<e.length;i++)f[i]=new Audio(e[i].url),p[i].addEventListener("click",r,!1),f[i].addEventListener("timeupdate",o,!1);return{sliderScrub:s,playSong:n,pauseAll:t}}var playerWrapper=document.getElementById("audioExamples"),audioData=songs,myAudioPlayer=StyleFreeAudio(audioData,playerWrapper);