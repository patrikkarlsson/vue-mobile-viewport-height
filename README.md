
# vue-mobile-viewport-height

> vue-viewport-mobile is a Vue.js plugin to calculate viewport height for mobile browsers based on https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

### Installation

```js
npm install vue-mobile-viewport-height
```

### Usage
```js
import Vue from 'vue'
import debounce from 'lodash/debounce'
import MobileViewportHeight from 'vue-mobile-viewport-height'

Vue.use(
  MobileViewportHeight({
    Vue, // required
    debounce, // optional debounce function
  })
)
```

```scss

@import "~vue-mobile-viewport-height/src/mobile-viewport-height.scss"

.app {
  @include mobile-viewport-height()
}
```