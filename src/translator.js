export default class Translation {

  static counter(string) {
    return string.split(' ').length;
  }

  static translator(originalString, dinoArray) {
    const originalArray = originalString.split(' ');
    let translatedArray = [];
    for (let index = 0; index < originalArray.length; index ++) {
      translatedArray.push(originalArray[index].replace(/\w+/ig, dinoArray[index]));
    }
    return translatedArray.join(" ");
  }
}