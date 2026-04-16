const apiKey = 'IoJ1RaFHCcnHpdvIPalikoU5URBCuXSJX09ar3FvFzGwrqkDp3MgDvDn'

const loadImg= (query)=>{
    fetch(`https://api.pexels.com/v1/search?query=${query}`,{
        method: 'GET',
        headers: {
            Authorization: apiKey
        }
    })
    .then((response)=>{
        if(response.ok){
            return response.json()
        } else {
            throw new Error ('Errore nella chiamata')
        }
    })
    .then((data)=>{
        newImg(data.photos)
    })
    .catch((err)=>{
        console.error('Si è verificato un problema:', err)
    })
}

const loadFirstImg = document.getElementById('loadBtn')
const loadSecondImg = document.getElementById('loadSecond')

const newImg =(photos)=>{
    const images = document.querySelectorAll('.card img')
    photos.forEach((photo, index)=>{
        if (images[index]) {
            images[index].src= photo.src.large
        }
    })
}

loadFirstImg.addEventListener('click',(e)=>{
    e.preventDefault()
    loadImg('hamsters')
})

loadSecondImg.addEventListener('click',(e)=>{
    e.preventDefault()
    loadImg('zebra')
})

const hideBtn = ()=> {
    const editBtn = document.querySelectorAll('.btn-group button:last-child')
    editBtn.forEach((btn)=>{
        btn.innerText= 'Hide'
    
        btn.addEventListener('click',(e)=>{
            const card = e.currentTarget.closest('.col-md-4')  //target.closest cerca la più vicina con quelle caratteristiche
            card.classList.add('d-none')
        })
    })
}

hideBtn()
