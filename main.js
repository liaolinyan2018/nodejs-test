/*用原生JS发AJAX请求，AJAX就是用脚本发请求*/
myButton.addEventListener('click',(e)=>{
  let request = new XMLHttpRequest()//1.生成request对象
  request.open('GET','/xxx') //2.配置request对象
  request.send()//3.发送request对象
  request.onreadystatechange = ()=>{
    if(request.readyState===4){
      console.log('说明请求结束了')
      if(request.status >= 200 && request.status< 300){
        console.log(request.responseText)
        console.log('说明请求成功了')
        console.log(request.status)
      }
      else{
        console.log('说明请求失败了')
        console.log(request.status)
      }
    }
  }
})