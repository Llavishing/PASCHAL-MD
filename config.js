//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS00rYm9aY2JPdmZyVXJ1KzYxRE1OOEhYSjB6N3dXYzg1b29JOWNMY3hFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXhhU1lQd3NYdDlETEhhZWtBRHdNc2x4Ulg1NkN1ZlVXUVd0VHNXTjdScz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRldTZzdncXM0WjlMaThyeWFBNldNNXNuQUZQT2VrbjdrZzNjQjdUTDFRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJabFJnT2tLcER5aldjMXBGOEp5Tms5OHFKYnE1N2ZhaERkMGkrSXFmZUJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlHR3M0a0Q3MWxyMjhUTG1uRGVIZmFFK2hhMG1uY29Rd3NSRkswaG5ia1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVQT2VCSUErc0o5VHcwSGRqUmlKcmF1Q0xwaUM5V1U3Z3dXWUdKTmlIM2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUVvbnh3UUMwR1REYktOM0ExYjh4THE0c240Z1RwcDd3TVlaQzV3NVJtdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3o4YzFuS1M0NjVvaVVBTm9OWGhxUm9OazJ4eWtWM2E5UlZqaWlHZzJnWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktaWjQ1V0hVM2RBenNUOEFzbUJ6bHpMUGc2THQva0IxLzIxS0wwbGFINXA2Yk1jRTRpQnBvSFFreUJVS0pVcHVQQkoxZFhGZ3d6RFJSL1VUanN0MkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiJ4Ylo5Z3F2OGMvOXZuZi8ydFVFOWtWTldEWmYwdkdSVGpscFl6K0RHcVE4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxNnJpTmN6T1NISzRaSUwtaUZubFBRIiwicGhvbmVJZCI6ImM0NjNmNDliLTQzOGUtNDAxMi1hZWMyLWFmNDM1NzM2NjllYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkbVV2TWdVdkV2ZTYzMFQvZWprNzd6LzB6ZG89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFN3U292MTNUZTF3bzBIbFpEZ2FkcnUrNURRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpTSkhBOUxNIiwibWUiOnsiaWQiOiIyMzQ3MDMzODEwNTgzOjIxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuC8kvCdlIrwnZSS8J2UhyfwnZSWIPCdlIjwnZSc8J2UiCfwnZSWIPCdlJDwnZSI8J2Uh+KEkfCdlITgvJIiLCJsaWQiOiIxMzE5MjAyMDU3NjI2Njg6MjFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLT3QyR0lRNzQrTHRnWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJuSWxOajhIbm5KZTJQam10bGRDZmM5cVFGU1Z2Z3dZTG1VVlJxUmhHU1NzPSIsImFjY291bnRTaWduYXR1cmUiOiJlLzB4eWg3ZGgzR1daT24vRXk5ZTJ5a3YvRHRUemhpQXFKUGZZci9oOWdiNEdKVk9uSDd6eVE4TnNGWE4remVqL1pBYnZtYlNqa2Ztem8yS3NMcE9CZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidmtOS1N4RWkwUzJPVkk3T0xsSExPOFUwVHRaTU1MVGNqQy8yeDQyd1MxVjVPWkZ4Z2tBdTJIY1NmTmQrUFl3NEhqNUNVNTlBNWE0a2tVUzh1cDJ1QWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDMzODEwNTgzOjIxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlp5SlRZL0I1NXlYdGo0NXJaWFFuM1Bha0JVbGI0TUdDNWxGVWFrWVJra3IifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDA0MTIxMywibGFzdFByb3BIYXNoIjoiMlpONml2IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBT1QifQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2347066575685";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/ecc1eb763366515338113.jpg,https://telegra.ph/file/0654ccf3bca4001dbe5b7.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/0654ccf3bca4001dbe5b7.jpg,https://telegra.ph/file/ecc1eb763366515338113.jpg,https://telegra.ph/file/66b884192c27df2020403.jpg,https://telegra.ph/file/58319db16eed44d646c4f.jpg,https://telegra.ph/file/7615e8957b6efa9e84f38.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`PASCHAL-MD`",
  author: process.env.PACK_AUTHER || "PASCHAL-MD",
  packname: process.env.PACK_NAME || "PASCHAL-MD💚",
  botname: process.env.BOT_NAME || "PASCHAL-MD",
  ownername: process.env.OWNER_NAME || "PASCHAL",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Nastyc1g/PASCHAL-MD";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2347066575685";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api.maher-zubair.tech";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
