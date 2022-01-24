let handler = async (m) => {
    m.reply(`
┌「 *donasi* 」
├ https://saweria.co/Fahrilgg
├ https://saweria.co/Fahrilgg
├ wa.me/6285876902820
└────
`.trim())
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler