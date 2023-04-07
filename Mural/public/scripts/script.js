document.addEventListener("DOMContentLoaded", () =>{
    updatePosts()
})


const fechar= () => {
    let modal = document.querySelector("dialog");
    modal.close()
}

const generateCard = (post) =>{
    let {id, title, description} = post;
    let card = 
        ` 
        <div id="${id}" class="card">
            <div class="cardHeader">
                <div>${title}</div>
            </div>
            <div class="cardBody">
                <div class="cardText">${description}</div>
            </div>
            
            <button onclick="deletePost(${id})" class="delete">
                <p class="paragraph"> delete </p>
                <span class="icon-wrapper">
                    <svg class="icon" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </span>
            </button>
        </div>
    `
    return card;
}

const updatePosts = () =>{
    fetch("http://localhost:5000/api/all").then(res => {
        return res.json()
    })
    .then(json => {
        let postsElements = "";
        let posts = JSON.parse(json)

        posts.forEach(post => {

            let postsElement = generateCard(post)

            if (post.id) {
                postsElements += postsElement;
            } 
        });
        document.getElementById("posts").innerHTML = postsElements
    })
}

const newPost = () => {
    let title = document.getElementById("title").value
    let description = document.getElementById("description").value
    let modal = document.querySelector("dialog");
    let post = {title, description}

    let options = {
        method: "POST",
        headers: new Headers({"content-type" : "application/json"}),
        body: JSON.stringify(post)
    }

    if(title != "" && description != ""){
        fetch("http://localhost:5000/api/new", options).then(res =>{
            updatePosts();
            document.getElementById("title").value = "";
            description = document.getElementById("description").value = "";
        
        })
    }
    else{
        modal.showModal()
    }
    
}
function deletePost(id){
    /*o parametro id esta por algum motivo retornando um html
    entao o transformei em uma string e peguei somente a parte que eu precisava */
    let post = id.outerHTML;
    let postId = post.split("").slice(9, 14).join("");    
    let method= { method: "DELETE" }

    fetch(`http://localhost:5000/api/all/${postId}`, method).then(res => {
        updatePosts();
    })
}