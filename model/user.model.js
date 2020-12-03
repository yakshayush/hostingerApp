const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number
 });

 const userModel = mongoose.model('login', userSchema);

 exports.createUser = (userData) => {
    const user = new User(userData);
    return user.save();
};