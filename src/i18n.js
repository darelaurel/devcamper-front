import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

function loadLocaleMessages () {
  
  /***
   *webpack require.context (dossier, sousDossier inclus: bool , regex)
   require.context.key : tableau des occurences trouvés
   */
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
      console.log(key)
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    console.log(matched)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  console.log(messages)
  return messages
}

export default new VueI18n({
  locale: 'fr',
  fallbackLocale: 'fr',
  messages: loadLocaleMessages()
})
