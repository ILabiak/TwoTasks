ctx.prototype.__iterate = function (iterationObj, action) {
  var keys = Object.keys(iterationObj),
    i,
    key;
  for (i = 0; i < keys.length; i++) {
    key = keys[i];
    action(key);
  }
};

ctx.prototype.__applyStyleState = function (styleState) {
  this.__iterate(styleState, (key) => {
    this[key] = styleState[key];
  });
};

// ctx.prototype.__applyStyleState = function (styleState) {
//   var keys = Object.keys(styleState),
//     i,
//     key;
//   for (i = 0; i < keys.length; i++) {
//     key = keys[i];
//     this[key] = styleState[key];
//   }
// };

ctx.prototype.__setDefaultStyles = function () {
  this.__iterate(STYLES, (key) => {
    this[key] = STYLES[key].canvas;
  });
};

// ctx.prototype.__setDefaultStyles = function () {
//   var keys = Object.keys(STYLES),
//     i,
//     key; // keys of object - object selection
//   for (i = 0; i < keys.length; i++) {
//     key = keys[i];
//     this[key] = STYLES[key].canvas; // field selection
//   }
// };

ctx.prototype.__getStyleState = function () {
  var styleState = {};
  this.__iterate(STYLES, (key) => {
    styleState[key] = this[key];
  });
  return styleState;
};

// ctx.prototype.__getStyleState = function () {
//   var i,
//     styleState = {},
//     keys = Object.keys(STYLES),
//     key;
//   for (i = 0; i < keys.length; i++) {
//     key = keys[i];
//     styleState[key] = this[key];
//   }
//   return styleState;
// };
