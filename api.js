const apiUrl = 'https://jsonplaceholder.typicode.com';

export const loadPosts = () => {
    return  fetch(apiUrl + '/posts?_limit=10').then((response) => {
        return response.json();
    });
}

export const loadComments = (postId) => {
    return fetch(apiUrl + '/comments?_limit=2').then((response) => {
        return response.json();
    });
}

export const addNewPost = () => {
    return fetch(apiUrl + '/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            body: body,
            userId: userId,
        })
    }).then((response) => {
        return response.json();
    });
}