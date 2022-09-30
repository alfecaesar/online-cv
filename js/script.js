
window.addEventListener('load', (event) => {

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