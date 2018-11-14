var http = require('http')
var fs = require('fs')
var url = require('url')

var server=http.createServer(function(req, res){

  var pathObj = url.parse(req.url, true)
  console.log(pathObj)

  switch (pathObj.pathname) {
    case '/getWeather':
      var ret
      if(pathObj.query.city == 'beijing'){
        ret = {
          city: 'beijing',
          weather: '晴天'
        }
      }else{
        ret = {
          city: pathObj.query.city,
          weather: '不知道'
        }
      }
      res.end(JSON.stringify(ret))/*返回值必须得是字符串，不然会报错*/
      break;
    case '/user/123':
      res.end( fs.readFileSync(__dirname + '/static/user'))
      break;
    default:
      res.end( fs.readFileSync(__dirname + '/static' + pathObj.pathname) )
  }
})
server.listen(8080)
