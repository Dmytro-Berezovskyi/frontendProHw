const containerPosts = document.querySelector('#container-posts');
export const formAddPost = document.querySelector('#form-add_post');

const postContainers = {};

export const addPostToDom = (post) => {
    const postContainer = document.createElement("div");
    const title = document.createElement("h3");
    const userPost = document.createElement("span");
    const line = document.createElement("div");
    const commentsContainer = document.createElement('div');

    postContainer.classList.add("post-container");
    title.classList.add("title");
    userPost.classList.add("user-post");
    line.classList.add("line");
    commentsContainer.classList.add("comments-container");

    title.innerHTML = post.title;
    userPost.innerHTML = post.body;

    containerPosts.insertBefore(postContainer, formAddPost);
    postContainer.appendChild(title);
    postContainer.appendChild(userPost);
    postContainer.appendChild(line);
    postContainer.appendChild(commentsContainer);

    postContainers[post.id] = {
        postContainer: postContainer,
        commentsContainer: commentsContainer,
    };
};

export const addEventListenerToBtn = (postId) => {
    const btnComments = document.createElement("button");
    btnComments.classList.add("comments");
    btnComments.innerHTML = "Last comments";
    postContainers[postId].appendChild(btnComments);

    const commentsContainer = postContainers[postId].commentsContainer;
    btnComments.addEventListener('click', () => {
        commentsContainer.classList.toggle('active');
    });
}

export const addCommentToDom = (comment, postId) => {
    const commentsContainer = postContainers[postId].commentsContainer;
    const commentBlock = document.createElement("div");
    const commentName = document.createElement("span");
    const commentEmail = document.createElement("span");
    const commentTxt = document.createElement("span");

    commentBlock.classList.add("comment-block");
    commentName.classList.add("comment-name");
    commentEmail.classList.add("comment-email");
    commentTxt.classList.add("comment-txt");

    commentEmail.innerText = comment.email;
    commentName.innerText = comment.name;
    commentTxt.innerHTML = comment.body;

    commentsContainer.appendChild(commentBlock);
    commentBlock.appendChild(commentName);
    commentBlock.appendChild(commentEmail);
    commentBlock.appendChild(commentTxt);
};

export function statusSuccess() {
    const postStatus = document.createElement('span');
    postStatus.classList.add("status-success");
    postStatus.innerHTML = "Post successfully added";
    formAddPost.insertBefore(postStatus, inputTitle);

    setTimeout(() => {
        postStatus.remove();
    }, 3000)
}

export function statusFailed() {
    const postStatus = document.createElement('span');
    postStatus.classList.add("status-failed");
    postStatus.innerHTML = "Enter the title and content of the post !";
    formAddPost.insertBefore(postStatus, inputTitle);

    setTimeout(() => {
        postStatus.remove();
    }, 5000)
}

export function statusFailedPostToServer () {
    const postStatus = document.createElement('span');
    postStatus.classList.add("status-failed");
    postStatus.innerHTML = "Failed to post, please try again";
    formAddPost.insertBefore(postStatus, inputTitle);

    setTimeout(() => {
        postStatus.remove();
    }, 5000)
}