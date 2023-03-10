const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// MILESTONE 2
// identifico il container
const containerPost = document.getElementById('container')

// scorrere gli oggetti dell'array con il forEach
posts.forEach((element, index, array) => {
    
    // BONUS 1
    const date = element.created.split('-');
    let italianDate = `${date[1]}/${date[2]}/${date[0]}`;

    // BONUS 2
    let imageProfile;
    
    if (element.author.image == undefined) {
        let authorName = element.author.name;
        const arrayName = authorName.split(' ');
        let firstName = arrayName[0];
        let surname = arrayName[1];
        let nameFirstLetter = firstName.charAt(0);
        let surnameFirstLetter = surname.charAt(0);
        imageProfile = `<h1 class="profile-pic color-black">${nameFirstLetter}${surnameFirstLetter}</h1>`;
    }
    else {
        imageProfile = `<img class="profile-pic" src="${element.author.image}" alt="${element.author.name}"></img>`
    }

    // scorrere le immagini con il forEach
    containerPost.innerHTML += `<div class="post">
                                    <div class="post__header">
                                        <div class="post-meta">                    
                                            <div class="post-meta__icon">
                                                ${imageProfile}                    
                                            </div>
                                            <div class="post-meta__data">
                                                <div class="post-meta__author">${element.author.name}</div>
                                                <div class="post-meta__time">${italianDate}</div>
                                            </div>                    
                                        </div>
                                    </div>
                                    <div class="post__text">${element.content}</div>
                                    <div class="post__image">
                                        <img src="${element.media}" alt="">
                                    </div>
                                    <div class="post__footer">
                                        <div class="likes js-likes">
                                            <div class="likes__cta">
                                                <a class="like-button  js-like-button" href="#" data-postid="${element.id}">
                                                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                                    <span class="like-button__label">Mi Piace</span>
                                                </a>
                                            </div>
                                            <div class="likes__counter">
                                                Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
                                            </div>
                                        </div> 
                                    </div>
                                </div>`          
})

// MILESTONE 3
const bottoneLike = document.getElementsByClassName('js-like-button');

// creo un array di like dati in cui inserir?? gli id dei pulsanti gi?? premuti
const arrayLike = [];

for (let i=0; i<bottoneLike.length; i++) {

    bottoneLike[i].addEventListener('click', function(){
        
        // identifico l'id dell'elemento clickato
        const postId = this.dataset.postid;
        console.log(postId)
        
        // identifico l'elemento con i likes con id corrispondente al pulsante clickato
        const likes = document.getElementById(`like-counter-${postId}`);

        // identifico testo dell'elemento clickato
        const likesNumber = parseInt(likes.innerText);

        // stabilisco la condizione per definire se il like deve essere dato oppure no
        if (arrayLike.includes(postId)) {
            likes.innerText = likesNumber-1;
            const index = arrayLike.indexOf(postId);
            arrayLike.splice(index,1);
            bottoneLike[i].classList.remove("like-button--liked");
            console.log(arrayLike);
        }
        else {
            likes.innerText = likesNumber+1;
            arrayLike.push(postId);
            console.log(arrayLike);
            bottoneLike[i].classList.add("like-button--liked");
        }
    });
}