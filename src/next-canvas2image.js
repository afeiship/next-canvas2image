(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var NxObjectUrl = nx.ObjectUrl || require('next-object-url');
  var DEFAULT_OPTIONS = { filename: 'untitled.png' };

  var NxCanvas2image = nx.declare('nx.Canvas2image', {
    statics: {
      toPng: function(inCanvas, inOptions) {
        var anchorEl = document.createElement('a');
        var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        inCanvas.toBlob(function(blob) {
          anchorEl.href = NxObjectUrl.create(blob);
          anchorEl.download = options.filename;
          document.body.appendChild(anchorEl);
          anchorEl.click();
          document.body.removeChild(anchorEl);
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxCanvas2image;
  }
})();
