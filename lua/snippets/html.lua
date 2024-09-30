local ls = require 'luasnip'
local s = ls.snippet
local t = ls.text_node
local i = ls.insert_node

-- Define your snippet
ls.add_snippets('html', {
  -- Vue 3 CDN with defer
  s('vuecdn', {
    t('<script src="https://unpkg.com/vue@3/dist/vue.global.js" defer></script>'),
  }),
})
