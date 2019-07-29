module.exports = {
//  title: 'aimlabs ui',
  description: 'User Interface',
  lastUpdated: 'Last Updated',
  base: '/aimlabs-ui/',
  themeConfig: {
    logo: '/img/logo.png',
    displayAllHeaders: true,
    nav: [
      { text: 'HOME', link: '/' },
      {
        text: 'Documentation',
        link: '/documentation/',
        type: 'links',
        items : [
          {text: 'Introduction', link: '/documentation/'},
          {text: 'Geting Started', link: '/documentation/start'}
        ]
      },

      { text: 'Github', link: 'https://github.com/aimlabs/aimlabs-ui' },
    ],
    sidebar: 'auto'
  }
}
