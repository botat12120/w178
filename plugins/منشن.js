let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
  let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
  m.reply(`❏ مجموعة : *${groupMetadata.subject}*\n❏ أعضاء : *${participants.length}*${text ? `\n❐ رسالة : ${text}\n` : ''}\n*Zenon↳🐢↲𝐁𝐎𝐓*
*⤹⚜⊰اصحوا حان وقت الغزو يالفردة🦍⊱⚜⤸*
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
*⤹⚜ المنشن ⊰⚡⊱ الجماعي ⚜⤸*\n` + users.map(v => '│◦❈↲ قم @' + v.replace(/@.+/, '')).join`\n` + '\n*⌞🔰┊ 𝑹𝑶𝑩 𝑩𝑶𝑻 ┊🔰⌝*', null, {
      mentions: users
  })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['منشن']
handler.admin = true
handler.group = true

export default handler
