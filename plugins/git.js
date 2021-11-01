const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');
const hrs = new Date().getHours({ timeZone: 'Asia/Kolkata' })

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://www.linkpicture.com/q/20211014_192513.jpg";
    
    
    var i = Math.floor(1*Math.random())

   var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
    
    var wish = ''
    
if (hrs < 12) wish = '*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'

     await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭──────────────────╮
       ᴛʜᴜɴᴅᴇʀ ᴍᴡᴏʟ 2.0💞 
╰──────────────────╯

     ʜᴇʏ ᴜsᴇʀ ` + wish + `
       *⌚` + time + `*

*ɢʀᴏᴜᴘ ʟɪɴᴋ*☞︎︎︎ : https://chat.whatsapp.com/Ima3CdRZ81NCvGshtcQhK3

╭──────────────────╮
│ contact owner
│ ī.am/𝑝𝑒𝑝𝑒𔒝 ▷ Whatsapp
│ https://Wa.me/+917736622139
│   
╰──────────────────╯


`}) 

}));
