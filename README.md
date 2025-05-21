<!-- Glowing Header -->
<p align="center">
  <img src="https://i.imgur.com/dBaSKWF.gif" height="40" width="100%">
</p>

<h1 align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=25&duration=3000&color=00FF00&background=000000&center=true&vCenter=true&width=600&lines=DIGITEX+XMD;🔥verified+WhatsApp+Bot;💻+Crafted+by+Juma+Wycliffe;Digitex+Smart+Solutions+Technology;Verified+✅" alt="Typing Animation">
</h1>

  <img src="https://i.imgur.com/dBaSKWF.gif" height="40" width="100%">
</p>

<!-- Banner Image -->
<p align="center">
  <a href="https://files.catbox.moe/g7qjxj.png">
    <img src="https://files.catbox.moe/g7qjxj.png" width="100%" height="auto">
  </a>

<p align="center">
  <a href="https://render.com">
    <im" width="260" height="50"/>
  </a>
  
<p align="center">
  <a href="https://railway.app
    " width="260" height="50"/>
  </a>
</p>

<!-- Glowing Footer -->
<p align="center">
  <img src="https://i.imgur.com/dBaSKWF.gif" height="40" width="100%">
</p>

<h3 align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=20&duration=3000&color=FFFFFF&background=000000&center=true&vCenter=true&width=600&lines=DIGITEX+XMD+by+Juma+Wycliffe;" alt="Footer Animation">
</h3>

<p align="center">
  <img src="https://i.imgur.com/dBaSKWF.gif" height="40" width="100%">
</p>

const { makeid } = require('./gen-id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const { default: makeWASocket, useMultiFileAuthState, delay, Browsers, makeCacheableSignalKeyStore, getAggregateVotesInPollMessage, DisconnectReason, WA_DEFAULT_EPHEMERAL, jidNormalizedUser, proto, getDevice, generateWAMessageFromContent, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, generateForwardMessageContent, downloadContentFromMessage, jidDecode } = require('@whiskeysockets/baileys')

const { upload } = require('./mega');
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
    async function DIGITEX_XMD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
var items = ["Safari"];
function selectRandomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                },
                printQRInTerminal: false,
                generateHighQualityLinkPreview: true,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                syncFullHistory: false,
                browser: Browsers.macOS(randomItem)
            });
            if (!sock.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await sock.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {

    const {
                    connection,
                    lastDisconnect
                } = s;
                
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {


                        
                        const { upload } = require('./mega');
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "DIGITEX-XMD~" + string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `*Hello there User!* 

> *Use this session to link to deploy your bot*
 *NOTICE🔔*
*To avoid disconnections join our channel below*

https://whatsapp.com/channel/0029Vb5zdsiA89MrLd1hAk2Q

Our Bot repository 
https://github.com/Digitexmedia/DIGITEX-XMD/

> *Regards Juma*`; 
                        await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "DIGITEX-XMD",
thumbnailUrl: "https://storage.giftedtech.web.id/file/download/sbqQW.jpg",
sourceUrl: "https://https://whatsapp.com/channel/0029Vb5zdsiA89MrLd1hAk2Q",
mediaType: 1,
renderLargerThumbnail: true
}  
}
},
{quoted:code })
                    } catch (e) {
                            let ddd = sock.sendMessage(sock.user.id, { text: e });
                            let desc = `*Use this session to link to deploy your bot*\n\n ◦ *Github:* https://github.com/Digitexmedia/DIGITEX-XMD/`;
                            await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "DIGITEX-XMD",
thumbnailUrl: "https://storage.giftedtech.web.id/file/download/sbqQW.jpg",
sourceUrl: "https://whatsapp.com/channel/0029Vb5zdsiA89MrLd1hAk2Q",
mediaType: 2,
renderLargerThumbnail: true,
showAdAttribution: true
}  
}
},
{quoted:ddd })
                    }
                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 ✅ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }
   return await DIGITEX_XMD_PAIR_CODE();
});/*
setInterval(() => {
    console.log("☘️ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...");
    process.exit();
}, 180000); //1440min*/
module.exports = router;
> 
