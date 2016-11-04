import {bindable, bindingMode, inject} from 'aurelia-framework';
import {DropTarget} from "./dnd-drop-target";
import {DragAndDropService} from './dnd-service';

@inject(Element, DragAndDropService)
export class DndListImpl extends DropTarget {	
	constructor(element, dndService) {
		super(element, dndService);
	}
	
}