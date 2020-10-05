import { Component, ElementRef } from '@angular/core';

const BUTTON_HOST_ATTRIBUTES = [
	'dia-button',
	'dia-flat-button',
	'dia-icon-button',
	'dia-raised-button',
	'dia-stroked-button'
];

class ButtonBase {
	constructor(public _elementRef: ElementRef) {}
}

@Component({
	selector: `button[dia-button], button[dia-raised-button], button[dia-flat-button],
	button[dia-stroked-button], button[dia-icon-button]`,
	templateUrl: './button.component.html',
	styleUrls: [ './button.component.scss' ],
	inputs: [ 'color' ]
})
export class ButtonComponent extends ButtonBase {
	readonly isIconButton: boolean = this._hasHostAttributes('dia-icon-button');

	constructor(elementRef: ElementRef) {
		super(elementRef);

		for (const attr of BUTTON_HOST_ATTRIBUTES) {
			if (this._hasHostAttributes(attr)) {
				(this._getHostElement() as HTMLElement).classList.add(attr);
			}
		}

		elementRef.nativeElement.classList.add('dia-button-base');
	}

	_getHostElement() {
		return this._elementRef.nativeElement;
	}

	_hasHostAttributes(...attributes: string[]) {
		return attributes.some((attribute) =>
			this._getHostElement().hasAttribute(attribute)
		);
	}
}
