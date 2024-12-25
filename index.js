//
// ░██████╗██╗░░░██╗██╗░░██╗░█████╗░░██████╗░░░░░░███╗░░░███╗██████╗░░░░░░░██╗░░░██╗░█████╗░
// ██╔════╝██║░░░██║██║░░██║██╔══██╗██╔════╝░░░░░░████╗░████║██╔══██╗░░░░░░██║░░░██║██╔══██╗
// ╚█████╗░██║░░░██║███████║███████║╚█████╗░█████╗██╔████╔██║██║░░██║█████╗╚██╗░██╔╝╚██████║
// ░╚═══██╗██║░░░██║██╔══██║██╔══██║░╚═══██╗╚════╝██║╚██╔╝██║██║░░██║╚════╝░╚████╔╝░░╚═══██║
// ██████╔╝╚██████╔╝██║░░██║██║░░██║██████╔╝░░░░░░██║░╚═╝░██║██████╔╝░░░░░░░░╚██╔╝░░░█████╔╝
// ╚═════╝░░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░░░░░░░╚═╝░░░░░╚═╝╚═════╝░░░░░░░░░░╚═╝░░░░╚════╝░


// * Project name - SUHAS-MD-V9.
// * Author - Suhas Pathsindu.
// * Team - 🇦🇴★ ͟͞  ͟͞ ̶❮ᓩＣ͔́ʏʙ͕֝́́ᴇʀ〴Ｄ֝֩ʀᴀ֞ͨͬͥɢᴏɴךＯ͕ͩꜰ͑́ꜰɪᴄ͚ͫɪᴀֹ֣֝ʟ❯ ͟͞ ̶ ͟͞★🇦🇴 
// * Version - 9.0.0

// World Best & Powerfull WhatsApp User Bot in Sri Lanka.
// Don't Copy My Codes. :(












const {
default: makeWASocket,
useMultiFileAuthState,
DisconnectReason,
jidNormalizedUser,
getContentType,
fetchLatestBaileysVersion,
Browsers
} = require('@whiskeysockets/baileys')

const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson } = require('./lib/functions')
const fs = require('fs')
const P = require('pino')
const config = require('./config')
const qrcode = require('qrcode-terminal')
const util = require('util')
const { sms,downloadMediaMessage } = require('./lib/msg')
const axios = require('axios')
const { File } = require('megajs')
const prefix = '.'

const ownerNumber = ['94712049951']

//===================SESSION-AUTH============================
if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
if(!config.SESSION_ID) return console.log('WILLIS_MD_2024_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUl3bHZoUmJXN29oOXUyR3gwSjh6M0lSSm9ZMkFiVEVIVEZNUDhhWGxXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3BjSmtaQmFLdUN0ZHJ6TTIvT3Yva2xDQTU4cER1ZXJVVE13OFFJQnVEcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSEVKRS9FSFluUzgxZHl6cXB2bUd6aXA3dmNkTnYySFg4ckdZTmZ4ekdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5aUU4eURETzEwS05iVzJaRkdWSXBtVExkRlZJT2IyMUZqbHRKUktRTEdNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklDRHBoNnE1c3V4b1l5MDc1TDRnU0pVSHhvTjlubVFzd3lqM3RVT2RURzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVKdG5tRHY0YytsVkp3TU83SThXdzhRZ2laTTkzeUF3UkxLcEJxTll1Z1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVBPbzRjbWhWREIya2lyVzFBVVBXM3A3ejJvd0pFTExhQ3BDSWlqVTVuMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWlScHNPY2FhazZZaG9DU2Rqa044d0tUK1Fldm1EUGhabXZsYXBTeU9Ecz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxWTDNHZThsKzVkU1UxMStvbEJLYTVBNlRvbkxkQThkdWJqeDNKWmN4WXdERGdTZmN3dzZSZDdaaHJyNFI4UVhpSktpMUNBUFBiVkQxRUU0bWFvUmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcwLCJhZHZTZWNyZXRLZXkiOiJBSFR5eUU2SUhscGdDUGJ2UXE1WjdqbENTUkxuZFBiWC9XUTRRTWdyRnU4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1dk9LVHRNUlMzdU4zbXVVSmVQMW9RIiwicGhvbmVJZCI6IjJhZjU4MDUxLWIxNDctNDViNS04MjUwLWFiNDRjNDgzYTAyNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYK1JDNldLNjY5b0xNOXdWSWRiNkJ0SDMxS0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQzNnVlNGV0N4RStjaFE3enhWUm5Ua3pTSG1jPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFRNjJGRzI3IiwibWUiOnsiaWQiOiI5NDcxMjA0OTk1MTo0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKcTJ1UGNDRU55NXJic0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJud0N6dURRVXVjK3M3ZkxRNUovY2xndzhObk4wNXRSM1BEYi9LYitvRlIwPSIsImFjY291bnRTaWduYXR1cmUiOiJWTkxYTDRZQnFibHdVZTVBSEdEbDBKSGQvRldqSzZFbWIvdmZDbElQMHV3cXVoV05jQnZoSnVMckJmUE9sUDB3Tmxpa0txcHVVWWVzNmI3YmwzbVhCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidVZBdmhWRmU3SUlGVnZVOTVWVEdUZWY0U0s2ZlZoV3A4RHJGdVpXZy9GVGR5dFNCQndMc2xvNDJ6MUxqL2NHdjMyR21hZVFzaDBkYUt3Szd0NkRxaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxMjA0OTk1MTo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlo4QXM3ZzBGTG5Qck8zeTBPU2YzSllNUERaemRPYlVkencyL3ltL3FCVWQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzUwODkzODYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRTVBIn0=')
const sessdata = config.SESSION_ID
const filer = File.fromURL(`https://mega.nz/file/${sessdata}`)
filer.download((err, data) => {
if(err) throw err
fs.writeFile(__dirname + '/auth_info_baileys/creds.json', data, () => {
console.log("🧡 SUHAS-MD-V9 Session Downloaded ✅")
})})}

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

