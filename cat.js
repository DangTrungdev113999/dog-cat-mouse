function Cat(name) {
	this.name = name;
	this.stomach = [];
}

Cat.prototype.eat = function() {
	this.stomach.push(mouse);
}

module.exports = Cat;