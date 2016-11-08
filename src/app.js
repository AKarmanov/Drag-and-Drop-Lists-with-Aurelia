export class App {
  constructor() {
    this.message = 'Drag and Drop Lists with Aurelia';
  }
  
  list = [
		{
			type : "A",
			id : "0",
			item : "Upper A",
			draggable : false,
			list: [
				{
					type : "A",
					item : "From A",
					id : "1",
					draggable : true,
					list : [
						{
							type : "A",
							id : "2",
							item : "in from a",
							draggable : true,
							list : []
						},
						{
							type : "A",
							id : "3",
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
		    id : "4",
		    item : "Upper B",
		    draggable : true,
			list : [
				{
					type : "B",
					item : "From B",
					id : "5",
					draggable : true
				}
			]
		}
	];
	
	list2 = [
		{
			type : "A",
			id : "6",
			item : "Upper A",
			draggable : true,
			list: [
				{
					type : "A",
					item : "From A",
					id : "7",
					draggable : true,
					list : [
						{
							type : "A",
							id : "8",
							item : "in from a",
							draggable : true,
							list : []
						},
						{
							type : "A",
							id : "9",
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
		    id : "10",
		    item : "Upper B",
		    draggable : true,
			list : []
		}
	];
	
	list3 = [{}];
	
	toString(list) {
		console.log(JSON.stringify(list));
		return JSON.stringify(list);
	}
}
