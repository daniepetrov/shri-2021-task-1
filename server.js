
const express = require('express')
const data = require('./public/data/data.json')

const app = express()
const PORT = process.env.PORT || 8080

const DEFAULT_THEME = 'dark'

const renderFavicons = (theme) => {
  return `
    <link rel="shortcut icon" href="/favicon-${theme}.ico" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-${theme}-16x16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-${theme}-32x32.png" />
    <link rel="icon" type="image/png" sizes="48x48" href="/favicon-${theme}-48x48.png" />
  `
}

const renderHtml = (theme, alias, data) =>
  `<!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1"
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        ${renderFavicons(theme)}
        <title>Школа разработки интерфейсов - Задание 1</title>
        <script src="/stories.js"></script>
        <link href="/stories.css" rel="stylesheet" />
      </head>
      <body class="theme_${theme}"></body>
      <script>
        const body = document.querySelector('body');
        body.innerHTML = window.renderTemplate('${alias}', ${JSON.stringify(data)})
      </script>
    </html>`

app.use(express.static('build'))

app.get('**', (req, res) => {
  const theme = req.query.theme === 'light' ? 'light' : DEFAULT_THEME
  const slide = Number(req.query.slide)
  const index = slide - 1
  const alias = Boolean(data[index]) ? data[index].alias : data[0].alias
  const storyData = Boolean(data[index]) ? data[index].data : data[0].data
  res.send(renderHtml(theme, alias, storyData))
})

app.listen(PORT, () => console.log(`🧸 Express server started and localhost:${PORT}`))
