const pkg = require('./package.json');

const config = {
  productName: "Soundworks Test",
  // keep versionning synchronized with the current repo
  buildVersion: pkg.version,
  appId: 'fr.ircam.ismm.electron-test',
  // icon: './media/icon.png',
  // auto-update config
  publish: {
    provider: 'github',
    owner: 'collective-soundworks',
    repo: 'soundworks-electron-test',
  },
  // list of files or directories that we don't want to include in the binary
  // by default the whole application except the .git directory is copied
  exclude: [
    // 'resources',
    // ...
  ]
}

module.exports = config;
    
