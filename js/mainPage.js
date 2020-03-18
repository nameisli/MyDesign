//默认显示第一页
let page=1;

//header  信息部分的数据修改

$("#opa").text($(".left ul>li:nth-child("+page+")").text());

setInterval(function () {
  $("#time").text("当前时间: "+nowDate());
},500);


//  从和风天气里面   获得   需要的天气信息   并后来 添加给上面  获取数据 用的ajax
$(function weather() {
  var ajax=new XMLHttpRequest();
  ajax.open("get","https://free-api.heweather.net/s6/weather/now?location=kaifeng&key=92ea4ae9f1a84afa8657a3b9251fa6e7");
  ajax.send();
  ajax.onreadystatechange =  function() {
    if (ajax.readyState === 4 && ajax.status === 200) {
      var tt=JSON.parse(ajax.responseText).HeWeather6[0].now;
      var nowWenDu=tt.tmp;
      var nowWind_dir=tt.wind_dir;
      var nowWin_sc=tt.wind_sc;
      var nowWec=tt.cond_txt;
      var str='天气：'+nowWec+" 温度:"+nowWenDu+' 风力:'+nowWin_sc+' 风向:'+nowWind_dir;
      $('#weather').html(str);
    }
  };
});

$("#name").text("用户名: "+JSON.parse(localStorage.getItem("nowUser")).name)
  .css("margin",'0 .08rem');

//当页面中左边的不同   功能被点击的时候 对页面中的不同数据做出更改
$.each($(".left ul>li"),function(index,item) {
  item.addEventListener('click', ()=>{
    $(this).siblings().css('background-color','#354c73');
    page=index+1;
    //header  上面的板块同步
    $("#opa").text($(".left ul>li:nth-child("+page+")").text());
    //点击那个的时候   对应功能的按键变色
    $(this).css('background-color','#bfd5ff');
    //让article的版块内容及时的 显示和隐藏
    $(".right article:nth-of-type("+page+")").show()
      .siblings(":not(:nth-child(1))").hide();
  })

});

// 退出系统
$('#outSystem').on('click',function(){
  if(confirm("确定要退出系统并关闭浏览器吗？")){
    //关闭浏览器的方法只适用ie浏览器。不适用谷歌
    window.opener = null;             //如果没有这行和下面的一行则会出现上面的第二个询问框。
    window.open(' ', '_self', ' ');
    window.close();

  }
});
