import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const app = express()

dotenv.config()

app.use(bodyParser.json({ limit: "32mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }))
app.use(cors())

app.use('/posts', postRoutes)
app.use('/user', userRoutes)

app.get('/', (req, res) => {
   res.send('Welcome to Instaverse API')
})

// const CONNECTION_URL = 'mongodb+srv://instaverse:instaverse123@instaverse.60wh7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5001

mongoose.connect(process.env.CONNECTION_URL)
   .then(() => app.listen(PORT, () => console.log(`Server running on port:${PORT}`)))
   .catch(err => console.log(err.message))
