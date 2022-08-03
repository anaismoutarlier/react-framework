# COMMON REACT FRAMEWORK STRUCTURES

## 1. Styles integrated with components, contexts/hooks apart
###   src
  - _pages/screens_
      - major pages
        - unique components (specific to one view, not to be reused outside of this)
        - CSS
        - index.js (export pages and components in case of need)
  - _components_ 
      - reusable component folder
        - component file
        - CSS
        - index.js (export component from folder)
      - index.js (optional) export all reusable components from components folder
  - _reducers_
      - Redux store reducers (**.reducer.js)
      - index.js (export all reducers as one)
  - _hooks_
      - hook files (.js) (usually individual files, no need for index.js)
  - _styles_
      - global styles (index.css or globals.css)
      - global JS styles
      - color scheme
  - _data/static_
      - js files with static data
  - _context_
      - context config files

## 2. Styles and hooks by theme/component
###   src
  - _pages/screens_
      - major pages - page JS files
  - _components_
      - reusable components - component JS files
  - _reducers_
      - Redux store reducers (**.reducer.js)
      - index.js (export all reducers as one)
  - _styles_
      - global styles (index.css or globals.css)
      - global JS styles
      - color scheme
      - component CSS files (e.g. Home.js => Home.css)
  - _data/static_
      - js files with static data
  - _context/hooks_
      - functionality
        - hook file (.js)
        - context file (.js)
        - index.js (export hook and/or context)