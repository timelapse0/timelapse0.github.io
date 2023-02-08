//链接转无图卡片
var html = $('#articleContent').html();
var html = html.replace('“',"「 ").replace('”',"」");
$('#articleContent').html(html);

setTimeout(function(){
var str = /￥￥.*￥￥/;
var html = $('#articleContent').html();
var myArray = str.exec(html);
if(myArray!=null){

var html = html.replace('￥￥',"<div class=\'link-card\'>");
var html = html.replace('￥￥',"</div>");
var html = $('#articleContent').html(html);
}

$('.link-card img').each(function(){
var href = $(this).attr('alt');
$(this).bind('click',function(){
window.location.href=href;
})
})

},1000)