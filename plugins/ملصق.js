const { Client, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const sharp = require('sharp');

// إنشاء البوت واتساب
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('WhatsApp Bot is ready!');
});

client.on('message', async msg => {
    if (msg.body === '.ملصق' && msg.hasMedia) {
        const media = await msg.downloadMedia();

        // تحويل الصورة إلى ملصق
        sharp(Buffer.from(media.data, 'base64'))
            .resize(512, 512)
            .toFormat('png')
            .toBuffer()
            .then(async (data) => {
                const sticker = new MessageMedia('image/png', data.toString('base64'));
                client.sendMessage(msg.from, sticker, { sendMediaAsSticker: true });
            })
            .catch(err => {
                console.error('Error processing the image:', err);
            });
    } else if (msg.body === '.ملصق') {
        msg.reply('الرجاء إرسال صورة مع هذا الأمر لتحويلها إلى ملصق!');
    }
});

client.initialize();
