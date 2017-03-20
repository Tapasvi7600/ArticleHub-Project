import {Component, ViewContainerRef} from '@angular/core';
import {CommentPopup} from  '../../popup/popup.component';
import {Modal, BSModalContext} from 'angular2-modal/plugins/bootstrap';
import {Overlay, overlayConfigFactory} from "angular2-modal";
import {ArticleService} from "../shared/article.service";

@Component({
    selector: 'business-article',
    template:require('./business.component.html') ,
    providers: [ArticleService]
})
export class BusinessArticleComponent {
    constructor(private articleService: ArticleService, public modal: Modal, public overlay: Overlay, vcRef: ViewContainerRef) {
        overlay.defaultViewContainer = vcRef;
    }

    eventEmitter;
    public close = true;
    public displayButton = false;
    public xPostion;
    public yPosition;
    public displayTextArea = false;
    public commentCount;
    public textAreaData;
    public idAppender;
    public testAppender;
    public bid;

    ngOnInit() {
        this.commentCount = 0;
        this.idAppender=0;
        this.testAppender=0;
    }

    OpenPopup(articleType) {
        this.idAppender=this.idAppender+1;
        $( "<input/>", {
            "class": "fa fa-bookmark",
            "type": "button",
            "value":"comment",
            "id":this.idAppender,
            "style":"position:absolute;top:this.yPosition+'px';left:400px",
            click:()=> {
                this.displayButton = true;
                $(".comment").click(("button",(e)=> {
                    this.bid=e.target.id;
                    console.log(this.bid);
                    this.getCommentData(this.bid,articleType);
                })).delay(3000);

            }
        }).css({
            'top':this.yPosition+'px',
            'left':'900px',
            'position': 'absolute',
        })
            .appendTo( "div.comment" );

        this.modal.open(CommentPopup, overlayConfigFactory({
            emitter: this.eventEmitter,
            articleType: articleType,
            idAppender:this.idAppender
        }, BSModalContext));
        this.close = false;
    }

    showCoords(event) {
        this.xPostion = event.clientX;
        this.yPosition = event.clientY;
    }
    selectedText: string = '';
    GetCoordinates() {
        let ele = document.getElementById('tooltip');
        let sel = window.getSelection();
        let rel1 = document.createRange();
        rel1.selectNode(document.getElementById('cal1'));
        let rel2 = document.createRange();
        rel2.selectNode(document.getElementById('cal2'));
        window.addEventListener('mouseup', function () {
            if (!sel.isCollapsed) {
                let r = sel.getRangeAt(0).getBoundingClientRect();
                let rb1 = rel1.getBoundingClientRect();
                let rb2 = rel2.getBoundingClientRect();
                ele.style.top = (r.bottom - rb2.top) * 100 / (rb1.top - rb2.top) + 'px';
                ele.style.left = (r.left - rb2.left) * 100 / (rb1.left - rb2.left) + 'px';
                ele.style.display = 'block';
            }
        });

        $(document).mouseup(function (e) {
            let container = $(".div1");
            let textAreaContainer = $(".textarea");
            if (!container.is(e.target)
                && container.has(e.target).length === 0)
            {
                container.hide();
            }
        });
    }

    getCommentData(id,articleType) {
        this.articleService.getComment(id,articleType).then(
            data => {
                console.log("res" + JSON.stringify(data));
                this.textAreaData = data.Data.CommentData;
                this.displayTextArea = true;
                return true;
            }).catch(function (error) {
            console.log(error);
        })
    }
}