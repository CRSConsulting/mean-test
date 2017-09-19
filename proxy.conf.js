const PROXY_CONFIG = [
  {
      context: [
          '/heroes',
          '/hero',
          '/mobile'
      ],
      target: 'http://localhost:3000/api',
      secure: false
  }
]

module.exports = PROXY_CONFIG;