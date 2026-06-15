import express from "express"

const app = express()
const PORT = 3000

app.use(express.urlencoded({ extended:true }))
app.set("view engine", "ejs")

interface Post {
    id: number
    title: string
    content: string
    createdAt: Date
}

const posts: Post[] = [
    {
        id: 1,
        title: "First Post",
        content: "Welcome to the blog!",
        createdAt: new Date()
    }
]

app.get("/", (req, res) => {
    res.render("home", { posts })
})

// View a single post
app.get("/post/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find(p => p.id === id)

    if (!post) {
        res.status(404).send("Post not found")
        return
    }

    res.render("post", { post })
})

// Create a new post
app.post("/create", (req, res) => {
    const { title, content } = req.body

    if (!title || !content) {
        res.status(400).send("Title and content are required")
        return
    }

    const newPost: Post = {
        id: posts.length + 1,
        title,
        content,
        createdAt: new Date()
    }

    posts.push(newPost)
    res.redirect("/")
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})