import {inject} from 'aurelia-framework';
import {DOM} from 'aurelia-pal';

@inject(DOM)
export class DragAndDropService {
	isDragging = false;
	list = []; //List reference from which the element is dragged
	index = -1;
	placeholder = null;
	element = null;
	topLevelItem = false;
	
	constructor(DOM) {
		this.DOM = DOM;
	}
	
	initiateDragging(list, index, element, topLevelItem) {
		this.list = list;
		this.index = index;
		this.element = element;
		this.topLevelItem = topLevelItem;
	}
	
	handleDrop(targetList, targetIndex) {
		if (this.canDrop(targetList, targetIndex)) {
			this.list.splice(this.index, 1);
			//Return list to original empty state : [{}] for top level items only
			if (this.list.length === 0 && this.topLevelItem) {
				this.list.push({});
			}
			return true;
		}
		return false;
	}
	
	createPlaceholder() {
		var element = DOM.createElement("div");
		element.className = "dndPlaceholder";
		return element;
	}
	
	addPlaceHolder(event, element, list) {
		if (event.target.classList.contains("dndItem")) {
			var listHolder = event.target.parentNode.parentNode;
			
			if (this.placeholder === null) {
				this.placeholder = this.createPlaceholder();
			}
			
			if (event.target.isEqualNode(this.element)) {
				return;
			}
			else if (list[0].type === undefined) { //Empty list case : [{}]
				listHolder.appendChild(this.placeholder);
			}
			else {
				if (this.isMouseInFirstHalf(event, event.target.parentNode)) {
					listHolder.insertBefore(this.placeholder, event.target.parentNode);
				}
				else {
					this.insertAfter(this.placeholder, event.target.parentNode);	
				}
			}
		}
	}
	
	cleanUpPlaceHolder() {
		if (this.placeholder !== null && this.placeholder.parentNode !== null) {
			this.placeholder.parentNode.removeChild(this.placeholder);
		}
	}
	
	getPlaceHolder() {
		return this.placeholder;
	}
	
	isMouseInFirstHalf(event, targetNode) {
        var mousePointer = event.offsetY || event.layerY;
        var targetSize = targetNode.offsetHeight;
        var targetPosition = targetNode.offsetTop;
        targetPosition = 0;
        return mousePointer < targetPosition + targetSize / 2;
    }
    
    insertAfter(newNode, referenceNode) {
    	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    
    //Check if first items id in targetList exists in doner list i. e. if targetList in doner list
    canDrop(targetList, targetIndex) {
    	if (this.list === targetList && this.index !== targetIndex) {
    		return true;
    	}
    	
    	if (targetList[0] && targetList[0].id) {
    		return !this.idExistsInBranch(this.list[this.index], targetList[0].id);
    	}
    	return true; 
    }
    
    idExistsInBranch(item, id) {
    	if (item.id === id) {
    			return true;
    	}
    	for (var i = 0; i < item.list.length; i++) {
    		var l = item.list[i];
    		return this.idExistsInBranch(item.list[i], id);
    	}
    	return false;
    }
}