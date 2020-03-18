
let musicSrc=null;
$("#musicPage>ul>li").each(
  function(index,item){
    $(this).on('click',function () {
      $("#musicPage>ul>li").css('color','#0BC291');
      $(item).css('color',"blue");
      musicSrc="../musics/"+ $(item).text()+"";
    })
  }
);

let changes=document.querySelector("#musicPage ul");
let audio=document.querySelector("#music_style") ;
let nowPlay=document.querySelector("#nowPlay") ;

changes.onclick=function () {
  audio.pause();
  nowPlay.setAttribute("src",musicSrc);
  audio.load();
  audio.currentTime = 0;
  setTimeout(function () {
    audio.play();
  },1500);
}
