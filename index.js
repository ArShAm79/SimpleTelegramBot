import { Markup, Telegraf } from 'telegraf'
import dotenv from 'dotenv'

dotenv.config()
const index = async () => {
  const bot = new Telegraf(process.env.BOT_TOKEN)
  bot.start(async (ctx) => {
    await ctx.reply('Welcome', Markup.inlineKeyboard([Markup.button.callback('Arsham', 'Arsham')]))
  })
  bot.hears('Hi', async (ctx) => {
    await ctx.reply('Hello')
  })
  bot.hears('Hello', async (ctx) => {
    await ctx.reply('Hi')
  })
  bot.command('/test', async (ctx) => {
    await ctx.reply('You called test command')
  })
  bot.on('edited_message', async (ctx) => {
    await ctx.reply('You edited this message', { reply_to_message_id: ctx.message.message_id })
  })
  bot.on('document', async (ctx) => {
    await ctx.reply('You sent a document')
  })
  bot.action('Arsham', async (ctx) => {
    await ctx.reply('You clicked Arsham', Markup.keyboard([['Hi', 'Hello']]).resize().oneTime())
    await ctx.answerCbQuery()
  })
  await bot.launch()
  console.log('Bot ')
}
index()
