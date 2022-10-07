const favoriteList = document.querySelector('.favoritList')

function rederFavorites(){
    if(locationStorageUpdate().length > 0){
        // let favoriteJobs = locationStorageUpdate()

        // favoriteJobs.forEach(element => {
        //     const {title, modalites} = element

        //     const li
        //     const div
        // });
        console.log(favoriteJobs)
    }else{
        
        const div   = document.createElement('div')
        const p     = document.createElement('p')
        const svg   = document.createElement('svg')
        const rect1 = document.createElement('rect')
        const rect2 = document.createElement('rect')
        const rect3 = document.createElement('rect')
        const rect4 = document.createElement('rect')
        const rect5 = document.createElement('rect') 

        div.classList = 'noneItem'

        p.innerText = 'você ainda não aplicou para nenhuma vaga'

        svg.classList = 'SVG'

        rect1.classList = 'rect r1'
        rect2.classList = 'rect r2'
        rect3.classList = 'rect r3'
        rect4.classList = 'rect r4'
        rect5.classList = 'rect r5'

        svg.append(rect1,rect2,rect3,rect4,rect5)
        div.append(p,svg)

        favoriteList.append(div)
    }
}

rederFavorites()
{/* <div class="noneItem">
    <p>você ainda não aplicou para nenhuma vaga</p>
    <svg class="SVG">
        <rect class="rect r1"></rect>
        <rect class="rect r2"></rect>
        <rect class="rect r3"></rect><rect class="rect r4"></rect><rect class="rect r5"></rect>
    </svg>
</div> */}