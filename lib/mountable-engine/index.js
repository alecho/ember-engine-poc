/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = {
  name: 'mountable-engine',

  isDevelopingAddon: function() {
    return true;
  }
};
