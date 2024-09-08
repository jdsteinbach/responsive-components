```css
.page-content {
  container-name: main;
}
.page-content__gallery {
  container-name: gallery;
}
@container main size(min-width: 480px) {
  .widget { /* wide `main` container */ }
}
@container gallery size(min-width: 480px) {
  .widget { /* wide `gallery` container */ }
}
```
