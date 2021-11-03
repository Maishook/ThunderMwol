const Asena = require("../Utilis/events");
const { forwardOrBroadCast } = require("../Utilis/groupmute");
const { getBuffer } = require('../Utilis/download');
const { parseJid } = require("../Utilis/vote");
// chnage url for custom photo and change caption if
const url = 'https://i.imgur.com/2I1mKuL.jpeg?itok=hnIK5mr5'
Asena.addCommand(
  { pattern: 'mforward ?(.*)', fromMe: true, desc: "Forward replied msg." },
  async (message, match) => {
    if (match == "") return await message.sendMessage("*Give me a jid*\nExample .mforward jid1 jid2 jid3 jid4 ...");
    if (!message.reply_message)
      return await message.sendMessage("*Reply to a Message*");
    const buff = await getBuffer(url)
    let options = {}
  /* delete this line for forwarded tag
  //for forward tag
  options.contextInfo = {
           forwardingScore: 5, // change it to 999 for many times forwarded
           isForwarded: true 
        } 
     delete this line for forwarded tag   */ 
    
    /* delete this line for audio seconds change
   // to set custo, duration for audio
    options.duration = 999999 
    
   delete this line for audio seconds change  */
    
    options.ptt = true // delete this if not need audio as voice always
    options.quoted = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
      },
      message: {
        "imageMessage": {
          "jpegThumbnail": buff.buffer,
          "caption": "ɪͥᴛͭsᷤ ᴍᷟᴇͤ     \n⚚ചങ്കിന്റെ✰പടയാളി⚚     \n[വിളച്ചിൽ എടുക്കല്ലേ കെട്ട 😑]     "
        }
      }
    }

    match.match(parseJid).map((jid) => {
      forwardOrBroadCast(jid, message, options);
    });
  }
);

// Asena.addCommand(

//   { pattern: 'vforward ?(.*)', fromMe: true, desc: "Forward replied msg." },
//   async (message, match) => {
//     if (match == "") return await message.sendMessage("*Give me a jid*\nExample .mforward jid1 jid2 jid3 jid4 ...");
//     if (!message.reply_message)
//       return await message.sendMessage("*Give me a jid*\nExample .mforward jid1 jid2 jid3 jid4 ...");
//       const { buffer, type, options } = await forward(match, message);
//     options.viewOnce = true 
//     match.match(parseJid).map(async jid => {
//     if(jid.length < 30){
//     await new Promise((r) => setTimeout(r, 3000));
//     await message.client.sendMessage(jid, buffer, type, options);
//     }
//     })
//   }
// );
