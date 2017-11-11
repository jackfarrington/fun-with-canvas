import {Component, ElementRef, OnInit, ViewChild} from '@angular/core'

import {Ball} from './ball'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('myCanvas') myCanvasRef: ElementRef

  title = 'Fun with Canvas'
  initialBallCount = 20

  private ctx: CanvasRenderingContext2D
  private balls: Ball[]

  ngOnInit(): void {
    this.ctx = this.myCanvasRef.nativeElement.getContext('2d')
    this.reset(this.initialBallCount)

    requestAnimationFrame(() => this.draw())
  }

  reset(numBalls) {
    this.balls = []
    for (let i = 0; i < numBalls; i += 1) {
      this.balls.push(new Ball(this.ctx))
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  draw(): void {
    this.clear()
    this.balls.forEach(ball => {
      ball.update()
      ball.draw()
    })

    requestAnimationFrame(() => this.draw())
  }
}
