import {bindable, bindingMode} from 'aurelia-framework';

export class DragAndDropList {
	effect = "move";
	enforceTypeCompatibility = true;
	
	// @bindable({ defaultBindingMode: bindingMode.twoWay }) list;
// 	@bindable({ defaultBindingMode: bindingMode.twoWay }) item;
	
	constructor(element, dndService) {
		this.element = element;
		this.dndService = dndService;
		console.log("Constructed list item");
	}
	
	onDrag(event) {
		console.log("Dragging ...");
	}
	
	onDragStart(event, index) {
		this.dndService.initiateDragging(this.list, index);
	   // Add the target element's id to the data transfer object
	   event.dataTransfer.setData("text", JSON.stringify(this.list[index]));
	   event.dataTransfer.dropEffect = this.effect;
		return true;
	}
	
	onDragOver(event, index) {
		event.preventDefault();
		event.stopPropagation();
	   this.dndService.addPlaceHolder(event, this.element);
	   event.dataTransfer.dropEffect = this.effect;
	   //event.dataTransfer.effectAllowed = "none";
	   return false;
	}
	
	onDrop(event, index) {
// 		console.log(event, index);
		event.preventDefault();
		event.stopPropagation();
		index = index === undefined ? 0 : index;
	   var data = JSON.parse(event.dataTransfer.getData("text"));
	   
// 	   console.log("data", data);
	   
	   if (this.enforceTypeCompatibility) {
// 	   		console.log(this.list.type, data.type);
	   		if (this.list[index].type !== undefined && this.list[index].type !== data.type) {
	   			return;
	   		}
	   }
	   this.list.splice(index, 0, data);
	   this.dndService.handleDrop();
	   this.droppedCallback(event);
	}
	
	droppedCallback(event) {}
	
}