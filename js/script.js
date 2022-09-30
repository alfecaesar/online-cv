
window.addEventListener('load', (event) => {

    // loader
    const loaderStat = localStorage.getItem('loader');
    if(!loaderStat){
        setTimeout(function(){
            document.querySelector('#page').classList.remove('loader-on');
            localStorage.setItem('loader',false);
        },5000)
    }
    else{
        setTimeout(function(){
            document.querySelector('#page').classList.remove('loader-on');
        },500)
    }

    // scroll To
    document.querySelectorAll('a.scrollBtn').forEach(function(elem){
        elem.addEventListener('click', (e) => {
            e.preventDefault()
            let gethref = elem.getAttribute('href')
            let scrollDiv = document.querySelector(gethref).offsetTop
            document.querySelector('a.scrollBtn.active').classList.toggle('active')
            elem.classList.toggle('active')
            window.scrollTo({ top: scrollDiv, behavior: 'smooth'})
        })
    })


})