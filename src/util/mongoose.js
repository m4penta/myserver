module.exports = {
    mutilObjMongoose : function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject());
    },
    mongooseToObj : function (mongoose){
        return mongoose ? mongoose.toObject(): mongoose;
    }
}