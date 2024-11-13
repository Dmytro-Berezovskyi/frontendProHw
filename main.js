//Initial set
import {loadPosts, loadComments, addNewPost} from "./api.js";
import {
    addPostToDom, addCommentToDom, statusSuccess, statusFailed,
    statusFailedPostToServer, addEventListenerToBtn, formAddPost
} from "./dom.js";

//const containerPosts = document.querySelector('#container-posts');
//const formAddPost = document.querySelector('#form-add_post');
const inputTitle = document.querySelector('#input-title');
const inputBody = document.querySelector("#input-body");

//const apiUrl = 'https://jsonplaceholder.typicode.com';

//const postContainers = {};

//Server function
const handleLoadPost = () => {
    loadPosts().then((posts) => {
        posts.forEach(post => {
            addPostToDom(post)
            loadComments(post.id).then(comments => {
                comments.forEach(comment => {addCommentToDom(comment, post.id)})
            }).catch(error => {
                console.log(error);
            })
            addEventListenerToBtn(post.id);
        })
    });
}
//const loadPosts = async () => {
//    try {
//        const response = await fetch(apiUrl + '/posts?_limit=10');
//        if (!response.ok) {
//            throw new Error(`${response.status} Status: ${response.statusText}`);
//        }
//        const posts = await response.json();
//        posts.forEach(post => {addPostToDom(post)});
//    } catch (error) {
//        console.log(error);
//    }
//}

//const handleLoadComments = () => {
//    loadComments().then((comments) => {
//        comments.forEach(comment => {addCommentToDom(comment, post.id)})
//    }).catch(error => {
//        console.log(error);
//    })
//}

//const loadComments = async (postId) => {
//    try {
//        const response = await fetch(apiUrl + '/comments?_limit=2');
//        if (!response.ok) {
//            throw new Error(`${response.status} Status: ${response.statusText}`);
//        }
//        const comments = await response.json();
//        comments.forEach(comment => {addCommentToDom(comment, postId)})
//    } catch (error) {
//        console.log(error);
//    }
//}

const handleAddNewPost = (e) => {
    e.preventDefault();

    const title = inputTitle.value.trim();
    const body = inputBody.value.trim();
    const userId = 1;

    if (title && body) {
        addNewPost().then(post => {
            addPostToDom()
            statusSuccess()
        }).catch(error => {
            console.log(error);
            statusFailedPostToServer()
        })
    } else {
        statusFailed()
    }

    inputTitle.value = "";
    inputBody.value = "";
}

//const addNewPost = async (e) => {
//    e.preventDefault();
//
//    const title = inputTitle.value.trim();
//    const body = inputBody.value.trim();
//    const userId = 1;
//
//    if (title && body) {
//        try {
//            const response = await fetch(apiUrl + '/posts', {
//                method: "POST",
//                headers: {
//                    "Content-Type": "application/json",
//                },
//                body: JSON.stringify({
//                    title: title,
//                    body: body,
//                    userId: userId,
//                })
//            });
//            if (!response.ok) {
//                statusFailedPostToServer();
//                throw new Error(`${response.status} Status: ${response.statusText}`);
//            }
//            const post = await response.json();
//            addPostToDom(post)
//
//            statusSuccess();
//        } catch (error) {
//            console.log(error);
//        }
//    } else {
//        statusFailed();
//    }
//
//    inputTitle.value = "";
//    inputBody.value = "";
//}

//DOM function
//const addPostToDom = (post) => {
//    const postContainer = document.createElement("div");
//    const title = document.createElement("h3");
//    const userPost = document.createElement("span");
//    const line = document.createElement("div");
//    const btnComments = document.createElement("button");
//    const commentsContainer = document.createElement('div');
//
//    postContainer.classList.add("post-container");
//    title.classList.add("title");
//    userPost.classList.add("user-post");
//    line.classList.add("line");
//    btnComments.classList.add("comments");
//    commentsContainer.classList.add("comments-container");
//
//    title.innerHTML = post.title;
//    userPost.innerHTML = post.body;
//    btnComments.innerHTML = "Last comments";
//
//    containerPosts.insertBefore(postContainer, formAddPost);
//    postContainer.appendChild(title);
//    postContainer.appendChild(userPost);
//    postContainer.appendChild(line);
//    postContainer.appendChild(btnComments);
//    postContainer.appendChild(commentsContainer);
//
//    postContainers[post.id] = {
//        postContainer: postContainer,
//        commentsContainer: commentsContainer,
//    };
//
//    loadComments(post.id);
//
//    btnComments.addEventListener('click', () => {
//        commentsContainer.classList.toggle('active');
//    });
//};
//
//const addCommentToDom = (comment, postId) => {
//    const commentsContainer = postContainers[postId].commentsContainer;
//    const commentBlock = document.createElement("div");
//    const commentName = document.createElement("span");
//    const commentEmail = document.createElement("span");
//    const commentTxt = document.createElement("span");
//
//    commentBlock.classList.add("comment-block");
//    commentName.classList.add("comment-name");
//    commentEmail.classList.add("comment-email");
//    commentTxt.classList.add("comment-txt");
//
//    commentEmail.innerText = comment.email;
//    commentName.innerText = comment.name;
//    commentTxt.innerHTML = comment.body;
//
//    commentsContainer.appendChild(commentBlock);
//    commentBlock.appendChild(commentName);
//    commentBlock.appendChild(commentEmail);
//    commentBlock.appendChild(commentTxt);
//}
//
//function statusSuccess() {
//    const postStatus = document.createElement('span');
//    postStatus.classList.add("status-success");
//    postStatus.innerHTML = "Post successfully added";
//    formAddPost.insertBefore(postStatus, inputTitle);
//
//    setTimeout(() => {
//        postStatus.remove();
//    }, 3000)
//}
//
//function statusFailed() {
//    const postStatus = document.createElement('span');
//    postStatus.classList.add("status-failed");
//    postStatus.innerHTML = "Enter the title and content of the post !";
//    formAddPost.insertBefore(postStatus, inputTitle);
//
//    setTimeout(() => {
//        postStatus.remove();
//    }, 5000)
//}
//
//function statusFailedPostToServer () {
//    const postStatus = document.createElement('span');
//    postStatus.classList.add("status-failed");
//    postStatus.innerHTML = "Failed to post, please try again";
//    formAddPost.insertBefore(postStatus, inputTitle);
//
//    setTimeout(() => {
//        postStatus.remove();
//    }, 5000)
//}

//Main
formAddPost.addEventListener("submit", addNewPost);

handleLoadPost();