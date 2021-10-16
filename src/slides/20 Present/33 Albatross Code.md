```css
.parent {
  --container-width: 720px;

  display: flex;
  flex-wrap: wrap;
}

.child {
  flex-grow: 1;
  flex-basis: calc((var(--container-width) - 100%) * 999);
}
```
