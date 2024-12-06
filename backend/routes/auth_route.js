import express from 'express'
import {
    authenticate
} from '../controller/auth_controller.js'

const app = express()

app.post('/post', authenticate)

export default app