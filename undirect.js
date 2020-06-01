var search = window.location.search;
var startIndex = search.indexOf("=") + 1;
var newUrl = search.substr(startIndex);
newUrl = "http" + newUrl;
console.log("directing to " + newUrl);
window.location.href = newUrl;