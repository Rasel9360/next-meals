export const getPostData = async () => {
    const res = await fetch(`${process.env.PUBLIC_API}/posts`)
    const data = await res.json();
    return data
}