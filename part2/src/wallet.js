var bitcore = require('bitcore-lib-cash')
var fetch = require('whatwg-fetch').fetch

function Wallet () {
  console.log('Constructing a Wallet.')
  console.log(bitcore)
  console.log(fetch)
}

module.exports = Wallet
