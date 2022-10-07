function locationStorageUpdate(){
    return JSON.parse(localStorage.getItem('@favoriteJobs')) || []
}

function checkExisting(job){
    return locationStorageUpdate().findIndex(element => element.id === job.id)
}

function favorite(job){

    let favoriteList = locationStorageUpdate()

    const jobExists = checkExisting(job)

    if(jobExists < 0){
        favoriteList = [...favoriteList, job]
    }else{
        favoriteList.splice(jobExists, 1)
    }
    
    localStorage.setItem('@favoriteJobs', JSON.stringify(favoriteList))
    
    render(jobsData)
}