/************YouTube_Ad_Killer****************
Solution 1:
ctier=[A-Z] url 302 ctier=A
^https://[\s\S]*\.googlevideo\.com/.*&(oad|ctier) url reject-200
**********************************************
Solution 2:
http-request,pattern=^https?:\/\/.+?\.googlevideo\.com\/.+&(oad|ctier)=(?!A) script-request-header https://choler.github.io/Surge/Script/YouTube.js
**********************************************/

if ($request.url.indexOf("&oad") != -1) {
  $done({ response: {body: ""} });
} else if ($request.url.indexOf("&ctier") != -1) {
  let url = $request.url.replace(/ctier=[A-Z]/, "ctier=A");
  $done({ response: { status: 302, headers: { Location: url } } });
} else {
  $done({})
}
