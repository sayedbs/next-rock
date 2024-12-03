export async function getPosts() {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    return posts.json();
}

export async function getPost(postId) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return posts.json();
}
export async function getPostComments(postId) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    return posts.json();
}