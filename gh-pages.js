var ghpages = require('gh-pages');

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/SketchTurnerrr/space-tourism-svelte', // Update to point to your repository
    user: {
      name: 'Narek', // update to use your name
      email: 'Email', // Update to use your email
    },
  },
  () => {
    console.log('Deploy Complete!');
  }
);
