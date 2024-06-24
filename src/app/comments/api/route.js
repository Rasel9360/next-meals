export async function GET() {
    return Response.json(comments, {
        headers: {
            'Set-Cookie': 'them=dark'
        }
    })
}

export async function POST(request) {
    const newComments = await request.json();

    comments.push({
        id: comments.length + 1,
        text: newComments.text
    })

    return Response.json({
        message: "new massage added",
        comments
    })
}


const comments = [
    {
        id: 1,
        text: "comments 1"
    },
    {
        id: 2,
        text: "comments 2"
    },
    {
        id: 3,
        text: "comments 3"
    },
]