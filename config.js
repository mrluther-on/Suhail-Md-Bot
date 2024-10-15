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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



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

  sessionName:process.env.SESSION_ID || "SUHAIL_09_39_10_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAyNixcbiAgICAgICAgMTgzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNixcbiAgICAgICAgMjAyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MixcbiAgICAgICAgOTksXG4gICAgICAgIDg0LFxuICAgICAgICA2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MixcbiAgICAgICAgMjI0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTcsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDY2LFxuICAgICAgICA4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MixcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NCxcbiAgICAgICAgNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDk3LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MixcbiAgICAgICAgMTAzLFxuICAgICAgICA4NixcbiAgICAgICAgOTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDgwLFxuICAgICAgICAyOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5OCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzLFxuICAgICAgICA2MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDMsXG4gICAgICAgIDMxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIsXG4gICAgICAgIDYyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIydUROTUZKcm4remszK09ROGdyYkd6QTdieCtFNlFFaWJSVE9PTkRpYjVRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzZ05YYWMtb1N2eV9zTk9IY1JGOEJBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY2Zjk0YzVmLTE0NjEtNGJmMC05OGVmLTFhNDVmZGM4ZGFhN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODUsXG4gICAgICAyMjYsXG4gICAgICAyMSxcbiAgICAgIDIyOSxcbiAgICAgIDE3MSxcbiAgICAgIDU5LFxuICAgICAgMTk2LFxuICAgICAgMTAyLFxuICAgICAgMjQyLFxuICAgICAgMTU1LFxuICAgICAgMjcsXG4gICAgICAxMDcsXG4gICAgICAyMjQsXG4gICAgICAxOCxcbiAgICAgIDYyLFxuICAgICAgMTMsXG4gICAgICA1MCxcbiAgICAgIDIwLFxuICAgICAgMTgzLFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk0LFxuICAgICAgMTUwLFxuICAgICAgMTc0LFxuICAgICAgMTE1LFxuICAgICAgMTY4LFxuICAgICAgMTc3LFxuICAgICAgNjQsXG4gICAgICAxMzgsXG4gICAgICAyMTEsXG4gICAgICA1MSxcbiAgICAgIDYsXG4gICAgICA5NyxcbiAgICAgIDc5LFxuICAgICAgMTQ4LFxuICAgICAgMjQ2LFxuICAgICAgMjE1LFxuICAgICAgMTc4LFxuICAgICAgMjM4LFxuICAgICAgMjMzLFxuICAgICAgMTE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZHMTFEMkNYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTgyMDcwNzUzMjM6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLvvKHvvLLvvKnvvLnvvKFcIixcbiAgICBcImxpZFwiOiBcIjE1NTM1MzgzMjUyMTk2MjozNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKV2c2MWNRcXZDNHVBWVlCU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBmSC9wRnFLVU1Zd2lhUytpWS9rd3FjTGQ5azQ4MU9wM3JqVkoya1RJaDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVjR4YklVYmI1NnZsTk1JM1lVYzVEck4ySWhmeEI5SmgvUEpoVlFBRHJkNEdTVzE2TDVnejNWVnhBTC9xY2hZdUYwbnUzS1o5Tlpjc3NKMHMrb24wQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia3dNTW1zbWlJeFo1b1JKQVprR2xrbEJVUWFoa3FoWVZPVnorb0YvK0c3anowT29tUkxSb2U1UE1DZmw4anRBREpuTFMxZ21BU0V5STlZUVNrZDIzaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4MjA3MDc1MzIzOjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODk4NTEzMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlQblwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVBuLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNkRYcXBWQ3lqMU9vWE9BeEZ3MWZKM0ZRQVZUMTI1N0RYK0svTE8xYmVGMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQyMDk0MjksXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDMsNF19LFwidGltZXN0YW1wXCI6XCIxNzI4Mjg0MzY5Nzg5XCJ9Igp9",  // PUT SESSION ID HERE 
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
 
