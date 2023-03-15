require ('express-async-errors')
const express = require('express')
require('dotenv').config()
const morgan  = require('morgan')



const userRoute = require('./routes/userRoute');
const cors = require('cors')


const app = express();
app.use(cors({origin: true}));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1', userRoute);


const PORT = process.env.PORT || 5000;


app.get('/api/v1' , (req, res) => {
    res.send('Hello World');
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
