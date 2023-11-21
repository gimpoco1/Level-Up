import mongoose from 'mongoose';

const connectMongoDB = async()=>{
    try {
        await mongoose.connect('mongodb+srv://impoco126:3BSuyhPn99BZzUty@mongocluster.tvucwcb.mongodb.net/Tasks');
        // console.log('MongoDB connected');
    } catch (error) {
        console.log('error connecting to DB', error);
    }
}

export default connectMongoDB;

