import {bindable, bindingMode} from 'aurelia-framework';

export class DraggableItem {
	effect = "move";
	enforceTypeCompatibility = true;
	
	@bindable({ defaultBindingMode: bindingMode.twoWay }) list;
	@bindable({ defaultBindingMode: bindingMode.twoWay }) item;
	@bindable({ defaultBindingMode: bindingMode.oneWay }) index;
	@bindable({ defaultBindingMode: bindingMode.oneWay }) topLevelItem;
	
	constructor(element, dndService) {
		this.element = element;
		this.dndService = dndService;
	}
	
	onDrag(event, index) {
		this.onDragCallback(event, index);
	}
	
	onDragStart(event, index) {
		this.dndService.initiateDragging(
			this.list, 
			index, 
			this.element,
			this.topLevelItem);
	   // Add the target element's id to the data transfer object
	   event.dataTransfer.setData("text", JSON.stringify(this.list[index]));
	   event.dataTransfer.dropEffect = this.effect;
	   this.onDragStartCallback(event, index);
		return true;
	}
	
	onDragEnd(event, index) {
		this.dndService.cleanUpPlaceHolder();
		this.onDragEndCallback(event, index);
	}
	
	onDragEndCallback(event, index) {}
	
	onDragStartCallback(event, index) {}
	
	onDragCallback(event, index) {}
}