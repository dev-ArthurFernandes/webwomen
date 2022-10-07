const goButton = document.querySelector('#goButton')
const main = document.querySelector('main')

goButton.addEventListener('click', () => {
    main.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})