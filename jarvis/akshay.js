const petik = '```'

const dtod = "27634090203@s.whatsapp.net"
const help = (prefix, wita, wit, ucapannya, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensiii, tekss) => {
	return`
┌───〔 ɪɴғᴏʀᴍᴀᴛɪᴏɴ 〕
┊👑ᴄʀᴇᴀᴛᴏʀ : ᴅʀɪᴘꜱᴍᴇᴍᴇꜱ
┊👑ᴛɪᴍᴇ : ${timuu}
┊👑ᴅᴀʏ : ${thisDay}
┊👑ᴅᴀᴛᴇ : ${ini_tanggal}
┊👑ᴡʜᴀᴛsᴀᴘᴘ : ${wa_version}
┊👑ᴅᴇᴠɪᴄᴇ : ${device_manufacturer}
┊👑ʀᴀᴍ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┊
├───〔 ᴀʙᴏᴜᴛ 〕
┊🎈sᴛᴀᴛᴜs : ${status}
┊🎈ᴘʀᴇғɪx : ${prefix}
┊🎈ᴛᴏᴛᴀʟ ᴄᴍᴅ : ${hit_today.length}
┊🎈ᴘᴄ : ${totalchat.length - ini_gcchat.length}
┊🎈ᴛᴏᴛᴀʟ ᴄʜᴀᴛ : ${totalchat.length}
┊🎈ɢʀᴏᴜᴘ ᴄʜᴀᴛ : ${ini_gcchat}
┊🎈sᴇʀᴠᴇʀ : Baileys
┊🎈ᴠᴇʀsɪᴏɴ : 3.5.1
┊🎈sᴘᴇᴇᴅ :${latensiii} 
┊
├───〔 ᴛʜᴀɴᴋs ᴛᴏ 〕
┊
├〔 ᴅʀɪᴘꜱ ᴍᴇᴍᴇꜱ 〕
├〔 ᴍᴀɢᴡᴇᴛᴛᴀ 〕
├〔 ʙʟᴇꜱꜱᴇᴅ ᴛᴜɴᴀ 〕
├〔 ꜱᴛᴀʟʟᴏɴᴇ ᴛᴜɴᴀ 〕
├〔 ʟɪᴏɴᴇʟ ᴛᴜɴᴀ 〕
├〔 ꜱᴛᴀɴᴛᴏɴ ᴛᴜɴᴀ 〕
┊
└───〔 ᴢɪᴍ-ʙᴏᴛ 〕
`
}
const convert = (prefix) => {
	return`
┌───〔 *_ᴢɪᴍ-ʙᴏᴛ_* 〕
┊
└───────────☜☞
┌───〔 ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ 〕
┊🛠${prefix}toimg
┊🛠${prefix}tomp3
┊🛠${prefix}tomp4
┊🛠${prefix}slow
┊🛠${prefix}fast
┊🛠${prefix}reverse
┊🛠${prefix}tourl
└───────────☜☞
`
}
const download = (prefix) => {
	return`
┌───〔 *_ᴢɪᴍ-ʙᴏᴛ_* 〕
┊
└───────────☜☞
┌───〔 ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ 〕
┊📡${prefix}ytsearch
┊📡${prefix}play
┊📡${prefix}video
┊📡${prefix}ytmp3
┊📡${prefix}ytmp4
┊📡${prefix}ig
┊📡${prefix}image
└───────────☜☞
`
}
const allmenu = (prefix, wita, wit, ucapannya, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensiii, tekss)  => {
	return`
┌───〔 *_ᴢɪᴍ-ʙᴏᴛ_* 〕
┊
└───────────☜☞
┌───〔 ɪɴғᴏʀᴍᴀᴛɪᴏɴ 〕
┊👑ᴛɪᴍᴇ : ${timuu}
┊👑ᴅᴀʏ : ${thisDay}
┊👑ᴅᴀᴛᴇ : ${ini_tanggal}
┊👑ᴡʜᴀᴛsᴀᴘᴘ : ${wa_version}
┊👑ᴅᴇᴠɪᴄᴇ : ${device_manufacturer}
┊👑ᴍᴏᴅᴇʟ : ${device_model}
┊👑ʀᴀᴍ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
└───────────☜☞
┌───〔 ᴀʙᴏᴜᴛ 〕
┊🌳sᴛᴀᴛᴜs : ${status}
┊🌳ᴘʀᴇғɪx : ${prefix}
┊🌳ᴛᴏᴛᴀʟ ᴄᴍᴅ : ${hit_today.length}
┊🌳ᴘᴄ : ${totalchat.length - ini_gcchat.lenght}
┊🌳ᴛᴏᴛᴀʟ ᴄʜᴀᴛ : ${totalchat.length}
┊🌳ɢʀᴏᴜᴘ ᴄʜᴀᴛ : ${ini_gcchat}
┊🌳sᴇʀᴠᴇʀ : Baileys
┊🌳ᴠᴇʀsɪᴏɴ : 3.5.1
┊🌳sᴘᴇᴇᴅ :${latensiii} 
└───────────☜☞
┌───〔 ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ 〕
┊🛠${prefix}toimg
┊🛠${prefix}tomp3
┊🛠${prefix}tomp4
┊🛠${prefix}slow
┊🛠${prefix}fast
┊🛠${prefix}reverse
┊🛠${prefix}tourl
┊
├───〔 ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ 〕
┊📡${prefix}ytsearch
┊📡${prefix}play
┊📡${prefix}video
┊📡${prefix}ytmp3
┊📡${prefix}ytmp4
┊📡${prefix}ig
┊📡${prefix}image
┊
├───〔 ᴍᴀᴋᴇʀ ᴍᴇɴᴜ 〕
┊🎐${prefix}sticker
┊🎐${prefix}swm
┊🎐${prefix}take
┊🎐${prefix}fdeface
┊🎐${prefix}emoji
┊
├───〔 ᴏᴛʜᴇʀ ᴍᴇɴᴜ 〕
┊✨${prefix}add
┊✨${prefix}ping
┊✨${prefix}get
┊✨${prefix}getpp
┊✨${prefix}getbio
┊✨${prefix}tagall
┊✨${prefix}admin
┊✨${prefix}fitnah
┊✨${prefix}fitnahpc
┊✨${prefix}kontak
┊
├───〔 ᴏᴡɴᴇʀ ᴍᴇɴᴜ 〕
┊💎${prefix}off
┊💎${prefix}on
┊💎${prefix}buggc
┊💎${prefix}bc
┊💎${prefix}bcimage
┊💎${prefix}bcgif
┊💎${prefix}bcvideo
┊💎${prefix}bcaudio
┊💎${prefix}bcsticker
┊💎${prefix}status
┊💎${prefix}clearall
┊💎${prefix}self
┊💎${prefix}public
┊💎${prefix}leave
┊💎${prefix}clearall
┊💎${prefix}setthumb
┊💎${prefix}settarget
┊💎${prefix}setfakeimg
┊💎${prefix}setreply
┊💎${prefix}term
┊💎${prefix}setcmdmenu
┊💎${prefix}setcmdping
┊💎${prefix}setcmdplay
┊💎${prefix}setcmdclose
┊💎${prefix}setcmdopen
┊💎${prefix}setcmditos
┊💎${prefix}setcmdtoimg
┊💎${prefix}setcmdself
┊💎${prefix}setcmdpublic
┊💎${prefix}upswteks
┊💎${prefix}upswimage
┊💎${prefix}upswvideo
┊💎${prefix}addstik 
┊💎${prefix}addimg 
┊💎${prefix}addvid 
┊💎${prefix}addvn   
┊💎x or >
┊
├───〔 sᴛᴏʀᴀɢᴇ  ᴍᴇɴᴜ 〕
┊📁${prefix}liststick
┊📁${prefix}listimg
┊📁${prefix}listvid
┊📁${prefix}listvn
┊
├───〔 ᴛᴀɢ  ᴍᴇɴᴜ 〕
┊🔶${prefix}hidetag
┊🔶${prefix}kontag
┊🔶${prefix}sticktag
┊🔶${prefix}totag
┊
├───〔 ᴛʜᴀɴᴋs ᴛᴏ 〕
┊
├〔 ᴅʀɪᴘꜱ ᴍᴇᴍᴇꜱ 〕
├〔 ʙʟᴇꜱꜱᴇᴅ ᴛᴜɴᴀ 〕
├〔 ꜱᴛᴀʟʟᴏɴᴇ ᴛᴜɴᴀ 〕
├〔 ᴍᴀᴅᴇʟɪɴᴇ ᴛᴜɴᴀ 〕
├〔 ʟɪᴏɴᴇʟ ᴛᴜɴᴀ 〕
├〔 ꜱᴛᴀɴᴛᴏɴ ᴛᴜɴᴀ 〕
┊
└───〔 ᴢɪᴍ-ʙᴏᴛ 〕
`
}

