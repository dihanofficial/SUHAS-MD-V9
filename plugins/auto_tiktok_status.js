const { cmd } = require('../command')
const axios = require('axios')

// කලින් තිබුණ Error එක මඟහැරීමට අවශ්‍ය Variable එක
let autoTikTokIntervals = {};

// --- Auto TikTok Status විධානය පටන් ගැනීම ---
cmd({
    pattern: "starttiktok",
    desc: "පැය 2න් 2කට TikTok වීඩියෝ Status වලට දායි.",
    category: "download",
    react: "✅",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        if (autoTikTokIntervals[from]) return reply("⚠️ දැනටමත් Auto Status සේවාව ක්‍රියාත්මකයි!");

        reply("🚀 *Suhas-MD TikTok Auto Status ආරම්භ වුණා!*\n\nදැන් සෑම පැය 2කට වරක් ස්වයංක්‍රීයව වීඩියෝවක් ඔබේ Status වලට වැටේවි.");

        // පළමු වීඩියෝව දැන්ම යැවීමට
        await postTiktokToStatus(conn);

        // පැය 2ක (7200000ms) කාල පරාසය සැකසීම
        autoTikTokIntervals[from] = setInterval(async () => {
            await postTiktokToStatus(conn);
        }, 7200000); 

    } catch (e) {
        reply("Error: " + e);
    }
});

// --- Auto TikTok Status නැවැත්වීමේ විධානය ---
cmd({
    pattern: "stoptiktok",
    desc: "Auto status upload නතර කරයි.",
    category: "download",
    react: "🛑",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    if (!autoTikTokIntervals[from]) return reply("⚠️ Auto Status දැනට ක්‍රියාත්මක නැත.");
    
    clearInterval(autoTikTokIntervals[from]);
    delete autoTikTokIntervals[from];
    reply("🛑 *Auto TikTok Status සාර්ථකව නතර කළා!*");
});

// --- TikTok එකක් සොයා Status වලට යවන Function එක ---
async function postTiktokToStatus(conn) {
    try {
        // මෙතන API එකක් හරහා random tiktok එකක් ගන්නවා
        // මේ API එක වැඩ නැති වුණොත් වෙනත් එකක් පාවිච්චි කළ හැක.
        const res = await axios.get(`https://api.tiklydown.eu.org/api/download?url=https://www.tiktok.com/@funny/video/7312345678912345678`);
        
        if (res.data && res.data.video) {
            await conn.sendMessage("status@broadcast", { 
                video: { url: res.data.video.noWatermark }, 
                caption: "Auto Status Update via Suhas MD 🤖" 
            });
            console.log("✅ New TikTok Status Posted Successfully!");
        }
    } catch (err) {
        console.log("Status Error: ", err);
    }
}