//=============================================

async function connectToWA() {
console.log("💙Connecting SUHAS-MD-V9 WhtasApp Bot...💙");
const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
var { version } = await fetchLatestBaileysVersion()

const conn = makeWASocket({
        logger: P({ level: 'silent' }),
        printQRInTerminal: false,
        browser: Browsers.macOS("Firefox"),
        syncFullHistory: true,
        auth: state,
        version
        })
    
conn.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
connectToWA()
}
} else if (connection === 'open') {
console.log('💕 SUHAS-MD-V9 Bot Connected To WhatsApp Succesfully. 🎉')
const path = require('path');
fs.readdirSync("./plugins/").forEach((plugin) => {
if (path.extname(plugin).toLowerCase() == ".js") {
require("./plugins/" + plugin);
}
});
console.log('Plugins installed successful 🧬✅')
console.log('💕 SUHAS-MD-V9 ❤')

let up = `👋 SUHAS-MD Connected Successful 🤖✅*\n⦁ PREFIX: ${prefix}\n⦁ Main CMD: .menu/.allmenu\n⦁ Bot Main Owner : Suhas Pathsindu\n⦁ Total CMD: 200+\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n\n*🏮ꜱᴜʙꜱᴄʀɪʙᴇ ᴜꜱ* ➟https://youtube.com/@suhasbro\n\n*💡ꜰᴏʟʟᴏᴡ ᴜꜱ* ➟https://whatsapp.com/channel/0029VagKNUe96H4IdMbr9f2o\n\n*✨ᴡᴇʙ ꜱɪᴛᴇ* ➠ https://suhas-bro.vercel.app/\n\n*🎉ᴛᴇʟᴇɢʀᴀᴍ* ➠https://t.me/suhasbro\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n\n\n*_🗣️Sʜᴇʀᴇ Oᴜʀ YᴏᴜTᴜʙᴇ Cʜᴀɴɴᴇʟ Lɪɴᴋ & WʜᴀᴛꜱAᴘᴘ Cʜᴀɴɴᴇʟ Lɪɴᴋ Wɪᴛʜ Yᴏᴜʀ Fʀɪᴇɴᴅꜱ...💙_*\n\n> *✨ Powered By SUHAS-MD-V9 💞*`;

conn.sendMessage(ownerNumber + "@s.whatsapp.net", { image: { url: `https://i.ibb.co/mbP3mpW/20241207-221016.jpg` }, caption: up })

}
})
conn.ev.on('creds.update', saveCreds)  

conn.ev.on('messages.upsert', async(mek) => {
mek = mek.messages[0]
if (!mek.message) return	
mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast' && config.AUTO_READ_STATUS === "true"){
await conn.readMessages([mek.key])
}
const m = sms(conn, mek)
const type = getContentType(mek.message)
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : ''
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const isGroup = from.endsWith('@g.us')
const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
const senderNumber = sender.split('@')[0]
const botNumber = conn.user.id.split(':')[0]
const pushname = mek.pushName || 'Sin Nombre'
const isMe = botNumber.includes(senderNumber)
const isOwner = ownerNumber.includes(senderNumber) || isMe
const botNumber2 = await jidNormalizedUser(conn.user.id);
const groupMetadata = isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber2) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const isReact = m.message.reactionMessage ? true : false
const reply = (teks) => {
conn.sendMessage(from, { text: teks }, { quoted: mek })
}

conn.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
              let mime = '';
              let res = await axios.head(url)
              mime = res.headers['content-type']
              if (mime.split("/")[1] === "gif") {
                return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
              }
              let type = mime.split("/")[0] + "Message"
              if (mime === "application/pdf") {
                return conn.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
              }
              if (mime.split("/")[0] === "image") {
                return conn.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
              }
              if (mime.split("/")[0] === "video") {
                return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
              }
              if (mime.split("/")[0] === "audio") {
                return conn.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
              }
            }

//===================================work-type========================================= 
if(!isOwner && config.MODE === "private") return
if(!isOwner && isGroup && config.MODE === "inbox") return
if(!isOwner && !isGroup && config.MODE === "groups") return
//================================================


const events = require('./command')
const cmdName = isCmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
if (isCmd) {
const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
if (cmd) {
if (cmd.react) conn.sendMessage(from, { react: { text: cmd.react, key: mek.key }})

try {
cmd.function(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply});
} catch (e) {
console.error("[PLUGIN ERROR] " + e);
}
}
}
events.commands.map(async(command) => {
if (body && command.on === "body") {
command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
} else if (mek.q && command.on === "text") {
command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
} else if (
(command.on === "image" || command.on === "photo") &&
mek.type === "imageMessage"
) {
command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
} else if (
command.on === "sticker" &&
mek.type === "stickerMessage"
) {
command.function(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply})
}});

})
}
app.get("/", (req, res) => {
res.send("💛 Dihan Userbot Started. 💛");
});
app.listen(port, () => console.log(`Server listening on port http://localhost:${port}`));
setTimeout(() => {
connectToWA()
}, 4000);  





