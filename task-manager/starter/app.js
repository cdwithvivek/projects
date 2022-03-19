console.log('Task Manager App')
// function already running

const express = require('express')
const app = express()
const port = 3000
const tasks = require('./routes/tasks')
const connectdb = require('./db/connet')
require('dotenv').config()
// middleware
app.use(express.json())

//routes
app.use('/api/v1/tasks',tasks)

const start = async () =>{
    try{
        await connectdb(process.env.MONGO_URI).then( () => { console.log('connected')}).catch( () => {console.log('error')})

        app.listen(port, (err)=>{
            if(err)
                return
            console.log(`server is listening ${port}`)
        })

    }catch(err){
        console.log(err)
    }
}

start()

