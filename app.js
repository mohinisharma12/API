const express = require('express')

const app = express()
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })
const web = require('./routes/web')
const connectdb = require('./db/connectdb')
const fileUpload = require ('express-fileupload')
const cookieParser = require('cookie-parser')
const cors = require('cors')
app.use(cookieParser())
app.use(cors())





app.use(fileUpload({useTempFiles:true}));
app.use('/api', web)
//for dataget in api
app.use(express.json( ))

connectdb()




// load route

// localhost:4000/api




//server create
app.listen(process.env.PORT, () => {
    console.log(`server running on localhost: ${process.env.PORT}`)
})
