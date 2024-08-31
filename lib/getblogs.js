export default async function getblogs() {
    const blogs = await fetch('https://server.aiexpertcareer.com/blogs');

    return blogs.json();
};