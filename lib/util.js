(function() {
  var addVec, angleBetween, clamp, distSquared, distanceFrom, dot, drawOutlinedText, frontBack, leftRight, length, normalize, randomColor, subtractVec;
  length = function(vec) {
    return Math.sqrt(vec.x * vec.x + vec.y * vec.y);
  };
  normalize = function(vec) {
    var l;
    l = length(vec);
    return {
      x: vec.x / l,
      y: vec.y / l
    };
  };
  addVec = function(a, b) {
    return {
      x: a.x + b.x,
      y: a.y + b.y
    };
  };
  subtractVec = function(a, b) {
    return {
      x: a.x - b.x,
      y: a.y - b.y
    };
  };
  dot = function(a, b) {
    return a.x * b.x + a.y * b.y;
  };
  angleBetween = function(a, b) {
    var na, nb;
    na = normalize(a);
    nb = normalize(b);
    return Math.acos(dot(na, nb));
  };
  distanceFrom = function(a, b) {
    return length(subtractVec(b, a));
  };
  distSquared = function(a, b) {
    var xdiff, ydiff;
    xdiff = b.x - a.x;
    ydiff = b.y - a.y;
    return xdiff * xdiff + ydiff * ydiff;
  };
  clamp = function(x, minval, maxval) {
    return Math.min(maxval, Math.max(x, minval));
  };
  leftRight = function(a, b) {
    return a.x * b.y - a.y * b.x;
  };
  frontBack = function(a, b) {
    return a.x * b.x + a.y * b.y;
  };
  randomColor = function() {
    return 'rgba(' + Math.floor(Math.random() * 155 + 100) + ',' + Math.floor(Math.random() * 155 + 100) + ',' + Math.floor(Math.random() * 155 + 100) + ',255)';
  };
  drawOutlinedText = function(context, text, x, y) {
    context.shadowBlur = 1;
    context.shadowColor = "#000";
    context.fillStyle = "#000";
    context.fillText(text, x - 1, y);
    context.fillText(text, x + 1, y);
    context.fillText(text, x, y - 1);
    context.fillText(text, x, y + 1);
    context.fillStyle = "#fff";
    context.fillText(text, x, y);
    return context.shadowBlur = 0;
  };
  module.exports = {
    length: length,
    normalize: normalize,
    addVec: addVec,
    subtractVec: subtractVec,
    dot: dot,
    angleBetween: angleBetween,
    distanceFrom: distanceFrom,
    distSquared: distSquared,
    clamp: clamp,
    leftRight: leftRight,
    frontBack: frontBack,
    randomColor: randomColor,
    drawOutlinedText: drawOutlinedText
  };
}).call(this);
