'use strict'
var cheerio = require('cheerio')

module.exports = function getElements (html) {
  if (typeof html !== 'string') {
    throw new TypeError('get-elements expected a string')
  }

  var elements = []
  var $ = cheerio.load(html)
  $('*').each(function (_, element) {
    if (element.type === 'tag') {
      elements.push(element.name)
    }
  })

  return elements
}
