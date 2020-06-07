var search = window.location.search;
var startIndex = search.indexOf("=") + 1;
var newUrl = search.substr(startIndex);
newUrl = "http" + newUrl;
Swal.fire({
    position: 'top-end',
    icon: 'warning',
    width: 500,
    title: 'You are being redirected by Undirect!',
    showConfirmButton: false,
    timer: 1000
})
window.location.href = newUrl;