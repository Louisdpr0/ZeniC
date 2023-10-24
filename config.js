global.owner = ['6289653898291']  
global.mods = ['6289653898291'] 
global.prems = ['6289653898291']
global.nameowner = 'KSR CLOUD'
global.numberowner = '6289653898291' 
global.mail = 'bot1@ksrcloud.dev' 
global.gc = '-'
global.instagram = 'https://instagram.com/ksrcloud/'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'ZeniBot'
global.author = 'KSR CLOUD'

//INI WAJIB DI ISI!//
global.btc = 'F4hs2Omt' 
//Daftar terlebih dahulu https://api.botcahx.live

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'F4hs2Omt'
//Daftar https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'F4hs2Omt' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
