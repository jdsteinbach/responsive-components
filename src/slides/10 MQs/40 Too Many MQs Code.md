```css
.widget {
  /* narrow 1col layout: narrow version CSS */
}
@media (min-width: 480px) and (max-width: 959px) {
  .widget {
    /* wide 1col layout: wide version CSS */
  }
}
@media (min-width: 960px) and (max-width: 1199px) {
  .widget {
    /* narrow 2col layout: narrow version CSS */
  }
}
@media (min-width: 1200px) {
  .widget {
    /* wide 2col layout: wide version CSS */
  }
}
```
<div class="fragment noper">
  <svg role="presentation" aria-label="Nope" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16" focusable="false">
    <circle stroke="red" stroke-width="2" fill="none" cy="8" cx="8" r="7"/>
    <path stroke="red" stroke-width="2" fill="none" d="M13 3L3 13"/>
  </svg>
</div>
