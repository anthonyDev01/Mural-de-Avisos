module.exports = {
   posts: [
        {
            id: "akdosak",
            title: "teste",
            description: "teste description"
        }
    
    ],

    getAll(){
        return this.posts;
    },

    newPost(title, description){
        this.posts.push({id: generationID(), title, description})
    },
    
}

const generationID = () => {
    return Math.random().toString(36).slice(2)//passando a base exadecimal para geral um id com letras
}
