/******************************
FT中文网 外区
特别说明：微信登录
可以搭配快捷指令使用
地址：https://www.icloud.com/shortcuts/652791ed6b8d45fb8f6ff4f43e525405获取文章内容
加上这个参数?webview=ftcapp就能返回全文
***********************

[rewrite_local]
^https?:\/\/.*\.cloudfront\.net\/index\.php\/jsapi\/paywall url script-response-body https://raw.githubusercontent.com/Animody/QX_Config/main/Rewrite/JS/ftc2.js
^https?:\/\/.*\.cloudfront\.net\/log\/new_log.php url reject
^https?:\/\/creatives\.ftacademy\.cn\/ads url reject
^https?:\/\/creatives\.ftimg\.net\/ads url reject-img
^https?:\/\/www\.ft\.com\/__origami\/service\/image\/v2\/images\/raw\/https%3A%2F%2Fcreatives\.ftimg\.net%2Fads* url reject-img

[mitm] 
hostname = *.cloudfront.net, creatives.ftacademy.cn, creatives.ftimg.net, www.ft.com

*******************************/
var baby = JSON.parse($response.body);

baby = {
  "paywall": 0,
  "premium": 1,
  "expire": "4092599349",
  "standard": 1,
  "v": 2099,
  "campaign_code": "",
  "latest_duration": "yearly",
  "addon": 0
};

$done({ body: JSON.stringify(baby) });
