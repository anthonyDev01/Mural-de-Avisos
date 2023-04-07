module.exports = {
   posts: [],

    getAll(){
        return this.posts;
        
    },

    newPost(title, description){
        this.posts.push({id: generationID(), title, description})
    },

    deletePost(id){
        let postIndex = this.posts.findIndex(post => post.id == id);
        this.posts.splice(postIndex, 1)
    }
    
}

const generationID = () => {
    /*estou gerando letras a aleatorias para por na frente do id porque
    etava tendo um problema de nao conseguir apagar um id que começasse com um numero,
    dava erro porque o sistema n indeticava como uma string*/
    let letras = 'abcdefghijklmnopqrstuvwxyz';
    let letraAleatoria = letras.charAt(Math.floor(Math.random() * letras.length));
    let numerosLetras = Math.random().toString(36).slice(2, 6) //passando a base exadecimal para geral um id com letras
    return letraAleatoria + numerosLetras;
}
