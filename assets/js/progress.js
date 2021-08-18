window.addEventListener('scroll',function(){
    let body = document.body,
        html = document.documentElement;
    let height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
    );
    let scrollFromTop = (html.scrollTop || body.scrollTop)+html.clientHeight;
    let width = (scrollFromTop/height)*100*1.05+'%';
    document.getElementById('progress').style.width=width;
})