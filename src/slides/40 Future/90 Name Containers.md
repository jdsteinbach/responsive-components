```css
.page-content {
  container-type: inline-size;
  container-name: main;
}
.page-sidebar {
  container-type: inline-size;
  container-name: sidebar;
}
@container main (min-width: 480px) {
  .widget { /* wide `main` container */ }
}
@container sidebar (min-width: 480px) {
  .widget { /* wide `sidebar` container */ }
}
```
