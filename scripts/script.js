async function GetImg() {
    let response = await (await fetch('https://jsonplaceholder.ir/users')).json()
    
    const posts = document.querySelector('.posts')

    response.forEach((el) => {
        console.log(el)
        posts.innerHTML += `<div class="user">
        <div class="line"></div>
        <div class="content">
            <div class="person">
                <img src="${el.avatar}" alt="">
                <h2 class="name">${el.username}</h2>
            </div>
            <div class="person-info">
                <h2 class="company">${el.company}</h2>
                <p class="email">${el.email}</p>
                <p class="phone">${el.phone}</p>
            </div>
        </div>
    </div>`
    })
}

GetImg()