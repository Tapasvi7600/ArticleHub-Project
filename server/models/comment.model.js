module.exports = (mongoose) => {

    let CommentSchema = new mongoose.Schema({

        CommentId: {
            type: String,
        },
        ArticleType: {
            type: String,
        },
        CommentData: {
            type: String,
        }
    }, {timestamps: true}, {strict: true});

    return mongoose.model('Comment', CommentSchema);
};