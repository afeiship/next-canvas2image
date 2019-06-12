# next-canvas2image
> Save canvas to image

## installation
```bash
npm install -S afeiship/next-canvas2image --registry=https://registry.npm.taobao.org
```

## apis
| api  | params               | description      |
| ---- | -------------------- | ---------------- |
| save | (inCanvas,inOptions) | Save to png file |

## usage
```js
import NxCanvas2image from 'next-canvas2image';

const canvas = document.getElementById('thecanvas');
const btnDown = document.getElementById('btn-down');
function draw() {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(125, 46, 138, 0.5)';
  ctx.fillRect(25, 25, 100, 100);
  ctx.fillStyle = 'rgba( 0, 146, 38, 0.5)';
  ctx.fillRect(58, 74, 125, 100);
}

draw();

btnDown.onclick = function() {
  console.log('download!');
  NxCanvas2image.save(canvas);
};
```

## resources
- https://stackoverflow.com/questions/48054723/saving-canvas-as-blob-and-then-blob-as-file