const maker = (prefix) => {
	return`
┌───〔 *_ᴢɪᴍ-ʙᴏᴛ_* 〕
┊
└───────────☜☞
┌───〔 ᴍᴀᴋᴇʀ ᴍᴇɴᴜ 〕
┊🎐${prefix}sticker
┊🎐${prefix}swm
┊🎐${prefix}take
┊🎐${prefix}fdeface
┊🎐${prefix}emoji
└───────────☜☞
`
}

const other = (prefix) => {
	return`
┌───〔 *_ᴢɪᴍ-ʙᴏᴛ_* 〕
┊
└───────────☜☞
┌───〔 ᴏᴛʜᴇʀ ᴍᴇɴᴜ 〕
┊✨${prefix}add
┊✨${prefix}ping
┊✨${prefix}get
┊✨${prefix}getpp
┊✨${prefix}getbio
┊✨${prefix}tagall
┊✨${prefix}admin
┊✨${prefix}fitnah
┊✨${prefix}fitnahpc
┊✨${prefix}kontak
└───────────☜☞
`
}

const ownermenu = (prefix) => {
	return`
┌───〔 *_ᴢɪᴍ-ʙᴏᴛ_* 〕
┊
└───────────☜☞
┌───〔 ᴏᴡɴᴇʀ ᴍᴇɴᴜ 〕
┊💎${prefix}off
┊💎${prefix}on
┊💎${prefix}buggc
┊💎${prefix}bc
┊💎${prefix}bcimage
┊💎${prefix}bcgif
┊💎${prefix}bcvideo
┊💎${prefix}bcaudio
┊💎${prefix}bcsticker
┊💎${prefix}status
┊💎${prefix}clearall
┊💎${prefix}self
┊💎${prefix}public
┊💎${prefix}leave
┊💎${prefix}clearall
┊💎${prefix}setthumb
┊💎${prefix}settarget
┊💎${prefix}setfakeimg
┊💎${prefix}setreply
┊💎${prefix}term
┊💎${prefix}setcmdmenu
┊💎${prefix}setcmdping
┊💎${prefix}setcmdplay
┊💎${prefix}setcmdclose
┊💎${prefix}setcmdopen
┊💎${prefix}setcmditos
┊💎${prefix}setcmdtoimg
┊💎${prefix}setcmdself
┊💎${prefix}setcmdpublic
┊💎${prefix}upswteks
┊💎${prefix}upswimage
┊💎${prefix}upswvideo
┊💎${prefix}addstik 
┊💎${prefix}addimg 
┊💎${prefix}addvid 
┊💎${prefix}addvn   
┊💎x or >
└───────────☜☞
`
}


const storage = (prefix) => {
	return`
┌───〔 *_ᴢɪᴍ-ʙᴏᴛ_* 〕
┊
└───────────☜☞
┌───〔 sᴛᴏʀᴀɢᴇ  ᴍᴇɴᴜ 〕
┊📁${prefix}liststick
┊📁${prefix}listimg
┊📁${prefix}listvid
┊📁${prefix}listvn
└───────────☜☞
`
}

const tag = (prefix) => {
	return`
┌───〔 *_ᴢɪᴍ-ʙᴏᴛ_* 〕
┊
└───────────☜☞
┌───〔 ᴛᴀɢ  ᴍᴇɴᴜ 〕
┊🔖${prefix}hidetag
┊🔖${prefix}kontag
┊🔖${prefix}sticktag
┊🔖${prefix}totag
└───────────☜☞
`
}



exports.help = help
exports.convert = convert
exports.download = download
exports.maker = maker
exports.other = other
exports.ownermenu = ownermenu
exports.storage = storage
exports.tag = tag
exports.allmenu = allmenu
