structure:

1. Styles integrated with components, contexts/hooks apart
    src
        - pages
            - major pages
        - unique components (specific to one view, not to be reused outside of this)
            - CSS
        - index.js (export pages and components in case of need)
        - components
            - reusable components
                - component file
                - CSS
      --index.js (export component from folder)
    --index.js (optional) export all reusable components from components folder
  --reducers
    --Redux store reducers (**.reducer.js)
    --index.js (export all reducers as one)
  --hooks
    --hook files (.js) (usually individual files, no need for index.js)
  --styles
    --global styles (index.css or globals.css)
    --global JS styles
    --color scheme
  --data/static
    --js files with static data
  --context
    --context config files

2. Styles and hooks by theme/component
src
  --pages
    --major pages - page JS files
  --components
    --reusable components - component JS files
  --reducers
    --Redux store reducers (**.reducer.js)
    --index.js (export all reducers as one)
  --styles
    --global styles (index.css or globals.css)
    --global JS styles
    --color scheme
    --component CSS files (e.g. Home.js => Home.css)
  --data/static
    --js files with static data
  --context/hooks
    --context / hooks
      functionality
        --hook file (.js)
        --context file (.js)
        index.js (export hook and context)