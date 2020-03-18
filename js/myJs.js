
function nowDate() {
  let date=new Date();
  //当前时间的获取
  // 时间格式 ：年 月 日  时分 周几
  let year= date.getFullYear()+'年';
  let month = date.getMonth()+1+'月';
  let day = date.getDate()+'日';
  let sec= date.getSeconds()+'秒';
  let weeks=['周日','周一','周二','周三','周四','周五','周六'];
  let week = weeks[date.getDay()];
  let ho= date.getHours()+'时';
  let min= date.getMinutes()+'分';
  let str='';
  str+=''+year+''+month+''+day+''+ho+''+min+''+week+'';
  return str;
}


//从和风天气上面调用的api   我的接口 地址https://console.heweather.com/app/index?token=432501918b83400983653049dab0ccd9
//数据的格式在本方法里面 是排好的格式
function nowWeather() {
  var ajax=new XMLHttpRequest();
  ajax.open("get","https://free-api.heweather.net/s6/weather/now?location=auto_ip&key=92ea4ae9f1a84afa8657a3b9251fa6e7");
  ajax.send();
  ajax.onreadystatechange =  function() {
    if (ajax.readyState === 4 && ajax.status === 200) {
     let  tt=JSON.parse(ajax.responseText).HeWeather6[0].now;
      let nowWenDu=tt.tmp;
      let nowWind_dir=tt.wind_dir;
      let nowWin_sc=tt.wind_sc;
      let nowWec=tt.cond_txt;
      let str='天气：'+nowWec+" 温度："+nowWenDu+' 风力：'+nowWin_sc+' 风向：'+nowWind_dir;
      return str;
    }
    else { return  "天气数据有误！"}
  };
}
