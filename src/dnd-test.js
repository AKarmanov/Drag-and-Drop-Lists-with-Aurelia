import {inject} from 'aurelia-framework';
import {DragAndDropList} from "./dnd-list";
import {DragAndDropService} from './dnd-service';

@inject(Element, DragAndDropService)
export class DndTest extends DragAndDropList {
	//Override
	enforceTypeCompatibility = false;
		
	constructor(element, dndService) {
		super(element, dndService);
	}
	
	droppedCallback(event) {
		console.log("I was dropped!!!");
	}
}