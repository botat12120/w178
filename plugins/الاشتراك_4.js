import pkg from '@whiskeysockets/baileys';
const { prepareWAMessageMedia } = pkg;

const handler = async (m, { conn }) => {
    await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key } });

    const Elsony = 'https://telegra.ph/file/3709b122a7b1bc560f58f.jpg';

    let messageContent = {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: { title: '𝑹𝑶𝑩' },
                    body: {
                        text: `◉━─ •༺ ﷽ ༻• ─━◉
> ⌞🔰┊ 𝑹𝑶𝑩 𝑩𝑶𝑻 ┊🔰⌝
> 〔 الاشتراك البريميام┊ ˼‏ 🚀˹ ↶〕

*◉━━━─ •༺ 🔰 ༻• ─━━━◉*

﹝السعر ↶ 💵﹞
> •┊˹👾˼┊- 150 جنية مصري
> •┊˹👾˼┊- روبل بوت ارقام
> •┊˹👾˼┊- 1500 نقطة دعمكم
◉━━━─ •༺ 🔰 ༻• ─━━━◉
﹝المميزات ↶ 🚀﹞
> •┊˹👾˼┊- اشتراك سرفر عام
> •┊˹👾˼┊- شغال 7/24
> •┊˹👾˼┊- البوت تحت التطوير
◉━━━─ •༺ 🔰 ༻• ─━━━◉
﹝طرق الدفع ↶ 💰﹞
> •┊˹👾˼┊- Payeer
> •┊˹👾˼┊- VodafoneCash
◉━━━─ •༺ 🔰 ༻• ─━━━◉
*ملحوظة : الاشتراك البريميام اي اشتراك سنوي ومعاه خصومات كمان 🚀*
*◉━━━─ •༺ 🔰 ༻• ─━━━◉*
> 〔تـوقـيـع┊ ˼‏📜˹ 〕↶
⌞🔰┊ 𝑹𝑶𝑩 𝑩𝑶𝑻 ┊🔰⌝
*◉━━━─ •༺ 🔰 ༻• ─━━━◉`,
                        subtitle: "𝑹𝑶𝑩"
                    },
                    header: {
                        hasMediaAttachment: true,
                        ...(await prepareWAMessageMedia({ image: { url: Elsony } }, { upload: conn.waUploadToServer }, { quoted: m }))
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈🚀╎𝐁𝐔𝐘 ˹💰˼ 𝐍𝐎𝐖╎🚀⌋","url":"https://api.whatsapp.com/send?phone=+966583621949","merchant_url":"https://api.whatsapp.com/send?phone=+966583621949}'
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الـمـطـور╎📲⌋","https://chat.whatsapp.com/Ck3mQdmm0Ty3FMrJSNsG90","merchant_url":"https://chat.whatsapp.com/Ck3mQdmm0Ty3FMrJSNsG90"}'
                            }
                        ]
                    }
                }
            }
        }
    };

    conn.relayMessage(m.chat, messageContent, {});
};

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['مميز', 'ش4', 'اشتراك_مميز', 'بريميام'];

export default handler;
