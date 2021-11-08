var ghpages = require('gh-pages');

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'main',
    repo: 'https://github.com/SketchTurnerrr/space-tourism-svelte', // Update to point to your repository
    user: {
      name: 'Narek',
      email: 'Email',
    },
    dotfiles: true,
  },
  () => {
    console.log('Deploy Complete!');
  }
);
