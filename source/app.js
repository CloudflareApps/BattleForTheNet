(function () {
  'use strict'

  if (!window.addEventListener) return // Check for IE9+

  var options = INSTALL_OPTIONS
  var isPreview = INSTALL_ID === 'preview'

  window._bftn_options = {
    theme: options.theme,
    org: options.org === 'random' ? null : options.org,
    delay: parseInt(options.delay, 10),
    date: new Date('2017-07-12'),
    always_show_widget: isPreview
  }
}())
