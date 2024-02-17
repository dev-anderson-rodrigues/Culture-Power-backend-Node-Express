import 'dotenv/config'
import express from 'express'
import path from 'path'

import { mongoose } from './configs/connection'
import routes from './server/routes/index'
import { auth } from './server/middlewares/auth'
import { isAdmin } from './server/middlewares/Permission'

mongoose

const server = express()

server.use(express.json())
server.use(routes)
server.use(express.static(path.join(__dirname, '..', '..', 'server/uploads')))
server.use(auth)
server.use(isAdmin)

server.listen(process.env.PORT, () => console.log('Server is running'))
