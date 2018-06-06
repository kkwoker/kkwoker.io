
Run this to watch for posts changes
```
yarn run-when-changed --watch src/posts/2018-04-11_algorithms-cheat-sheet.md --exec "node scripts/convertMarkdownToJSON.js"
```

## Deployment

```
$ yarn run build
$ s3cmd push
```
