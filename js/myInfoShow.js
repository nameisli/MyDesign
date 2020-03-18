
let data=JSON.parse(localStorage.getItem("nowUser"));


//当用户是游客的时候
    if(data.name=="毕业设计"){
      $(".cun").hide();$(".xiu").hide();
    }

$('article table img').attr("src","../imgs/tou"+data.imgurl+".jpg");
$('#nowUserTou').attr("src","../imgs/tou"+data.imgurl+".jpg");

let nName=null;
$("#uName").text(data.name);
$("#uAge").text(data.age);
$("#uSex").text(data.sex);
$("#uWork").text(data.works);
$("#uAddress").text(data.address);
$("#uGrade").text(data.grade);
$("#uQQ").text(data.QQ);
$("#uWeChat").text(data.weChat);
$("#uTel").text(data.tel);
$("#uMail").text(data.mail);
//当点击修改信息的时候让信息文字  变成能改动的
$(".xiu").on('click',()=>{
  // contenteditable="true"
  $("#uName,#uAge,#uSex,#uWork,#uAddress,#uGrade,#uQQ,#uWeChat,#uTel,#uMail").attr("contenteditable",'true');
  nName=$("#uName").text();
  alert(nName+"  开始你的信息修改");
});


//当点击保存的时候 让信息修改 掉信息可以修改的属性      然后  把修改 同步到数据库中
$(".cun").on('click',()=>{
  // contenteditable="true"
  //让文字可以修改的属性消失
  $("#uName,#uAge,#uSex,#uWork,#uAddress,#uGrade,#uQQ,#uWeChat,#uTel,#uMail").removeAttr("contenteditable",'true');

  //让数据库中的信息修改掉
  let shu=JSON.parse(localStorage.getItem('userInfo'));
  let nowU=JSON.parse(localStorage.getItem('nowUser'));


  shu.user.forEach(function (item) {

    if (item.name===nName){
      alert("在数据库中找到了 该用户信息 现在开始修改！");
      item.name= $("#uName").text();
      item.age=$("#uAge").text();
      item.sex=$("#uSex").text();
      item.works= $("#uWork").text();
      item.grade= $("#uGrade").text();
      item.address=$("#uAddress").text();
      item.QQ= $("#uQQ").text();
      item.weChat=$("#uWeChat").text();
      item.tel=  $("#uTel").text();
      item.mail=  $("#uMail").text();
      $('#name').text($("#uName").text());

      //alert(index);     该用户在数据库中的信息存在的下标
      //当前用户的信息同步   修改 nowUser
      nowU.name=$("#uName").text();
      nowU.sex=$("#uSex").text();
      nowU.age=$("#uAge").text();
      nowU.works=$("#uWork").text();
      nowU.grade=$("#uGrade").text();
      nowU.address=$("#uAddress").text();
      nowU.QQ=$("#uQQ").text();
      nowU.weChat=$("#uWeChat").text();
      nowU.tel= $("#uTel").text();
      nowU.mial= $("#uMail").text();

      localStorage.setItem('nowUser',JSON.stringify(nowU));
      localStorage.setItem('userInfo',JSON.stringify(shu));
    }

  });


});


