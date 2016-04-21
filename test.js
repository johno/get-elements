import test from 'ava'
import getElements from './'

test('get-elements does something awesome', t => {
  t.plan(3)

  t.same(getElements('<ul>'), ['ul'])
  t.same(getElements('<ul><li><a>Foo</a></li></ul>'), ['ul', 'li', 'a'])
  t.same(getElements('<html><body>'), ['html', 'body'])
})
