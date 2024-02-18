let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴: Actívense gente linda* ${pesan}`
let teks = `*⺀🍭BOT BABY🍭⺀*
Para comprar el bot comunicarse al WhatsApp https://wa.me/+5492945405712\n\n💌 ${oi}\n\n💌 *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `✼🍭 @${mem.id.split('@')[0]}\n`}
teks += `└𝐁𝐨𝐭 𝐁𝐚𝐛𝐲`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler