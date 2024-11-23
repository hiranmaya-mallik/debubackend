import express from 'express'
import dotenv from 'dotenv'

const app = express()
const PORT = 3000

app.get('/', (req, res)=>{
    res.send('hello world')
})

app.get('/login',(req, res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`your port is ${PORT}`);
})