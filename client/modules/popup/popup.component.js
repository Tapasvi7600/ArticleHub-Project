"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angular2_modal_1 = require("angular2-modal");
var router_1 = require("@angular/router");
var comment_1 = require("../articles/shared/comment");
var article_service_1 = require("../articles/shared/article.service");
var rxjs_1 = require("rxjs");
var CommentPopup = (function () {
    function CommentPopup(dialog, router, articleService, route) {
        this.dialog = dialog;
        this.router = router;
        this.articleService = articleService;
        this.route = route;
        this.comment = new comment_1.Comment();
        this.emitter = dialog.context.emitter;
        this.articleType = dialog.context.articleType;
        this.commentId = dialog.context.idAppender;
    }
    CommentPopup.prototype.ngOnInit = function () {
    };
    CommentPopup.prototype.onSubmit = function (commentForm) {
        this.comment.ArticleType = this.articleType;
        this.comment.CommentId = this.commentId;
        if (commentForm.form.valid) {
            console.log("article type:" + this.articleType);
            console.log("Comment Date:" + this.comment.CommentData);
            this.articleService.createComment(this.comment).subscribe(function (data) {
                console.log("res" + JSON.stringify(data));
                return true;
            }, function (error) {
                console.error("Error saving comment!");
                return rxjs_1.Observable.throw(error);
            });
        }
        this.dialog.close();
    };
    CommentPopup.prototype.onClose = function () {
        this.dialog.close();
    };
    CommentPopup = __decorate([
        core_1.Component({
            selector: 'modal-content',
            template: require('./popup.component.html'),
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [article_service_1.ArticleService]
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef, router_1.Router, article_service_1.ArticleService, router_1.ActivatedRoute])
    ], CommentPopup);
    return CommentPopup;
}());
exports.CommentPopup = CommentPopup;
//# sourceMappingURL=popup.component.js.map