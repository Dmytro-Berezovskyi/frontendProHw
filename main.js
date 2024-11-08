const formNewPost = document.querySelector("#form-add_post");
const containerPosts = document.querySelector('#container-posts');
const formAddPost = document.querySelector('#form-add_post');

const postContainer = document.createElement("div");
postContainer.classList.add("post-container");
containerPosts.insertBefore(postContainer, formAddPost);
//Function
const loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10').then((response) => {
        return response.json();
    }).then((data) => {
        data.forEach((post) => {addPostToDom(post)})
    }).catch((error) => {
        console.log(error)
    });
}

const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/${post.id}/comments?_limit=2').then((response) => {
        return response.json();
    }).then((data) => {
        data.forEach((comment) => {addCommentToDom(comment)})
    }).catch((error) => {
        console.log(error)
    })
}

const addCommentToDom = (comment) => {
    const commentsContainer = document.createElement('div')
    const commentBlock = document.createElement("div");
    const commentName = document.createElement("span");
    const commentEmail = document.createElement("span");
    const commentTxt = document.createElement("span");

    commentsContainer.classList.add("comments-container");
    commentBlock.classList.add("comment-block");
    commentName.classList.add("comment-name");
    commentEmail.classList.add("comment-email");
    commentTxt.classList.add("comment-txt");

    commentEmail.innerText = comment.email;
    commentName.innerText = comment.name;
    commentTxt.innerHTML = comment.body;

    postContainer.appendChild(commentsContainer);
    commentsContainer.appendChild(commentBlock);
    commentBlock.appendChild(commentName);
    commentBlock.appendChild(commentEmail);
    commentBlock.appendChild(commentTxt);
}

const addPostToDom = (post) => {
    const title = document.createElement("h3");
    const userPost = document.createElement("span");
    const line = document.createElement("div");
    const btnComments = document.createElement("button");

    title.classList.add("title");
    userPost.classList.add("user-post");
    line.classList.add("line");
    btnComments.classList.add("comments");

    title.innerHTML = post.title;
    userPost.innerHTML = post.body;
    btnComments.innerHTML = "Last comments";

    postContainer.appendChild(title);
    postContainer.appendChild(userPost);
    postContainer.appendChild(line)
    postContainer.appendChild(btnComments);

    const commentsContainer = document.createElement("div");

    commentsContainer.classList.add("comments-container");

    postContainer.appendChild(commentsContainer);
};

//function renderPosts(data) {
//    data.forEach((post) => {
//        const containerPosts = document.querySelector('#container-posts');
//        const formAddPost = document.querySelector('#form-add_post');
//        const postContainer = document.createElement("div");
//        const title = document.createElement("h3");
//        const userPost = document.createElement("span");
//        const line = document.createElement("div");
//        const btnComments = document.createElement("button");
//
//        postContainer.classList.add("post-container");
//        title.classList.add("title");
//        userPost.classList.add("user-post");
//        line.classList.add("line");
//        btnComments.classList.add("comments");
//
//        title.innerHTML = post.title;
//        userPost.innerHTML = post.body;
//        btnComments.innerHTML = "Last comments";
//
//        containerPosts.insertBefore(postContainer, formAddPost);
//        postContainer.appendChild(title);
//        postContainer.appendChild(userPost);
//        postContainer.appendChild(line)
            //        postContainer.appendChild(btnComments);
//
//        const commentsContainer = document.createElement("div");
//
//        commentsContainer.classList.add("comments-container");
//
//        postContainer.appendChild(commentsContainer);
//
//        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments?_limit=2`)
            //            .then(res => res.json()).then(data => {
//            data.forEach((comment) => {
//                const commentBlock = document.createElement("div");
//                const commentName = document.createElement("span");
//                const commentEmail = document.createElement("span");
//                const commentTxt = document.createElement("span");
//
//                commentBlock.classList.add("comment-block");
//                commentName.classList.add("comment-name");
//                commentEmail.classList.add("comment-email");
//                commentTxt.classList.add("comment-txt");
//
//                commentEmail.innerText = comment.email;
//                commentName.innerText = comment.name;
//                commentTxt.innerHTML = comment.body;
//
//                commentsContainer.appendChild(commentBlock);
//                commentBlock.appendChild(commentName);
//                commentBlock.appendChild(commentEmail);
//                commentBlock.appendChild(commentTxt);
//            })
                    //        })
            //
            //        btnComments.addEventListener('click', () => {
//            commentsContainer.classList.toggle('active');
//        })
            //    })
        //}
////Main
//fetch('https://jsonplaceholder.typicode.com/posts?_limit=10').then((response) => {
//    return response.json();
//}).then((data) => {
//    console.log(data);
//    renderPosts(data);
//});

let newPostData = [];

formNewPost.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputTitle = document.querySelector("#input-title");
    const inputBody = document.querySelector("#input-body");

    const title = inputTitle.value.trim();
    const body = inputBody.value.trim();
    const userId = 1;

    if (title && body) {
        fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: userId,
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            addPostToDom(data)
        }).catch((error) => {console.log(error)});
    }

    inputTitle.value = "";
    inputBody.value = "";
})

btnComments.addEventListener('click', () => {
    commentsContainer.classList.toggle('active');
}

loadPosts();
loadComments();
console.log(newPostData);