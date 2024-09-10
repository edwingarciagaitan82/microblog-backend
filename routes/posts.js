const express = require('express')
const { Post } = require('../models')
const router = express.Router()


router.get('/', async (req, res) => {
  posts = await Post.find({ status: true })
  res.json({ 'items': posts, page: 1 })
})

router.get('/:id', async (req, res) => {
  post = await Post.findById(req.params.id)
  res.json(post)
})

router.post('/', async (req, res) => {
  date = new Date()
  post = Post({
    ...req.body,
    createdAt: date,
    updatedAt: date,
    createdBy: '',
    updatedBy: ''
  })
  await post.save()
  res.json({ 'message': 'Creado con éxito', data: post })
})

router.patch('/:id', async (req, res) => {
  date = new Date()
  post = await Post.findById(req.params.id)
  post.title = req.body.title
  post.content = req.body.content
  post.imageUrl = req.body.imageUrl
  post.updatedAt = req.body.updatedAt
  post.updatedBy = ''
  await post.save()
  res.json({ 'message': 'Actualizado con éxito', data: post })
})

router.delete('/:id', async (req, res) => {
  date = new Date()
  post = await Post.findById(req.params.id)
  post.status = false
  post.updatedAt = req.body.updatedAt
  post.updatedBy = ''
  await post.save()
  res.json({ 'message': 'Eliminado con éxito', data: post })
})

module.exports = router
