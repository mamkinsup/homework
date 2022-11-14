function generateHashtag (str) {
    function toUpperCaseStr (letter) {
return letter.toUpperCase()
 }
     let myString = str.replace(/^.| \w/g, toUpperCaseStr)
     let myNewString= '#'+myString.replace(/ /g,'')
     if (myNewString.length<=1) {
      return false
     }
     if (myNewString.length<=140) {
  return  myNewString
     }
     if (myNewString.length>140) {
       return false
     }
}