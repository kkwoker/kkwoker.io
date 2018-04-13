const path = require('path');
const paths = require('../config/paths');
const fs = require('fs');
const fm = require('front-matter');
const marked = require('marked');

fs.readdir(paths.postsDir, (err, files) => {
  const postsList = [];
  const mdFiles = files.filter(file => path.extname(file) === '.md');
  mdFiles.forEach(file => {
    console.log('Converting file', file)
    const content = fs.readFileSync(paths.postsDir + '/' + file, 'utf-8');

    const metadata = fm(content);
    const html = marked(metadata.body);

    const post = Object.assign(
      metadata.attributes,
      { html }
    );

    postsList.push(post);

  })

  fs.writeFileSync(paths.appSrc + '/' + 'assets/posts.json', JSON.stringify(postsList, null, 2));
});
