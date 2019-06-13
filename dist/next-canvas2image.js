/*!
 * name: next-canvas2image
 * url: https://github.com/afeiship/next-canvas2image
 * version: 1.0.0
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var NxObjectUrl = nx.ObjectUrl || require('next-object-url');
  var DEFAULT_OPTIONS = { filename: 'untitled.png' };

  var NxCanvas2image = nx.declare('nx.Canvas2image', {
    statics: {
      save: function(inCanvas, inOptions) {
        var anchorEl = document.createElement('a');
        var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        var docBody = document.body;
        return new Promise(function(resolve, reject) {
          inCanvas.toBlob(function(blob) {
            var blobRes = NxObjectUrl.create(blob);

            // create download link && download:
            anchorEl.href = blobRes.url;
            anchorEl.download = options.filename;
            docBody.appendChild(anchorEl);
            anchorEl.click();

            // destroy res:
            docBody.removeChild(anchorEl);
            blobRes.destroy();

            resolve();
          });
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxCanvas2image;
  }
})();
