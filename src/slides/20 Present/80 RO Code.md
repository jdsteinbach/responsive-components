```js
const ro = new ResizeObserver(entries => {
  for (let e of entries) {
    const size = Array.isArray(e.borderBoxSize)
      ? e.borderBoxSize[0]
      : e.borderBoxSize;
    const action = (size.inlineSize >= 480)
      ? 'add'
      : 'remove';
    e.target.classList[action]('wide');
  }
});
ro.observe(document.getElementById('box'));
```
