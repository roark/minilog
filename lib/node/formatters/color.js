var Transform = require('../../common/transform.js'),
    style = require('./util.js').style;

function FormatColor() {}

Transform.mixin(FormatColor);

FormatColor.prototype.write = function(name, level, args) {
  var colors = { autopsy: 'green', debug: 'blue', info: 'cyan', warn: 'yellow', error: 'red', critical: 'magenta' };
  function pad(s) { return (s.toString().length == 4? ' '+s : s); }
  this.emit('item', (name ? name + ' ' : '')
          + (level ? style('- ' + pad(level.toUpperCase()) + ' -', colors[level]) + ' ' : '')
          + args.join(' '));
};

module.exports = FormatColor;
