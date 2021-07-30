const imageURL = ' https://distinct-vaulted-freesia.glitch.me/image'
const title = el('fg-title')
const image = el('fg-image')
const likesButton = el('like-button')
const likes = el('fg-likes')
const fgComments = el('fg-comments')
const commentForm = el('comment-form')
counter = 0

function el(id) {
    return document.getElementById(id)
}

fetch(imageURL)
.then(resp => resp.json())
.then(data => loadData(data))

function loadData(data) {
    console.log(data)
    title.innerText = data.title
    image.src = data.image
    counter = data.likes
    renderCounter()
    loadComments(data.comments)
}

function renderCounter() {
    likes.innerText = `${counter} likes`
}

likesButton.addEventListener('click', () => {
    counter += 1
    renderCounter()
})

function loadComments(comments){
    fgComments.innerHTML = ''
    comments.forEach(comment => addComment(comment.content))
}

function addComment(comment) {
    const li = document.createElement('li')
    li.innerText = comment
    fgComments.append(li)
}

commentForm.addEventListener('submit', e => {
    e.preventDefault()
    addComment(e.target[0].value)
    e.target[0].value = ''
})