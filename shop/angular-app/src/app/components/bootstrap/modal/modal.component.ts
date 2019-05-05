import {Component, ElementRef, OnInit} from '@angular/core';

declare const $;

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    constructor(private element: ElementRef) {
    }

    ngOnInit() {
        const jQueryElement = this.getJQueryElement();
        jQueryElement.find('[modal-tile]').addClass('modal-title');
        jQueryElement.find('[modal-body]').addClass('modal-body');
        jQueryElement.find('[modal-footer]').addClass('modal-footer');
    }

    show() {
        this.getJQueryElement().modal('show');
    }

    hide() {
        this.getJQueryElement().modal('hide');
    }

    private getJQueryElement() {
        const nativeElement = this.element.nativeElement;
        return $(nativeElement.firstChild);
    }
}
