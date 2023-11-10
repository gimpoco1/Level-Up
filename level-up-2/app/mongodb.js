import mongoose from 'mongoose';

const connectMongoDB = async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Tasks');
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDB;

// import { MongoClient } from 'mongodb';
// import { createRouter } from 'next-connect';

// const client = new MongoClient('mongodb://127.0.0.1:27017/Tasks', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// async function database(req, res, next) {
//   req.dbClient = client;
//   req.db = client.db('MCT');
//   return next();
// }

// const middleware = createRouter();

// middleware.use(database);

// export default router.middleware;