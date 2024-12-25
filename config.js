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
SESSION_ID: process.env.SESSION_ID || "WILLIS_MD_2024_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUl3bHZoUmJXN29oOXUyR3gwSjh6M0lSSm9ZMkFiVEVIVEZNUDhhWGxXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3BjSmtaQmFLdUN0ZHJ6TTIvT3Yva2xDQTU4cER1ZXJVVE13OFFJQnVEcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSEVKRS9FSFluUzgxZHl6cXB2bUd6aXA3dmNkTnYySFg4ckdZTmZ4ekdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5aUU4eURETzEwS05iVzJaRkdWSXBtVExkRlZJT2IyMUZqbHRKUktRTEdNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklDRHBoNnE1c3V4b1l5MDc1TDRnU0pVSHhvTjlubVFzd3lqM3RVT2RURzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVKdG5tRHY0YytsVkp3TU83SThXdzhRZ2laTTkzeUF3UkxLcEJxTll1Z1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVBPbzRjbWhWREIya2lyVzFBVVBXM3A3ejJvd0pFTExhQ3BDSWlqVTVuMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWlScHNPY2FhazZZaG9DU2Rqa044d0tUK1Fldm1EUGhabXZsYXBTeU9Ecz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxWTDNHZThsKzVkU1UxMStvbEJLYTVBNlRvbkxkQThkdWJqeDNKWmN4WXdERGdTZmN3dzZSZDdaaHJyNFI4UVhpSktpMUNBUFBiVkQxRUU0bWFvUmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcwLCJhZHZTZWNyZXRLZXkiOiJBSFR5eUU2SUhscGdDUGJ2UXE1WjdqbENTUkxuZFBiWC9XUTRRTWdyRnU4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1dk9LVHRNUlMzdU4zbXVVSmVQMW9RIiwicGhvbmVJZCI6IjJhZjU4MDUxLWIxNDctNDViNS04MjUwLWFiNDRjNDgzYTAyNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYK1JDNldLNjY5b0xNOXdWSWRiNkJ0SDMxS0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQzNnVlNGV0N4RStjaFE3enhWUm5Ua3pTSG1jPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFRNjJGRzI3IiwibWUiOnsiaWQiOiI5NDcxMjA0OTk1MTo0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKcTJ1UGNDRU55NXJic0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJud0N6dURRVXVjK3M3ZkxRNUovY2xndzhObk4wNXRSM1BEYi9LYitvRlIwPSIsImFjY291bnRTaWduYXR1cmUiOiJWTkxYTDRZQnFibHdVZTVBSEdEbDBKSGQvRldqSzZFbWIvdmZDbElQMHV3cXVoV05jQnZoSnVMckJmUE9sUDB3Tmxpa0txcHVVWWVzNmI3YmwzbVhCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidVZBdmhWRmU3SUlGVnZVOTVWVEdUZWY0U0s2ZlZoV3A4RHJGdVpXZy9GVGR5dFNCQndMc2xvNDJ6MUxqL2NHdjMyR21hZVFzaDBkYUt3Szd0NkRxaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxMjA0OTk1MTo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlo4QXM3ZzBGTG5Qck8zeTBPU2YzSllNUERaemRPYlVkencyL3ltL3FCVWQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzUwODkzODYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRTVBIn0=", // 📌 𝗚𝗲𝘁 𝗦𝗲𝘀𝘀𝗶𝗼𝗻 𝗶𝗱 𝗶𝗻 𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗣𝗮𝗶𝗿 𝗦𝗶𝘁𝗲 📌
SUDO_NB: process.env.SUDO_NB || "94712049951", // 𝗔𝗱𝗱 𝗬𝗼𝘂𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 𝗛𝗲𝗿𝗲 𝗪𝗶𝘁𝗵 𝗖𝗼𝘂𝗻𝘁𝗿𝘆 𝗖𝗼𝗱𝗲
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false", // 📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
OWNER_NUMBER: "94712049951",
MODE: process.env.MODE || "private", // 📌 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗼𝗿 𝗽𝘂𝗯𝗹𝗶𝗰 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
};
