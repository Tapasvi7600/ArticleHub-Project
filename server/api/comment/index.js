module.exports = class CommentsController {
    constructor(app) {
        app.post('/api/comment', this.addComment);
        app.get('/api/comment/:articleType/:id', this.getComment);
       // app.put('/api/comment/:id', this.updateComment);
        //app.delete('/api/comment/:id', this.deleteComment);
        app.get('/api/comment', this.listComments);
    }

    /**
     * @method addComment
     * @description  Method to add new comments.
     * @param req
     * @param res
     */

    addComment(req, res) {
        let postBody = req.body,
            comment = new global.MongoORM.Comment();
        console.log(req.body);
        if (postBody.CommentId) {
            comment.CommentId = postBody.CommentId;
        }
        if (postBody.ArticleType) {
            comment.ArticleType = postBody.ArticleType;
        }
        if (postBody.CommentData) {
            comment.CommentData = postBody.CommentData;
        }
        comment.save()
            .then(function (comment) {
                res.sendResponse(comment);
            })
            .catch(function (error) {
                let errors = [];
                if (error.name === 'ValidationError') {
                    Object.keys(error.errors).forEach(function (field) {
                        let eObj = error.errors[field].properties;
                        if (eObj && eObj.hasOwnProperty("message"))
                            errors.push(eObj['message']);
                    });
                } else if (error.name === 'MongoError') {
                    errors.push(error);
                } else
                    errors.push('Internal server error.');
                res.sendError(errors);
            });
    }

    /**
     * @method listComments
     * @description  Method to list the Comments stored in database.
     * @param req
     * @param res
     */

    listComments(req, res) {
        let row = req.query.rows ? parseInt(req.query.rows) : 100;
        let pageNo = req.query.pageNo ? parseInt(req.query.pageNo) : 0;
        let sortBy = req.query.sortBy ? req.query.sortBy : 'CommentId'; //default sort property
        let sortOrder = req.query.sortOrder ? req.query.sortOrder : 'desc';
        let sort = {};
        sort[sortBy] = sortOrder;
        global.MongoORM.Comment.find({})
            .limit(row)
            .skip(row * pageNo)
            .sort(sort)
            .exec(function (err, comments) {
                global.MongoORM.Comment.count({}).exec(function (error, count) {
                    if (!error) {
                        res.sendResponse({
                            data: comments,
                            page: pageNo,
                            pages: Math.round(count / row),
                            totalRows: count
                        })
                    } else res.sendError(error);
                })
            });
    }


    /**
     * @method getComment
     * @description  Method to get the comment by comment id and article type.
     * @param req
     * @param res
     */

    getComment(req, res) {
        let id = req.params.id;
        let articleType=req.params.articleType;
        console.log(req.params.articleType)
        global.MongoORM.Comment.findOne({$and:[{CommentId: id},{ArticleType:articleType}]}, function (error, comment) {
            if (!error) {
                res.sendResponse(comment);
            }
            else
                res.sendError(error);
        });
    }

    /**
     * @method updateComment
     * @description  Method to get the update details.
     * @param req
     * @param res
     */

    updateComment(req, res) {
        let CommentId = req.params.id,
            commentBody = req.body;
        global.MongoORM.Comment.findById(CommentId)
            .then(function (comment) {
                if (comment != null) {
                    if (postBody.CommentId)
                        comment.CommentId = postBody.CommentId;
                    if (commentBody.ArticleType)
                        comment.ArticleType = commentBody.ArticleType;
                    if (commentBody.CommentData)
                        comment.CommentData = commentBody.CommentData;
                    return comment.save();
                } else
                    return res.sendError(new Exception('ObjectNotFound'));
            })
            .then(function (comment) {
                res.sendResponse(comment);
            })
            .catch(function (error) {

                let errors = [];
                if (error.name === 'ValidationError') {
                    Object.keys(error.errors).forEach(function (field) {
                        let eObj = error.errors[field].properties;
                        if (eObj.hasOwnProperty("message"))
                            errors.push(eObj['message']);
                    });
                } else if (error.name === 'MongoError') {
                    errors.push(error);
                } else
                    errors.push('Internal server error.');
                res.sendError(errors);
            });
    }

    /**
     * @method deleteComment
     * @description  Method to delete a Comment.
     * @param req
     * @param res
     */

    deleteComment(req, res) {
        let id = req.params.id;
        global.MongoORM.Comment.findByIdAndRemove(id, function (error) {
            if (!error) {
                res.sendResponse({message: 'Comment deleted successfully'});
            }
            else {
                res.sendError(error);
            }
        });
    }
};