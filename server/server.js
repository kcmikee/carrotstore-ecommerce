import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL ||'mongodb://localhost/carrotstore',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
const PORT = process.env.PORT || 5000

app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.get('/', (req,res)=>{
    res.send('server is ready boyyyy')
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})