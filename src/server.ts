import cds from '@sap/cds'
import express from 'express'
import { listen } from 'soap' 
import bodyParser from 'body-parser'
import cors from 'cors'
import { HelloService } from './soap/HelloService'
import fs from 'fs'
import path from 'path'

const { PORT = 4004 } = process.env
const app = express()
const wsdlPath = path.join(__dirname, 'soap/HelloService.wsdl')
const wsdlContent = fs.readFileSync(wsdlPath, 'utf-8')

app.use(cors())
app.use(bodyParser.raw({ type: 'text/xml' }))

cds.serve('all').in(app)

app.use((req, res, next) => {
  console.log('Incoming request:', req.method, req.url)
  console.log('Headers:', req.headers)
  console.log('Body:', req.body?.toString())
  next()
})

listen(app, {
  path: '/soap',
  services: HelloService,
  xml: wsdlContent 
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
