import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Article } from "../models";

@Component({
    template: require("./article-list.component.html"),
    styles: [require("./article-list.component.scss")],
    selector: "article-list"
})
export class ArticleListComponent {     
    @Input() public entities: Array<Article> = [];
    @Output() onDelete: EventEmitter<{ value: Article }> = new EventEmitter<{ value: Article }>();
    @Output() onSelect: EventEmitter<{ value: Article }> = new EventEmitter<{ value: Article }>();
    @Output() onEdit: EventEmitter<{ value: Article }> = new EventEmitter<{ value: Article }>();
}
