# 实现一个静态服务器
1. 首先创建http,fs,url模块
2. 创建服务器
3. 将url解析为对象赋给pathObj，true指pathname仅为文件名，而false为默认指pathname为域名加文件名
4. switch函数设置不同路由请求对应的返回数据
5. default：如果路径名不满足上述路由，则去比对静态文件
6. 该服务器监听8080端口
