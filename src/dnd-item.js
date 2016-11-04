import {inject, bindable, bindingMode} from 'aurelia-framework';
import {DraggableItem} from "./dnd-draggable-item";
import {DragAndDropService} from './dnd-service';

@inject(Element, DragAndDropService)
export class DndItem extends DraggableItem {
	//Override
	// enforceTypeCompatibility = false;	
	
	constructor(element, dndService) {
		super(element, dndService);
	}
	
	onDragStartCallback(event, index) {
		this.element.style.opacity = 0.5;
	}
	
	onDragEndCallback(event, index) {
		this.element.style.opacity = 1;
	}
}