//Function
//function renderComments() {
//    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments?_limit=2`)
//        .then(res => res.json()).then(data => {
//        data.forEach((comment) => {
//            const commentsContainer = document.createElement("div");
//            commentsContainer.classList.toggle('active');
//
//            const commentName = document.createElement("span");
//            const commentEmail = document.createElement("span");
//            const commentTxt = document.createElement("span");
//
//            commentName.classList.add("comment-name");
//            commentEmail.classList.add("comment-email");
//            commentTxt.classList.add("comment-txt");
//
//            commentEmail.innerText = comment.email;
//            commentName.innerText = comment.name;
//            commentTxt.innerHTML = comment.body;
//
//            postContainer.appendChild(commentsContainer);
//            commentsContainer.appendChild(commentName);
//            commentsContainer.appendChild(commentEmail);
//            commentsContainer.appendChild(commentTxt);
//        })
//    })
//
//}
function renderPosts(data) {
    data.forEach((post) => {
        const containerPosts = document.querySelector('#container-posts');
        const formAddPost = document.querySelector('#form-add_post');
        const postContainer = document.createElement("div");
        const title = document.createElement("h3");
        const userPost = document.createElement("span");
        const line = document.createElement("div");
        const btnComments = document.createElement("button");

        postContainer.classList.add("post-container");
        title.classList.add("title");
        userPost.classList.add("user-post");
        line.classList.add("line");
        btnComments.classList.add("comments");

        title.innerHTML = post.title;
        userPost.innerHTML = post.body;
        btnComments.innerHTML = "Comments";

        containerPosts.insertBefore(postContainer, formAddPost);
        postContainer.appendChild(title);
        postContainer.appendChild(userPost);
        postContainer.appendChild(line)
        postContainer.appendChild(btnComments);


        btnComments.addEventListener('click', () => {
            btnComments.classList.toggle('active');
            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments?_limit=2`)
                .then(res => res.json()).then(data => {
                data.forEach((comment) => {
                    if (btnComments.classList.contains('active')) {
                        const commentsContainer = document.createElement("div");
                        commentsContainer.classList.toggle('active');

                        const commentName = document.createElement("span");
                        const commentEmail = document.createElement("span");
                        const commentTxt = document.createElement("span");

                        commentName.classList.add("comment-name");
                        commentEmail.classList.add("comment-email");
                        commentTxt.classList.add("comment-txt");

                        commentEmail.innerText = comment.email;
                        commentName.innerText = comment.name;
                        commentTxt.innerHTML = comment.body;

                        postContainer.appendChild(commentsContainer);
                        commentsContainer.appendChild(commentName);
                        commentsContainer.appendChild(commentEmail);
                        commentsContainer.appendChild(commentTxt);
                    } else {
                        postContainer.removeChild(commentsContainer);
                    }
                })
            })
        })
    })
}
//Main
fetch('https://jsonplaceholder.typicode.com/posts?_limit=10').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
    renderPosts(data);
})