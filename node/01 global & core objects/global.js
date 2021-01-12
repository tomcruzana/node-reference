https://stackoverflow.com/questions/43627622/what-is-the-global-object-in-nodejs

While in browsers the global scope is the window object, in nodeJS the global scope of a module is the module itself, so when you define a variable in the global scope of your nodeJS module, it will be local to this module.

You can read more about it in the NodeJS documentation where it says:

global

<Object> The global namespace object.

In browsers, the top-level scope is the global scope. That means that in browsers if you're in the global scope var something will define a global variable. In Node.js this is different. The top-level scope is not the global scope; var something inside an Node.js module will be local to that module.

And in your code when you write:

console.log(this) in an empty js file(module) it will print an empty object {} referring to your empty module.
console.log(this); inside a self invoking function, this will point to the global nodeJS scope object which contains all NodeJS common properties and methods such as require(), module, exports, console...
console.log(this) with strict mode inside a self invoking function it will print undefined as a self invoked function doesn't have a default local scope object in Strict mode.