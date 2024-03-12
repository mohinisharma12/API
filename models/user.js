const mongoose = require('mongoose')

// field schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        Required: true
    },
    email: {
        type: String,
        Required: true
    },
    password: {
        type: String,
        Required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    image: {
        public_id: {
            type: String,
    
        },
        url: {
            type: String,
            
        },
    },
  
}, {
    timestamps: true
}
)
//model
const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;