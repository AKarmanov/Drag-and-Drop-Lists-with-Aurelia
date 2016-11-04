import {bindable, bindingMode} from 'aurelia-framework';

export class DropTarget {
	effect = "move";
	enforceTypeCompatibility = false;
	
	@bindable({ defaultBindingMode: bindingMode.twoWay }) list;
	@bindable({ defaultBindingMode: bindingMode.oneWay }) listHead;
	
	constructor(element, dndService) {
		this.element = element;
		this.dndService = dndService;
	}
	
	onDragOver(event, index) {
		event.preventDefault();
		event.stopPropagation();
	   this.dndService.addPlaceHolder(event, this.element, this.list);
	   event.dataTransfer.dropEffect = this.effect;
	   this.onDragOverCallback(event, index);
	   return false;
	}
	
	onDrop(event, index) {
		event.preventDefault();
		event.stopPropagation();
		
		if (this.enforceTypeCompatibility) {
	   		if (this.list[index].type !== undefined && this.list[index].type !== data.type) {
	   			return;
	   		}
	   	}
	   	   	
	   	//Remove item from list of origin
	   	this.dndService.handleDrop();
	   	
		var data = JSON.parse(event.dataTransfer.getData("text"));
		
		//Clear list of empty object and insert new item in case : [{}]
		//TODO fix this.list[0] is undefined error
		//To reproduce take itemA.1 and drag it into itself (may redefine as slightly bigger problem)
		//It is undefined because drop was handled and list got removed
	   	if (this.list[0].type === undefined) {
	   		this.list.splice(0, 1, data);
	   		this.onDropCallback(event);
	   		return;
	   	} 
	   	
		var placeholder = this.dndService.getPlaceHolder();
		if (placeholder.nextSibling.tagName === "DND-ITEM") {
			this.list.splice(this.getSiblingPositionInList(placeholder.nextSibling), 0, data);
		}
		else if (placeholder.previousSibling.tagName === "DND-ITEM") {
			this.list.splice(this.getSiblingPositionInList(placeholder.previousSibling) + 1, 0, data);
		}
		else {
			console.log("Undefined");
		}
		
	   this.dndService.cleanUpPlaceHolder();
	   this.onDropCallback(event);
	}
	
	getSiblingPositionInList(sibling) {
		var id = sibling.childNodes[1].id;
		for (var i = 0; i < this.list.length; i++) {
			if (this.list[i].id === id) {
				return i;
			}
		}
		return 0;
	}
	
	onDropCallback(event, index) {}
	
	onDragOverCallback(event, index) {}
}