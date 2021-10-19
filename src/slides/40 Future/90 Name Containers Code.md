```css
.page-content {
  container-name: main;
}
.page-content__gallery {
  container-name: gallery;
}
@container main (min-width: 480px) {
  .widget { /* wide `main` container */ }
}
@container gallery (min-width: 480px) {
  .widget { /* wide `gallery` container */ }
}
```
