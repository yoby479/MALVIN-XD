{
  "name": "ᴍᴀʟᴠɪɴ-xᴅ",
  "description": "Javascript WhatsApp bot made by ᴍᴀʟᴠɪɴ ᴋɪɴɢ",
  "logo": "https://files.catbox.moe/qumhu4.jpg",
  "keywords": ["MALVIN XD"],
  "success_url": "/",

    "stack": "container",
  "env": {
      "SESSION_ID": {
        "description": "malvin~pm1zxKyI#nudHwBA8QBog9_pJkMeUio_QBAiOPeluTo1wfc_8e7w",
        "value":"",
        "required": true
        
    },
      "BOT_NAME": {
        "description": "JUNIOR SIRMA.",
        "required": true,
        "value": "ᴍᴀʟᴠɪɴ xᴅ" 
        
    },
     "PREFIX": {
       "description": "Bot command prefix, (e.g, . , ! @ etc",
      "value": "."
      "required": true,
      
    },
      "MODE": {
        "description": "Bot mode can be public, private, inbox or groups in small letters (e.g, public)",
        "value":"private",
        "required": true  
        
   },
     "DESCRIPTION": {
      "description": "add caption for menu and other",
      "value": "> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ xᴅ*",
      "required": true
      
   }, 

    "OWNER_NUMBER": {
      "description": "put the owner number for bot.",
      "value": "254798457039"
      "required": true
      
   },
    "OWNER_NAME": {
      "description": "Enter your name here",
      "value": "",
      "required": true
    }

},

     "buildpacks": [
        {
            "url": "https://github.com/heroku/heroku-buildpack-nodejs.git"
        }
     ],
  "stack": "heroku-24"
}
  
