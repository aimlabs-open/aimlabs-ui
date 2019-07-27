module.exports = {
  title: 'AIMLABS UI Library',
  description: 'Just trying out',
  themeConfig: {
    logo: '/assets/img/logo.png',
    displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}
