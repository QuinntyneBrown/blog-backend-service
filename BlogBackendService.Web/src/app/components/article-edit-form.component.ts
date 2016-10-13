import { Component, ChangeDetectionStrategy, Input, Output, AfterViewInit, EventEmitter, Renderer, ElementRef } from "@angular/core";

import {
    FormGroup,
    FormControl,
    Validators
} from "@angular/forms";

import { Article } from "../models";

@Component({
    template: require("./article-edit-form.component.html"),
    styles: [require("./article-edit-form.component.scss")],
    selector: "article-edit-form",
})
export class ArticleEditFormComponent implements AfterViewInit  { 

    constructor(private _renderer: Renderer, private _elementRef: ElementRef) { } 

    public get name(): HTMLElement {
        return this._elementRef.nativeElement.querySelector("#name");
    }

    ngAfterViewInit() {
        this._renderer.invokeElementMethod(this.name, 'focus', []);
    }
	    
    @Input() public article: Article;
    
	@Output() public onSubmit = new EventEmitter();

	@Output() public onCancel = new EventEmitter();

    public form = new FormGroup({
		id: new FormControl("", []),
        name: new FormControl("", [
            Validators.required
        ])
    });
}
