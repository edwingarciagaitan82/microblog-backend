const mongoose = require('mongoose');
const express = require('express')
const postsRoutes = require('./routes/posts')


const app = express()
const port = 3000

const connectDB = async() =>{
  try{
      await mongoose.connect('mongodb://mongo_admin:4VyhC5qeVLZbLpPqRSoWd3WSpwqp@127.0.0.1:27017/micro-blog?authSource=admin');
      console.log("MongoDB connected")
  }catch(err){
      console.log("MongoDB error connection", err)
  }
}
connectDB()

app.use(express.json())
app.use('/api/v1/posts', postsRoutes)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
