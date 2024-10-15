const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="lutherofficial009@gmail.com"
global.location="dum dum,kalkata."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://akashbain2006:lutherlex@cluster0.wtgjeuu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/kalkata";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vakxzdf7oQhll9dE2S0t";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vakxzdf7oQhll9dE2S0t" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/CadgoD3.jpeg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919614477116";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,919xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "919614477116,919xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "A17_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©THE GREAT SUBARU" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "SUBARU",
  packname: process.env.PACK_NAME || "SUBARU IS YOUR DREAM GUY BABY 🌩",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x ＳＵＢＡＲＵ",

  sessionName:process.env.SESSION_ID || "SUHAIL_11_15_10_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0LFxuICAgICAgICAyNyxcbiAgICAgICAgOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDk1LFxuICAgICAgICAzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDksXG4gICAgICAgIDM3LFxuICAgICAgICA4MSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxODksXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDYzLFxuICAgICAgICA0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDgsXG4gICAgICAgIDExLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExLFxuICAgICAgICA1OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDQsXG4gICAgICAgIDUwLFxuICAgICAgICA4OCxcbiAgICAgICAgODUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDU2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVyUU5lVmsyQW1YUjlteHZWOU50dmtqMFh1c1QweVN3bnFqZnNuUTJwdEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpQZnlPS3h4VGktcEpuc19ZRS14WFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTliYjUxMjQtMzBkMi00MGRlLTkxZGUtY2U3YWYwYjlhMThiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NCxcbiAgICAgIDE4MCxcbiAgICAgIDE3MyxcbiAgICAgIDIwNSxcbiAgICAgIDE1MSxcbiAgICAgIDgxLFxuICAgICAgMTEyLFxuICAgICAgODgsXG4gICAgICAyNDYsXG4gICAgICAxNSxcbiAgICAgIDIwNixcbiAgICAgIDEwNixcbiAgICAgIDcwLFxuICAgICAgMTksXG4gICAgICAyNTIsXG4gICAgICA4LFxuICAgICAgNjcsXG4gICAgICAxOTEsXG4gICAgICAxMjMsXG4gICAgICAyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzUsXG4gICAgICAzNCxcbiAgICAgIDE4NyxcbiAgICAgIDE3OSxcbiAgICAgIDEwNixcbiAgICAgIDE1MCxcbiAgICAgIDEwNSxcbiAgICAgIDE2NSxcbiAgICAgIDQ2LFxuICAgICAgMTQxLFxuICAgICAgNTQsXG4gICAgICA1MSxcbiAgICAgIDEzLFxuICAgICAgMjcsXG4gICAgICAxMTMsXG4gICAgICA5NixcbiAgICAgIDIzNCxcbiAgICAgIDIyNCxcbiAgICAgIDEyNSxcbiAgICAgIDY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRFVzdFUVBOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTgyMDcwNzUzMjM6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLvvKHvvLLvvKnvvLnvvKFcIixcbiAgICBcImxpZFwiOiBcIjE1NTM1MzgzMjUyMTk2MjozNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKV2c2MWNRenAyNXVBWVlCaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBmSC9wRnFLVU1Zd2lhUytpWS9rd3FjTGQ5azQ4MU9wM3JqVkoya1RJaDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTkVhWWRSMUtkY0VWb0xEY1JPbGl6VHlLa24zeHA1ZFVac25oamh0a2g5RDJBUkxVbFIwcTQwL3Qreld6QjF5aUpEbHdNTnYyMFEwV005dG9ia0JoQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTXNCbHpGV2ptWHMxUnlBeVdNRnUvdnBBaGtvNzlBL2hxeEFjM2V5TGtlamNHc3VtZGQwREY0ZFFKRGNpQUJFdmNKandabER5NDd1RWhaWHNZUlJZQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4MjA3MDc1MzIzOjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODk5MDkyOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlQbFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVBsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWXp3VDRaZFNDV0VkbzdXMGpsaEtCTm1ZRzRjOUJaQS9UNDYyT1dRNllOQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQyMDk0MjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
