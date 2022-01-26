function randomCaptchaWord (length) {
  var word = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    word += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return word
}