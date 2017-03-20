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
var popup_component_1 = require('../../popup/popup.component');
var bootstrap_1 = require('angular2-modal/plugins/bootstrap');
var angular2_modal_1 = require("angular2-modal");
var article_service_1 = require("../shared/article.service");
var SportsArticleComponent = (function () {
    function SportsArticleComponent(articleService, modal, overlay, vcRef) {
        this.articleService = articleService;
        this.modal = modal;
        this.overlay = overlay;
        this.close = true;
        this.displayButton = false;
        this.displayTextArea = false;
        this.selectedText = '';
        overlay.defaultViewContainer = vcRef;
    }
    SportsArticleComponent.prototype.ngOnInit = function () {
        this.commentCount = 0;
        this.idAppender = 0;
        this.testAppender = 0;
    };
    SportsArticleComponent.prototype.OpenPopup = function (articleType) {
        var _this = this;
        this.idAppender = this.idAppender + 1;
        $("<input/>", {
            "class": "fa fa-bookmark",
            "type": "button",
            "value": "comment",
            "id": this.idAppender,
            "style": "position:absolute;top:this.yPosition+'px';left:400px",
            click: function () {
                _this.displayButton = true;
                $(".comment").click(("button", function (e) {
                    _this.bid = e.target.id;
                    console.log(_this.bid);
                    _this.getCommentData(_this.bid, articleType);
                })).delay(3000);
            }
        }).css({
            'top': this.yPosition + 'px',
            'left': '900px',
            'position': 'absolute',
        })
            .appendTo("div.comment");
        this.modal.open(popup_component_1.CommentPopup, angular2_modal_1.overlayConfigFactory({
            emitter: this.eventEmitter,
            articleType: articleType,
            idAppender: this.idAppender
        }, bootstrap_1.BSModalContext));
        this.close = false;
    };
    SportsArticleComponent.prototype.showCoords = function (event) {
        this.xPostion = event.clientX;
        this.yPosition = event.clientY;
    };
    SportsArticleComponent.prototype.GetCoordinates = function () {
        var ele = document.getElementById('tooltip');
        var sel = window.getSelection();
        var rel1 = document.createRange();
        rel1.selectNode(document.getElementById('cal1'));
        var rel2 = document.createRange();
        rel2.selectNode(document.getElementById('cal2'));
        window.addEventListener('mouseup', function () {
            if (!sel.isCollapsed) {
                var r = sel.getRangeAt(0).getBoundingClientRect();
                var rb1 = rel1.getBoundingClientRect();
                var rb2 = rel2.getBoundingClientRect();
                ele.style.top = (r.bottom - rb2.top) * 100 / (rb1.top - rb2.top) + 'px';
                ele.style.left = (r.left - rb2.left) * 100 / (rb1.left - rb2.left) + 'px';
                ele.style.display = 'block';
            }
        });
        $(document).mouseup(function (e) {
            var container = $(".div1");
            var textAreaContainer = $(".textarea");
            if (!container.is(e.target)
                && container.has(e.target).length === 0) {
                container.hide();
            }
        });
    };
    SportsArticleComponent.prototype.getCommentData = function (id, articleType) {
        var _this = this;
        this.articleService.getComment(id, articleType).then(function (data) {
            console.log("res" + JSON.stringify(data));
            _this.textAreaData = data.Data.CommentData;
            _this.displayTextArea = true;
            return true;
        }).catch(function (error) {
            console.log(error);
        });
    };
    SportsArticleComponent = __decorate([
        core_1.Component({
            selector: 'sports-article',
            template: require('./sports.component.html'),
            providers: [article_service_1.ArticleService]
        }), 
        __metadata('design:paramtypes', [article_service_1.ArticleService, bootstrap_1.Modal, angular2_modal_1.Overlay, core_1.ViewContainerRef])
    ], SportsArticleComponent);
    return SportsArticleComponent;
}());
exports.SportsArticleComponent = SportsArticleComponent;
//# sourceMappingURL=sports.component.js.map