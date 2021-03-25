const express = require('express');
// const data = require('./public/data/data.json');

const app = express();
const PORT = process.env.PORT || 8080;
// const DEFAULT_THEME = 'dark';

// renderTemplate = (alias, data) => {
//   const templateData = data.find(item => item.alias === alias).data;
//   switch (alias) {
//     case 'leaders':
//       return `<h1>${templateData.title}</h1>`
//     case 'vote':
//       return `<h2>${templateData.title}</h2>`
//     default:
//       return `<h1>${templateData.title}</h1>`
//   }
// }

// const Html = (theme, story) => `
//     <!DOCTYPE html>
//     <html>
//         <head>
//             <meta charset="utf-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1">
//             <title> SSR Preact App </title>
//         </head>
//         <body class="theme_${theme}">
//         ${story}
//         </body>

//         <script>
//         window.renderTemplate=${renderTemplate};
//         </script>
//     </html>`;

app.use(express.static('build'));

// app.get('**', (req, res) => {
//   const theme = req.query.theme === 'light' ? 'light' : DEFAULT_THEME;
//   const slide = Number(req.query.slide) || 0;
//   const alias = data[slide].alias;
//   const story = renderTemplate(alias, data)

//   res.send(Html(theme, story, renderTemplate));
// });

app.listen(PORT, () =>
  console.log(`🧸 Express server started and localhost:${PORT}`),
);
