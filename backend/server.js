require("dotenv").config();
const express = require('express');
const connecttodb = require('./utils/db');


const cors = require('cors');

const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRoutes.js');
const productRouter = require('./routes/productRoutes.js');
const cartRouter = require('./routes/cartRoutes.js');
const orderrouter = require("./routes/orderRoutes.js");
const notificationrouter = require("./routes/notificationRoutes.js");






const app = express();
 const port = 5000;
 app.use(cors({
   origin: 'http://localhost:5173', // React Frontend URL
   credentials: true // Allow Cookies and Authorization Headers
 }));
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 app.use(cookieParser());  




app.use('/api',userRouter);
app.use('/api/products',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderrouter)
app.use('/api/notification',notificationrouter)
// app.use('/auth',googleauthrouter)




 app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
    connecttodb();
 })


