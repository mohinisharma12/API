const UserModel = require('../models/user')
const cloudinary = require('cloudinary').v2;
const bcrypt = require('bcrypt');
cloudinary.config({
    cloud_name: 'dtegewbdz',
    api_key: '737115465532514',
    api_secret: 'Hux02u8eb4auhAs3Z6k5keoTLsg'
});




class UserController {
    static getalluser = async (req, res) => {
        try {
            res.send('hellovuser')
        }
        catch (error) {
            console.log(error)
        }
    }
    static userinsert = async (req, res) => {
        try {
            const{name,email,password,confirmpassowrd}=req.body
            // console.log(req.files.image)
            const image = req.files.image
            const imageUpload = await cloudinary.uploader.upload(image.tempFilePath, {
                folder: 'userprofileapi'

            })
            // console.log(imageUpload)

           
            const user = await UserModel.findOne({ email: email }) //grabe one record
            //  console.log(user)
            if (user) {

                res
                    .status(401)
                    .json({ status: "failed", message: "this email is already exists" });
            }
            else {
                if (name && email && password && confirmpassowrd) {
                    if (password==confirmpassowrd) {
                        const hashpassword = await bcrypt.hash(password, 10);
                        const result = new UserModel({
                            name: name,
                            email: email,
                            password: hashpassword,
                            image: {
                                public_id: imageUpload.public_id,
                                url: imageUpload.secure_url
                            },


                        })
                        await result.save()
                        res
                        .status(201)
                        .json({ status: "success", message: "Registration successgully" });
                      

                    }
                    else {
                        res
                        .status(401)
                        .json({ status: "failed", message: "password and confirm password doessame" });

                    }
                }
                else {
                    res
                    .status(401)
                    .json({ status: "failed", message: "All fiels are required" });

                  
                }
            }






        } catch (error) {
            console.log(error)
        }
    }





}

module.exports = UserController