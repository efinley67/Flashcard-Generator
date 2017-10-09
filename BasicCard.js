var BasicCard = function(front, back) {
    this.front = front;
    this.back = back;
};

BasicCard.prototype.displayCard = function() {
  console.log("Front: " + this.front + "Back: " + this.back);
};

BasicCard.prototype.displayFront = function() {
  console.log(this.front);
}

module.exports = BasicCard;
