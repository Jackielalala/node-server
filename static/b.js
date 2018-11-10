var xhr=new XMLHttpRequest();
xhr.open('GET','/getWeather',true);//请求以GET的方式发送，发送到url对应的服务器，以异步的方式
xhr.send();
xhr.onload=function(){
    console.log(JSON.parse(xhr.responseText));
}
