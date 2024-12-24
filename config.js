//
// ░██████╗██╗░░░██╗██╗░░██╗░█████╗░░██████╗░░░░░░███╗░░░███╗██████╗░░░░░░░██╗░░░██╗░█████╗░
// ██╔════╝██║░░░██║██║░░██║██╔══██╗██╔════╝░░░░░░████╗░████║██╔══██╗░░░░░░██║░░░██║██╔══██╗
// ╚█████╗░██║░░░██║███████║███████║╚█████╗░█████╗██╔████╔██║██║░░██║█████╗╚██╗░██╔╝╚██████║
// ░╚═══██╗██║░░░██║██╔══██║██╔══██║░╚═══██╗╚════╝██║╚██╔╝██║██║░░██║╚════╝░╚████╔╝░░╚═══██║
// ██████╔╝╚██████╔╝██║░░██║██║░░██║██████╔╝░░░░░░██║░╚═╝░██║██████╔╝░░░░░░░░╚██╔╝░░░█████╔╝
// ╚═════╝░░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░░░░░░░╚═╝░░░░░╚═╝╚═════╝░░░░░░░░░░╚═╝░░░░╚════╝░


// * Project name - SUHAS-MD-V9 
// * Author - Suhas Pathsindu.
// * Team - 🇦🇴★ ͟͞  ͟͞ ̶❮ᓩＣ͔́ʏʙ͕֝́́ᴇʀ〴Ｄ֝֩ʀᴀ֞ͨͬͥɢᴏɴךＯ͕ͩꜰ͑́ꜰɪᴄ͚ͫɪᴀֹ֣֝ʟ❯ ͟͞ ̶ ͟͞★🇦🇴 
// * Version - 9.0.0

// World Best & Powerfull WhatsApp User Bot in Sri Lanka.
// Don't Copy My Codes. :(


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANDBAD-BOT;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUdsSlp4VUJoT3FuN01hL0QyQ3ZjNGNpdHNLTXBYaVZOckt6UVdvSVRYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmxqeWh1WG8raUhsZGt0MW9jRGgwT3ZHcUtQVVFvOG1FUXVkYVR4UGZEQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4QnpXUXQrem5JSEpqemZENmhVR2hXcWJmMTdxOW9CMndEUkZhemVLS1dzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSS1RGWXZHQ0RVaXJSVnZvT1llYkQrdzR6M3VoZmkvUjRNYkQweTlMMjFJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1GelN0aXZqZkxQY24vdkpCMWpSWUVYeURrWk9RRWQ4Y2R4eTVqeklHMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1PRnYzeHRMYVRmS0hWUjNmVnBseThhd2UweUtCaTlCc1pGaWwzY1pJVnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUZiL2tzRDIyU3k0UFEyWGt1cjYrdHBXY2kwYUkvekdxQ0xVa1ZSUXFHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXZUS2E3VUlHYmZDTi9iclV5cmFjeUt2aGk3RGQybjFBYnRacW9Idy9odz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdSZzhQcWRON2dLeVlNcmNNOFZNd1VLY2lEUndlSXRka3JTQTUyMFJ5d0c2OXpzekpIbUxIZk9OWHY0bXVxR1VqN2ZQYWQxUFRxQXkzWmhSbEVWMGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiJZd0VnNVg2MlRGenUxclJDYVkvVU9LU1VsK2I2NWJ3REs1ZFc1clFWcUJzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqUkRSV1d0WlRMV2hFTmczY1p0X1RRIiwicGhvbmVJZCI6IjQzMzdiMGIyLWI0YmYtNDJkNy1iNTdmLTdmNTI4MDNhMzFlZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJERGRxV2VjVFcxWnpUbmVxT1dXQ0NlZzZMRGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWdNRytUNEpsUWhVWk0rdDhNOHBlVlppNUFFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBIRkw0M0I1IiwibWUiOnsiaWQiOiI5NDcxMjA0OTk1MTozQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKbTJ1UGNDRUtPbHE3c0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJud0N6dURRVXVjK3M3ZkxRNUovY2xndzhObk4wNXRSM1BEYi9LYitvRlIwPSIsImFjY291bnRTaWduYXR1cmUiOiJvbjdUWUhNMmlGd3lzMk11YjV2WlVSZlgyRXlLY2s0cWhJSXg5RDhRWkpQQnJFWllmaG1sNTdEbmQ5em1GVmxuS0ZyMmZXblptY1M4SlBRWWl3R0FCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVHY4OFc4S2NmQUlVNU52bEZZQyttb1FyTHVMeDIzN0NEYlhHTHJkWFYrazNISzhGSnpLOE0vOFNEbnYvZXk4aHplN1pxNDdhYXM2SlNOblI5MEZraWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxMjA0OTk1MTozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlo4QXM3ZzBGTG5Qck8zeTBPU2YzSllNUERaemRPYlVkencyL3ltL3FCVWQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzUwNTQwMDAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRTQvIn0=", // 📌 𝗚𝗲𝘁 𝗦𝗲𝘀𝘀𝗶𝗼𝗻 𝗶𝗱 𝗶𝗻 𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗣𝗮𝗶𝗿 𝗦𝗶𝘁𝗲 📌
SUDO_NB: process.env.SUDO_NB || "", // 𝗔𝗱𝗱 𝗬𝗼𝘂𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 𝗛𝗲𝗿𝗲 𝗪𝗶𝘁𝗵 𝗖𝗼𝘂𝗻𝘁𝗿𝘆 𝗖𝗼𝗱𝗲
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false", // 📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
OWNER_NUMBER: "",
MODE: process.env.MODE || "public", // 📌 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗼𝗿 𝗽𝘂𝗯𝗹𝗶𝗰 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
};
