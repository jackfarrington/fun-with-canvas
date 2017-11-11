import {Randomize} from './randomize'

export class Ball {
  radius: number
  x: number
  y: number
  xVel: number
  yVel: number
  color: string

  private xBound: number
  private yBound: number

  constructor(private ctx: CanvasRenderingContext2D) {
    this.xBound = ctx.canvas.width
    this.yBound = ctx.canvas.height
    this.radius = Randomize.range(5, 20)
    this.x = Randomize.range(this.radius, this.xBound - this.radius)
    this.y = Randomize.range(this.radius, this.xBound - this.radius)
    this.xVel = Randomize.sign(Randomize.range(1, 3))
    this.yVel = Randomize.sign(Randomize.range(1, 3))
    this.color = Randomize.color()
  }

  private static drawCircle(ctx, x, y, radius, color) {
    if (color) {
      ctx.fillStyle = color
    }

    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.closePath()

    ctx.fill()
  }

  update() {
    this.x += this.xVel
    if (this.x + this.radius > this.xBound) {
      this.xVel = Math.abs(this.xVel) * -1
    }
    if (this.x - this.radius < 0) {
      this.xVel = Math.abs(this.xVel)
    }

    this.y += this.yVel
    if (this.y + this.radius > this.yBound) {
      this.yVel = Math.abs(this.yVel) * -1
    }
    if (this.y - this.radius  < 0) {
      this.yVel = Math.abs(this.yVel)
    }
  }

  draw() {
    Ball.drawCircle(this.ctx, this.x, this.y, this.radius, this.color)
  }
}
