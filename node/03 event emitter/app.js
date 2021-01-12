const events = require("events"); //require the events to have access to the EventEmitter class

class Person extends events.EventEmitter{ //inherit the EventEmitter class
	constructor(name){
		super(); //load the EventEmitter constructor
		this.name = name;
	}

}

let tom = new Person("Tom");

tom.on("speak", (msg) => console.log(msg)); //create a custom event. syntax object.on("eventName", callback())



tom.emit("speak", "I hear you!"); //emit means invoke the event
