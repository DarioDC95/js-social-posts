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

// BONUS 2
function imageProfileIf(elem) {
    let imageProfile;
    
    if (elem.image == undefined) {
        let authorName = elem.name;
        const arrayName = authorName.split(' ');
        let firstName = arrayName[0];
        let surname = arrayName[1];
        let nameFirstLetter = firstName.charAt(0);
        let surnameFirstLetter = surname.charAt(0);
        imageProfile = `<h1 class="profile-pic color-black">${nameFirstLetter}${surnameFirstLetter}</h1>`;
    }
    else {
        imageProfile = `<img class="profile-pic" src="${elem.image}" alt="${elem.name}"></img>`
    }

    return imageProfile
}

// MILESTONE 2
// identifico il container
const containerPost = document.getElementById('container')

// scorrere gli oggetti dell'array con il forEach
posts.forEach((element, index, array) => {
    
    // BONUS 1
    let italianDate = element.created.split('-').reverse().join('/');

    // scorrere le immagini con il forEach
    containerPost.innerHTML += `<div class="post">
                                    <div class="post__header">
                                        <div class="post-meta">                    
                                            <div class="post-meta__icon">
                                                ${imageProfileIf(element.author)}                    
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
// definisco l'array del buttonLike
const buttonLike = document.getElementsByClassName('like-button');

// definisco l'array del likeCounter
const likeCounter = document.getElementsByClassName('js-likes-counter');
console.log(buttonLike);
console.log(likeCounter);

// assegno l'addEventListener al buttonLike
for (let i = 0; i < posts.length; i++) {
    buttonLike[i].addEventListener('click', function(event) {
        const actualLikeCounter = likeCounter[i];
        const numCounterLike = parseInt(actualLikeCounter.innerText);

        if (buttonLike[i].classList.contains('like-button--liked')) {
            buttonLike[i].classList.remove('like-button--liked');
            actualLikeCounter.innerText = numCounterLike - 1;
        }
        else {
            buttonLike[i].classList.add('like-button--liked');
            actualLikeCounter.innerText = numCounterLike + 1;
        }

        event.preventDefault();
    })
}