export class App {
  constructor() {
    this.message = 'Drag and Drop Lists with Aurelia';
  }
  
  list = [
		{
			type : "A",
			id : "itemA.0",
			item : "Upper A",
			draggable : false,
			list: [
				{
					type : "A",
					item : "From A",
					id : "itemA.1",
					draggable : true,
					list : [
						{
							type : "A",
							id : "itemA.2",
							item : "in from a",
							draggable : true,
							list : []
						},
						{
							type : "A",
							id : "itemA.3",
							item : "in from a",
							draggable : true,
							list : []
						}
					]
				}
			]	
		},
		{
			type : "B",
		    id : "itemB.0",
		    item : "Upper B",
		    draggable : true,
			list : [
				{
					type : "B",
					item : "From B",
					id : "itemB.1",
					draggable : true
				}
			]
		}
	];
	
	list2 = [
		{
			type : "A",
			id : "itemA.0",
			item : "Upper A",
			draggable : true,
			list: [
				{
					type : "A",
					item : "From A",
					id : "itemA.1",
					draggable : true,
					list : [
						{
							type : "A",
							id : "itemA.2",
							item : "in from a",
							draggable : true,
							list : []
						},
						{
							type : "A",
							id : "itemA.3",
							item : "in from a",
							draggable : true,
							list : []
						}
					]
				}
			]	
		},
		{
			type : "B",
		    id : "itemB.0",
		    item : "Upper B",
		    draggable : true,
			list : []
		}
	];
	
	list3 = [{}];
}
