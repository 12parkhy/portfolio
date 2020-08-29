let navbarTogglerIcon = document.querySelector('.navbar-toggler-icon')
let navbarTogglerButton = document.querySelector('.navbar-toggler')
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('navbar-toggler-icon') || event.target.classList.contains('navbar-toggler')) {
        if (!document.querySelector("#navbarNav").classList.contains('show')) {
            document.querySelector("#navbarNav").classList.add("show")
        } else if (document.querySelector("#navbarNav").classList.contains('show')) {
            document.querySelector("#navbarNav").classList.remove('show')
        }
    }
})

