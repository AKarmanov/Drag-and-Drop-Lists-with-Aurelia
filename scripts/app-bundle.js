define('app',["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var App = exports.App = function App() {
		_classCallCheck(this, App);

		this.list = [{
			type: "A",
			id: "itemA.0",
			item: "Upper A",
			draggable: false,
			list: [{
				type: "A",
				item: "From A",
				id: "itemA.1",
				draggable: true,
				list: [{
					type: "A",
					id: "itemA.2",
					item: "in from a",
					draggable: true,
					list: []
				}, {
					type: "A",
					id: "itemA.3",
					item: "in from a",
					draggable: true,
					list: []
				}]
			}]
		}, {
			type: "B",
			id: "itemB.0",
			item: "Upper B",
			draggable: true,
			list: [{
				type: "B",
				item: "From B",
				id: "itemB.1",
				draggable: true
			}]
		}];
		this.list2 = [{
			type: "A",
			id: "itemA.0",
			item: "Upper A",
			draggable: true,
			list: [{
				type: "A",
				item: "From A",
				id: "itemA.1",
				draggable: true,
				list: [{
					type: "A",
					id: "itemA.2",
					item: "in from a",
					draggable: true,
					list: []
				}, {
					type: "A",
					id: "itemA.3",
					item: "in from a",
					draggable: true,
					list: []
				}]
			}]
		}, {
			type: "B",
			id: "itemB.0",
			item: "Upper B",
			draggable: true,
			list: []
		}];
		this.list3 = [{}];

		this.message = 'Drag and Drop Lists with Aurelia';
	};
});
define('dnd-draggable-item',["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.DraggableItem = undefined;

	function _initDefineProp(target, property, descriptor, context) {
		if (!descriptor) return;
		Object.defineProperty(target, property, {
			enumerable: descriptor.enumerable,
			configurable: descriptor.configurable,
			writable: descriptor.writable,
			value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
		});
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
		var desc = {};
		Object['ke' + 'ys'](descriptor).forEach(function (key) {
			desc[key] = descriptor[key];
		});
		desc.enumerable = !!desc.enumerable;
		desc.configurable = !!desc.configurable;

		if ('value' in desc || desc.initializer) {
			desc.writable = true;
		}

		desc = decorators.slice().reverse().reduce(function (desc, decorator) {
			return decorator(target, property, desc) || desc;
		}, desc);

		if (context && desc.initializer !== void 0) {
			desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
			desc.initializer = undefined;
		}

		if (desc.initializer === void 0) {
			Object['define' + 'Property'](target, property, desc);
			desc = null;
		}

		return desc;
	}

	function _initializerWarningHelper(descriptor, context) {
		throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}

	var _dec, _dec2, _dec3, _dec4, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

	var DraggableItem = exports.DraggableItem = (_dec = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec2 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec3 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.oneWay }), _dec4 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.oneWay }), (_class = function () {
		function DraggableItem(element, dndService) {
			_classCallCheck(this, DraggableItem);

			this.effect = "move";
			this.enforceTypeCompatibility = true;

			_initDefineProp(this, "list", _descriptor, this);

			_initDefineProp(this, "item", _descriptor2, this);

			_initDefineProp(this, "index", _descriptor3, this);

			_initDefineProp(this, "topLevelItem", _descriptor4, this);

			this.element = element;
			this.dndService = dndService;
		}

		DraggableItem.prototype.onDrag = function onDrag(event, index) {
			this.onDragCallback(event, index);
		};

		DraggableItem.prototype.onDragStart = function onDragStart(event, index) {
			this.dndService.initiateDragging(this.list, index, this.element, this.topLevelItem);

			event.dataTransfer.setData("text", JSON.stringify(this.list[index]));
			event.dataTransfer.dropEffect = this.effect;
			this.onDragStartCallback(event, index);
			return true;
		};

		DraggableItem.prototype.onDragEnd = function onDragEnd(event, index) {
			this.dndService.cleanUpPlaceHolder();
			this.onDragEndCallback(event, index);
		};

		DraggableItem.prototype.onDragEndCallback = function onDragEndCallback(event, index) {};

		DraggableItem.prototype.onDragStartCallback = function onDragStartCallback(event, index) {};

		DraggableItem.prototype.onDragCallback = function onDragCallback(event, index) {};

		return DraggableItem;
	}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "list", [_dec], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "item", [_dec2], {
		enumerable: true,
		initializer: null
	}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "index", [_dec3], {
		enumerable: true,
		initializer: null
	}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "topLevelItem", [_dec4], {
		enumerable: true,
		initializer: null
	})), _class));
});
define('dnd-drop-target',["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.DropTarget = undefined;

	function _initDefineProp(target, property, descriptor, context) {
		if (!descriptor) return;
		Object.defineProperty(target, property, {
			enumerable: descriptor.enumerable,
			configurable: descriptor.configurable,
			writable: descriptor.writable,
			value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
		});
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
		var desc = {};
		Object['ke' + 'ys'](descriptor).forEach(function (key) {
			desc[key] = descriptor[key];
		});
		desc.enumerable = !!desc.enumerable;
		desc.configurable = !!desc.configurable;

		if ('value' in desc || desc.initializer) {
			desc.writable = true;
		}

		desc = decorators.slice().reverse().reduce(function (desc, decorator) {
			return decorator(target, property, desc) || desc;
		}, desc);

		if (context && desc.initializer !== void 0) {
			desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
			desc.initializer = undefined;
		}

		if (desc.initializer === void 0) {
			Object['define' + 'Property'](target, property, desc);
			desc = null;
		}

		return desc;
	}

	function _initializerWarningHelper(descriptor, context) {
		throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}

	var _dec, _dec2, _desc, _value, _class, _descriptor, _descriptor2;

	var DropTarget = exports.DropTarget = (_dec = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec2 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.oneWay }), (_class = function () {
		function DropTarget(element, dndService) {
			_classCallCheck(this, DropTarget);

			this.effect = "move";
			this.enforceTypeCompatibility = false;

			_initDefineProp(this, "list", _descriptor, this);

			_initDefineProp(this, "listHead", _descriptor2, this);

			this.element = element;
			this.dndService = dndService;
		}

		DropTarget.prototype.onDragOver = function onDragOver(event, index) {
			event.preventDefault();
			event.stopPropagation();
			this.dndService.addPlaceHolder(event, this.element, this.list);
			event.dataTransfer.dropEffect = this.effect;
			this.onDragOverCallback(event, index);
			return false;
		};

		DropTarget.prototype.onDrop = function onDrop(event, index) {
			event.preventDefault();
			event.stopPropagation();

			if (this.enforceTypeCompatibility) {
				if (this.list[index].type !== undefined && this.list[index].type !== data.type) {
					return;
				}
			}

			this.dndService.handleDrop();

			var data = JSON.parse(event.dataTransfer.getData("text"));

			if (this.list[0].type === undefined) {
				this.list.splice(0, 1, data);
				this.onDropCallback(event);
				return;
			}

			var placeholder = this.dndService.getPlaceHolder();
			if (placeholder.nextSibling.tagName === "DND-ITEM") {
				this.list.splice(this.getSiblingPositionInList(placeholder.nextSibling), 0, data);
			} else if (placeholder.previousSibling.tagName === "DND-ITEM") {
				this.list.splice(this.getSiblingPositionInList(placeholder.previousSibling) + 1, 0, data);
			} else {
				console.log("Undefined");
			}

			this.dndService.cleanUpPlaceHolder();
			this.onDropCallback(event);
		};

		DropTarget.prototype.getSiblingPositionInList = function getSiblingPositionInList(sibling) {
			var id = sibling.childNodes[1].id;
			for (var i = 0; i < this.list.length; i++) {
				if (this.list[i].id === id) {
					return i;
				}
			}
			return 0;
		};

		DropTarget.prototype.onDropCallback = function onDropCallback(event, index) {};

		DropTarget.prototype.onDragOverCallback = function onDragOverCallback(event, index) {};

		return DropTarget;
	}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "list", [_dec], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "listHead", [_dec2], {
		enumerable: true,
		initializer: null
	})), _class));
});
define('dnd-item',['exports', 'aurelia-framework', './dnd-draggable-item', './dnd-service'], function (exports, _aureliaFramework, _dndDraggableItem, _dndService) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.DndItem = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _dec, _class;

	var DndItem = exports.DndItem = (_dec = (0, _aureliaFramework.inject)(Element, _dndService.DragAndDropService), _dec(_class = function (_DraggableItem) {
		_inherits(DndItem, _DraggableItem);

		function DndItem(element, dndService) {
			_classCallCheck(this, DndItem);

			return _possibleConstructorReturn(this, _DraggableItem.call(this, element, dndService));
		}

		DndItem.prototype.onDragStartCallback = function onDragStartCallback(event, index) {
			this.element.style.opacity = 0.5;
		};

		DndItem.prototype.onDragEndCallback = function onDragEndCallback(event, index) {
			this.element.style.opacity = 1;
		};

		return DndItem;
	}(_dndDraggableItem.DraggableItem)) || _class);
});
define('dnd-list-impl',['exports', 'aurelia-framework', './dnd-drop-target', './dnd-service'], function (exports, _aureliaFramework, _dndDropTarget, _dndService) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.DndListImpl = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _dec, _class;

	var DndListImpl = exports.DndListImpl = (_dec = (0, _aureliaFramework.inject)(Element, _dndService.DragAndDropService), _dec(_class = function (_DropTarget) {
		_inherits(DndListImpl, _DropTarget);

		function DndListImpl(element, dndService) {
			_classCallCheck(this, DndListImpl);

			return _possibleConstructorReturn(this, _DropTarget.call(this, element, dndService));
		}

		return DndListImpl;
	}(_dndDropTarget.DropTarget)) || _class);
});
define('dnd-list',["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.DragAndDropList = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var DragAndDropList = exports.DragAndDropList = function () {
		function DragAndDropList(element, dndService) {
			_classCallCheck(this, DragAndDropList);

			this.effect = "move";
			this.enforceTypeCompatibility = true;

			this.element = element;
			this.dndService = dndService;
			console.log("Constructed list item");
		}

		DragAndDropList.prototype.onDrag = function onDrag(event) {
			console.log("Dragging ...");
		};

		DragAndDropList.prototype.onDragStart = function onDragStart(event, index) {
			this.dndService.initiateDragging(this.list, index);
			console.log("hello", event.target.id);

			event.dataTransfer.setData("text", JSON.stringify(this.list[index]));
			event.dataTransfer.dropEffect = this.effect;
			return true;
		};

		DragAndDropList.prototype.onDragOver = function onDragOver(event, index) {
			event.preventDefault();
			event.stopPropagation();
			this.dndService.addPlaceHolder(event, this.element);
			event.dataTransfer.dropEffect = this.effect;

			return false;
		};

		DragAndDropList.prototype.onDrop = function onDrop(event, index) {
			event.preventDefault();
			event.stopPropagation();
			index = index === undefined ? 0 : index;
			var data = JSON.parse(event.dataTransfer.getData("text"));

			if (this.enforceTypeCompatibility) {
				if (this.list[index].type !== undefined && this.list[index].type !== data.type) {
					return;
				}
			}
			this.list.splice(index, 0, data);
			this.dndService.handleDrop();
			this.droppedCallback(event);
		};

		DragAndDropList.prototype.droppedCallback = function droppedCallback(event) {};

		return DragAndDropList;
	}();
});
define('dnd-service',['exports', 'aurelia-framework', 'aurelia-pal'], function (exports, _aureliaFramework, _aureliaPal) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.DragAndDropService = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _dec, _class;

	var DragAndDropService = exports.DragAndDropService = (_dec = (0, _aureliaFramework.inject)(_aureliaPal.DOM), _dec(_class = function () {
		function DragAndDropService(DOM) {
			_classCallCheck(this, DragAndDropService);

			this.isDragging = false;
			this.list = [];
			this.index = -1;
			this.placeholder = null;
			this.element = null;
			this.topLevelItem = false;

			this.DOM = DOM;
		}

		DragAndDropService.prototype.initiateDragging = function initiateDragging(list, index, element, topLevelItem) {
			this.list = list;
			this.index = index;
			this.element = element;
			this.topLevelItem = topLevelItem;
		};

		DragAndDropService.prototype.handleDrop = function handleDrop() {
			this.list.splice(this.index, 1);

			if (this.list.length === 0 && this.topLevelItem) {
				this.list.push({});
			}
		};

		DragAndDropService.prototype.createPlaceholder = function createPlaceholder() {
			var element = _aureliaPal.DOM.createElement("div");
			element.className = "dndPlaceholder";
			return element;
		};

		DragAndDropService.prototype.addPlaceHolder = function addPlaceHolder(event, element, list) {
			if (event.target.classList.contains("dndItem")) {
				var listHolder = event.target.parentNode.parentNode;

				if (this.placeholder === null) {
					this.placeholder = this.createPlaceholder();
				}

				if (event.target.isEqualNode(this.element)) {
					return;
				} else if (list[0].type === undefined) {
					listHolder.appendChild(this.placeholder);
				} else {
					if (this.isMouseInFirstHalf(event, event.target.parentNode)) {
						listHolder.insertBefore(this.placeholder, event.target.parentNode);
					} else {
						this.insertAfter(this.placeholder, event.target.parentNode);
					}
				}
			}
		};

		DragAndDropService.prototype.cleanUpPlaceHolder = function cleanUpPlaceHolder() {
			this.placeholder.parentNode.removeChild(this.placeholder);
		};

		DragAndDropService.prototype.getPlaceHolder = function getPlaceHolder() {
			return this.placeholder;
		};

		DragAndDropService.prototype.isMouseInFirstHalf = function isMouseInFirstHalf(event, targetNode) {
			var mousePointer = event.offsetY || event.layerY;
			var targetSize = targetNode.offsetHeight;
			var targetPosition = targetNode.offsetTop;
			targetPosition = 0;
			return mousePointer < targetPosition + targetSize / 2;
		};

		DragAndDropService.prototype.insertAfter = function insertAfter(newNode, referenceNode) {
			referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
		};

		return DragAndDropService;
	}()) || _class);
});
define('dnd-test',['exports', 'aurelia-framework', './dnd-list', './dnd-service'], function (exports, _aureliaFramework, _dndList, _dndService) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.DndTest = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _dec, _class;

	var DndTest = exports.DndTest = (_dec = (0, _aureliaFramework.inject)(Element, _dndService.DragAndDropService), _dec(_class = function (_DragAndDropList) {
		_inherits(DndTest, _DragAndDropList);

		function DndTest(element, dndService) {
			_classCallCheck(this, DndTest);

			var _this = _possibleConstructorReturn(this, _DragAndDropList.call(this, element, dndService));

			_this.enforceTypeCompatibility = false;
			return _this;
		}

		DndTest.prototype.droppedCallback = function droppedCallback(event) {
			console.log("I was dropped!!!");
		};

		return DndTest;
	}(_dndList.DragAndDropList)) || _class);
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n\t<require from=\"./dnd-list-impl\"></require>\n\t\t\n  <h1>${message}</h1>\n  \n  <div style=\"width:30%; float:left; margin-left:20px;\">\n  \t<dnd-list-impl list.bind=\"list\" list-head.bind=\"true\"></dnd-list-impl>\n  </div>\n  \n  <div style=\"width:30%; float:left; margin-left:20px;\">\n  \t<dnd-list-impl list.bind=\"list2\" list-head.bind=\"true\"></dnd-list-impl>\n  </div>\n      \n   <div style=\"width:30%; float:left; margin-left:20px;\">   \n \t <dnd-list-impl list.bind=\"list3\" list-head.bind=\"true\"></dnd-list-impl>\n   </div>\t\t \n</template>\n"; });
define('text!dnd-item.html', ['module'], function(module) { module.exports = "<template>\n\t<div class=\"dndItem ${item.type === undefined ? 'dndEmpty' : ''}\" \n\t\t\tdraggable.bind=\"item.draggable\" \n\t\t\tdragstart.trigger=\"onDragStart($event, index)\"\n\t\t\tdragend.trigger=\"onDragEnd($event, index)\"\n\t\t\tid=\"${item.id}\">\n\t\t\t<span if.bind=\"item.type\">\n\t\t\t\tType : ${item.type},  Id : ${item.id}\n\t\t\t</span>\n\t</div>\n</template>"; });
define('text!dnd-list-impl.html', ['module'], function(module) { module.exports = "<template>\n\t<require from=\"./dnd-item\"></require>\n\t\n\t<div class=\"dndList\" \n\t\trepeat.for=\"l of list\" \n\t\tdrop.trigger=\"onDrop($event, $index)\"\n\t\tdragover.trigger=\"onDragOver($event, $index)\"\n\t\tid=\"${l.id}_${$index}\">\n \t\t<dnd-item list.bind=\"list\" item.bind=\"l\" \n \t\t\t\t  index.bind=\"$index\"\n \t\t\t\t  top-level-item.bind=\"listHead\">\n \t\t</dnd-item>\n \t\t<dnd-list-impl list.bind=\"l.list\" list-head.bind=\"false\"></dnd-list-impl>\n\t</div>\n</template>"; });
define('text!dnd-test.html', ['module'], function(module) { module.exports = "<template>\n\t<require from=\"dnd-item\"></require>\n\t\n\t<div repeat.for=\"l of list\" style=\"border: 1px solid black; margin-left:20px;\" \n\t\tdrop.trigger=\"onDrop($event, $index)\"\n\t\tdragover.trigger=\"onDragOver($event, $index)\"\n\t\tid=\"${l.id}_${$index}\">\n\t\t<!-- \n<div class=\"DNDItem\" \n\t\t\tstyle=\"background-color:rgb(23, 190, 145); height:30px;border:1px solid grey;\"\n\t\t\tdraggable.bind=\"l.draggable\" \n\t\t\tdragstart.trigger=\"onDragStart($event, $index)\"\n\t\t\tid=\"${l.id}\">\n\t\t\t${l.type}~~${l.id}\n\t\t</div>\n -->\n \t\t<dnd-item list.bind=\"list\" item.bind=\"l\"></dnd-item>\n\n<!--  \t\t<dnd-test list.bind=\"l.list\"></dnd-test> -->\n\t</div>\n\t\n\t<div if.bind=\"list.length === 0\" style=\"height:3px;margin-left:20px;\" \n\t\tdrop.trigger=\"onDrop($event, $index)\"\n\t\tdragover.trigger=\"onDragOver($event, $index)\"\n\t\tid=\"${list.id}_empty\">\n\t</div>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map