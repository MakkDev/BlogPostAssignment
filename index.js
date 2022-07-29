
let listContainer = document.getElementById("blog__container");



fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((data) => {
    for(let {title, body, id} of data) {
        var postNumber = document.createElement('h1')
        var newTitle = document.createElement('h2')
        var newBody = document.createElement('p')
        postNumber.innerText = `Post number ${id}`
        newTitle.innerText = title;
        newTitle.classList.add('title')
        newBody.classList.add('body')
        newBody.innerText = body;
        listContainer.appendChild(postNumber)
        listContainer.appendChild(newTitle)
        listContainer.appendChild(newBody)
        
    }
    })
