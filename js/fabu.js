
var date=new Date();
//点击按钮
var btnft = document.querySelector('.fa');
//个人要发布的信息框
var  tie = document.querySelector('.sen');
//降噪层
var  mask = document.querySelector('#masker');
////取消发布
var quxiao = document.querySelector('.back');
//确定发布
var fabu = document.querySelector('.sub');
//要发布出去的ul
var ull= document.querySelectorAll('.twoB>ul')[1];



//获取标题哦
var tiT = document.querySelector('.ti');
//获取发布的类别信息
var leiT= document.querySelector('.lei');
//获取内容
var neiT = document.querySelector('.nei');

//发帖  点击的时候  画面的内容需要的变化
btnft.onclick=function () {
  tie.style.display='block';
  mask.style.display='block';
};

//取消  时 对应的变化
quxiao.onclick = function () {
  tie.style.display='none';
  mask.style.display='none';
};

//发布

fabu.onclick= function () {
  //发布需要的内容   ，获取所有的 表单内容
  //新建一个Li标签   然后把 内容填充进去
  //把li加载到 ul 里面
    let data=JSON.parse(localStorage.getItem("nowUser"));
    let sc="../imgs/tou"+data.imgurl+".jpg";

//在第一个页面中  需要增加的代码
  let str='';
  str+='<div class="tou"><img src="'+sc+'" alt=""></div>';
  str+='<div class="article">';
  str+='<span class="tit">标题:'+tiT.value+'</span>';
  str+='<p class="con">'+neiT.value+'</p> ';
  str+= '<p class="other">发帖类别:<span>'+leiT.value+'</span>';
  str+='发布时间：<span>'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+'</span>';
  str+='名字：<span>'+data.name+'</span> 手机号码：<span>'+data.tel+'</span></p></div>';
  str+='<div class="del"><span>联系方式</span></div>';
  //第一个页面中的信息增加
 let lis = document.createElement("li");
    lis.innerHTML=str;

 let dd =document.querySelector(".oneA ul");
  dd.prepend(lis);



  //在本页面中需要增加的代码

let addStr='';
  addStr+='<p>'+tiT.value+'</p>';
  addStr+='<p>'+leiT.value+'</p>';
  addStr+='<p>'+neiT.value+'</p>';
  addStr+='<p>'+date.getHours()+'时'+date.getMinutes()+'分'+date.getSeconds()+'秒</p>';
addStr+='<span>删除</span>';

  let li = document.createElement("li");
  li.innerHTML=addStr;

  ull.prepend(li);








  //点击之后把 框框给隐藏掉
  tie.style.display='none';
  mask.style.display='none';


//把信息框中 默认的信息 清除掉
tiT.value='';
leiT.value='';
neiT.value='';


};



ull.addEventListener('click',function f(e) {
  var target = e.srcElement;
  if(target.nodeName="SPAN"){
      ull.removeChild(target.parentNode);
  }
  else console.log(target);
});

