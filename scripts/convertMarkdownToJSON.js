const paths = require('../config/paths');
const fs = require('fs');
const fm = require('front-matter');
const markdown = require("markdown").markdown;

fs.readdir(paths.postsDir, (err, files) => {
  const postsList = [];
  files.forEach(file => {
    const content = fs.readFileSync(paths.postsDir + '/' + file, 'utf-8');

    const metadata = fm(content);
    const html = markdown.toHTML(metadata.body);

    const post = Object.assign(
      metadata.attributes,
      { html }
    );

    postsList.push(post);

  })

  fs.writeFileSync(paths.appSrc + '/' + 'assets/posts.json', JSON.stringify(postsList, null, 2));
});
