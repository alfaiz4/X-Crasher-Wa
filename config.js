/*
Script X-Crasher
By DanuZz

Site: https://www.movanest.xyz
*/

//~~~~~Setting Global~~~~~//

global.session_id = "" //Input your session id like deploy with railway or heroku. | If you deploy with pterodactyl panel don't add session id.
global.prefix = '.' // bot prefix
global.owner = ["6283144880038"] // Add Your Owner number
global.bot = "6285810132837" // Add Your Bot number
global.namabot = "u bitch" // Add Your Bot name
global.namaown = "hahaha" // Add Your Bot owner name
global.workType = "public" // public, private, groups, inbox
global.anticall = true // Anti Call Feature

//~~~~~Status Updated~~~~~//
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
