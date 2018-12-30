# nodejs-test


## 启动应用

`node server.js 8888`
或者
`node server 8888`

## 添加路由

1. 编辑 server.js 文件，添加 if else
2. 重新运行 node server.js 8888


## 后台启动应用

`node server.js 8888 >! log 2>&1 &`

## 使用CORS跨域发送AJAX请求
`
1.先修改windows下的hosts文件,把电脑IP设置都指向frank.com,jack.com网站，即在hosts加上这两句
/*加在hosts里*/
127.0.0.1       frank.com
127.0.0.1       jack.com
/*加在hosts里*/
2.开两个服务器，命令行分别输入
/*http://frank.com:8001当浏览器*/
node server 8001
/*http://jack.com:8002当服务器*/
node server 8002 

然后两个server都同时打开，没错，这两个server的前端代码和后端代码都是共用的。
3.将我们平时开了server以后在地址栏输入的 http://localhost:8888 改为 http://frank.com:8001 ,这样我们就能通过frank.com这个浏览器去访问jack.com的服务器，虽然它们是共用代码的，但是访问的时候，域名和端口都不一样，这就是跨域访问，而且我们还发送了AJAX请求，因为CORS，我们在jack.com的后端设置了允许frank.com访问jack.com
`
