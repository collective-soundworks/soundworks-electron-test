const pkg = require('./package.json');

const config = {
  // do not touch these ones
  // keep versionning synchronized with the current repo
  name: pkg.name,
  buildVersion: pkg.version,
  // product infos
  productName: "Soundworks Test",
  author: "Ircam ISMM",
  appId: 'fr.ircam.ismm.electron-test',
  // auto-update config
  publish: {
    provider: 'github',
    owner: 'collective-soundworks',
    repo: 'soundworks-electron-test',
  },
  // uncomment to use app specific icon
  // icon: './media/icon.png',
  // list of files or directories that we don't want to include in the binary
  // by default the whole application except the .git directory is copied
  exclude: [
    // 'resources',
    // ...
  ]
}

module.exports = config;
    
