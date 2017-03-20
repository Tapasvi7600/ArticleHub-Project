import {Component, ViewEncapsulation, EventEmitter} from '@angular/core';
import {DialogRef, CloseGuard, ModalComponent} from "angular2-modal";
import {Router, ActivatedRoute} from "@angular/router";
import * as _ from 'lodash';
import {Comment} from "../articles/shared/comment"
import {ArticleService} from "../articles/shared/article.service";
import {Observable} from "rxjs";



@Component({
    selector: 'modal-content',
    template: require('./popup.component.html'),
    encapsulation: ViewEncapsulation.None,
    providers:[ArticleService]
})

export class CommentPopup implements CloseGuard, ModalComponent {

    emitter;
    articleType;
    commentId;
    constructor(private dialog: DialogRef,private router: Router,private articleService:ArticleService,private route: ActivatedRoute) {
        this.emitter = dialog.context.emitter;
        this.articleType= dialog.context.articleType;
        this.commentId=dialog.context.idAppender;
    }
    public comment: Comment=new Comment();

    ngOnInit() {
    }
    onSubmit(commentForm) {
        this.comment.ArticleType=this.articleType;
        this.comment.CommentId=this.commentId;
        if (commentForm.form.valid) {
            console.log("article type:"+this.articleType);
            console.log("Comment Date:"+this.comment.CommentData);
            this.articleService.createComment(this.comment).subscribe(
                data => {
                    console.log("res"+JSON.stringify(data));
                    return true;
                },
                error => {
                    console.error("Error saving comment!");
                    return Observable.throw(error);
                }
            );
        }
        this.dialog.close();

    }
    onClose(){
        this.dialog.close();
    }
}