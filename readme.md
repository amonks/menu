# example menubar app

## instructions

- run `npm install`
- run `npm run build` to make Example.app
- run `npm start` to run app from CLI without building Example.app

## things i've learned so far

### generally don't fuck with main.js

I just spent an embarassingly long time tryna do DOM stuff (load jquery) in main.js. main.js isn't associated with the window (like a normal in-browser js file is), so it doesn't have a `document` or `window` object.

Use `<script>` tags in index.html instead (src is obv good), just like in every other html document ever.

main.js is for electron-specific native stuff (like quitting the app)

### gotta delete the built app before recompiling

npm gives me an error when I try `npm run build` without deleting the old Example.app

    rm -r Example.app/; npm run build; open Example.app/

### [ipc](https://github.com/atom/electron/blob/master/docs/api/ipc-main-process.md) is for sending stuff back to main.js

