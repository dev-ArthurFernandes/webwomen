const favoriteList = document.querySelector('.favoritList')

function rederFavorites(){
    
    favoriteList.innerHTML = ''

    if(locationStorageUpdate().length > 0){
        let favoriteJobs = locationStorageUpdate()

        favoriteJobs.forEach(element => {
            const {title, modalities} = element

            const li        = document.createElement("li")
            const s1        = document.createElement("span")
            const h2        = document.createElement("h2")
            const s2        = document.createElement("span")
            const button    = document.createElement("button")

            let modalitiesArray = makeModalities(modalities)

            li.classList = 'favoritCard'

            h2.innerText = title

            s2.append(...modalitiesArray)

            button.innerHTML = `<img src="/assets/img/trash.svg" alt="trash"/>`

            button.addEventListener('click', () => {
                favorite(element)
                rederFavorites()
            })

            s1.append(h2, s2)
            li.append(s1,button)

            favoriteList.append(li)
        });

    }else{
       favoriteList.innerHTML = `
        <div class="noneItem">
        <p>você ainda não aplicou para nenhuma vaga</p>
        <svg class="SVG">
           <rect class="rect r1"></rect>
           <rect class="rect r2"></rect>
           <rect class="rect r3"></rect><rect class="rect r4"></rect><rect class="rect r5"></rect>
        </svg>
        </div>
       `
    }
}

rederFavorites()