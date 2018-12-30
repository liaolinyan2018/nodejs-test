/*用原生JS发AJAX请求，AJAX就是用脚本发请求*/
myButton.addEventListener('click', (e)=>{
  let request = new XMLHttpRequest() //1.生成一个XMLHttpRequest实例请求对象request
  /*frank.com网站的浏览器访问jack.com网站的服务器,属于跨域访问*/
  request.open('get', 'http://jack.com:8002/xxx') // 2.配置request请求对象
  request.send() //3.发送request请求对象
  request.onreadystatechange = ()=>{ //4.监听请求request对象的readystate变化
    if(request.readyState === 4){
        console.log('请求响应都完毕了')
        console.log(request.status)
        if(request.status >= 200 && request.status < 300){
          console.log('说明请求成功')
          //我们在开发者工具里可以看到request.responseText的内容
          console.log(typeof request.responseText)
          console.log(request.responseText)
          let string = request.responseText
          // 把符合 JSON 语法的字符串
          // 转换成 JS 对应的值
          let object = window.JSON.parse(string) 
          // JSON.parse 是浏览器提供的
          console.log(typeof object)
          console.log(object)
          console.log('object.note')
          console.log(object.note)
          console.log('object.note.from')	
          console.log(object.note.from)	
        }else if(request.status >= 400){
          console.log('说明请求失败') 
        }
    }
  }
})
