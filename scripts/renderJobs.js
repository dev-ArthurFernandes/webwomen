function render(array){
    const jobsList   = document.querySelector('.vagas')

    jobsList.innerHTML = ''

    array.forEach(vacancy => {

        const {id, title, enterprise, location, descrition, modalities} = vacancy 
        
        const li         = document.createElement('li')
        const h2         = document.createElement('h2')
        const s1         = document.createElement('span')
        const h4_1       = document.createElement('h4')
        const h4_2       = document.createElement('h4')
        const p          = document.createElement('p')
        const s2         = document.createElement('span')
        const s3         = document.createElement('span')
        const button     = document.createElement('button')

        let modalitiesArray = makeModalities(modalities) 

        li.classList = 'card'
        

        h2.innerText = title

        s1.classList = 's1'

        h4_1.innerText = enterprise
        h4_2.innerText = location

        p.innerText = descrition

        s2.classList = 's2'
        
        if(checkExisting(vacancy)){
            button.innerText = 'Candidatar'
            button.classList = 'button-candidatar'
        }else{
            button.innerText = 'Remover Candidatura'
            button.classList = 'button-remove'
        }
        button.id        = id
        button.addEventListener('click', () => {
            favorite(vacancy)
            rederFavorites()
        })

        s3.append(...modalitiesArray)
        s2.append(s3, button)
        s1.append(h4_1, h4_2)
        li.append(h2, s1, p, s2,)


        jobsList.append(li)
    });
}

function makeModalities(modalities){
    
    let arrayOfModalities = []
    modalities.forEach(modalitie => {
       let p = document.createElement('p')
       p.innerText = modalitie
       arrayOfModalities.push(p)
    })
    return arrayOfModalities
}

render(jobsData)
