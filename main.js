//Initial set
import {loadPosts, loadComments, addNewPost} from "./api.js";
import {
    addPostToDom, addCommentToDom, formAddPost, inputBody, inputTitle, statusSuccess, statusFailed
} from "./dom.js";

//Function
const handleLoadPost = () => {
    loadPosts().then((posts) => {
        posts.forEach(post => {
            addPostToDom(post);
            loadComments(post.id).then(comments => {
                comments.forEach(comment => {addCommentToDom(comment, post.id)})
            }).catch(error => {
                console.log(error);
            })
        })
    });
}

const handleAddNewPost = (e) => {
    e.preventDefault();

    const title = inputTitle.value.trim();
    const body = inputBody.value.trim();
    const userId = 1;

    if (title && body) {
        addNewPost(title, body, userId).then(post => {
            addPostToDom(post);
            statusSuccess();
        }).catch(error => {
            console.log(error);

        })
    } else {
        statusFailed();
    }

    inputTitle.value = "";
    inputBody.value = "";
}

//Main
formAddPost.addEventListener("submit", handleAddNewPost);

handleLoadPost();