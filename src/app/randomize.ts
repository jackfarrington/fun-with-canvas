export class Randomize {

  private static rgbStr(r, g, b) {
    return 'rgb(' + r + ',' + g + ',' + b + ')'
  }

  static range(min, max) {
    return Math.floor(Math.min(max, min) + Math.random() * Math.abs(max - min + 1))
  }

  static sign(num) {
    return Randomize.range(0, 1) === 0 ? num : num * -1
  }

  static color() {
    return Randomize.rgbStr(Randomize.range(0, 255), Randomize.range(0, 255), Randomize.range(0, 255))
  }
}
