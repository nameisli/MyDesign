// window.onload=()=>{
  let storage=window.localStorage;
  data={
    userID:'admit',
    userPsd:123456,
    name:"毕业设计",
    age:20,
    sex:"男",
    works:"学生",
    grade:"大四",
    address:"河南开封",
    imgurl:1,
    mail:"92999999@qq.com",
    tel:13099999999,
    QQ:99999999,
    weChat:999999999
  };
  storage.data=JSON.stringify(data);


// };
