import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        default: 'testuser'
    },
    password: {
        type: String,
        default: 'testpassword' 
    },
    email: {
        type: String,
        default: 'testemail@gmail.com'
    },
});

const MockUser = mongoose.models.MockUser || mongoose.model('MockUser', userSchema);

export default MockUser;
