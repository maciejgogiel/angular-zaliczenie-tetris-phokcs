import { Component, VERSION, ViewChild } from "@angular/core";
import { TetrisCoreComponent } from "ngx-tetris";
import { Hotkey, HotkeysService } from "angular2-hotkeys";
import { OnInit, AfterViewInit } from "@angular/core";
import { fromEvent } from "rxjs";
import { map, tap, scan } from "rxjs/operators";
@Component({
  selector: "game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
// AfterViewInit --> do ogarniecia
export class GameComponent implements AfterViewInit {
  lineCounter = 0;
  lastScore = 0;
  highscore = 0;
  // highscoreToString = "";

  ngAfterViewInit() {
    // console.log(JSON.stringify(this._tetris));
  }

  onLineCleared(): void {
    this.lineCounter++;
  }

  public onGameOver() {
    // alert("You lose")
    this.lastScore = this.lineCounter;

    this.lineCounter = 0;

    // this.highscore = Number(this.highscore);

    // if (this.lastScore > parseInt(localStorage.getItem("highscore"), 10)) {
    //   localStorage.setItem("highscore", this.highscore.toString());
    // {
    //   if (this.lineCounter > this.highscore) console.log(this.highscore);
    //   this.highscore = this.lineCounter;
    // }
  }

  @ViewChild("game")
  private _tetris: TetrisCoreComponent;

  public moveLeft = false;
  public moveDown = false;
  public moveRight = false;
  public rotate = false;
  public start = false;
  public stop = false;
  public reset = false;

  constructor(private _hotkeysService: HotkeysService) {
    this._addHotkeys();
  }

  public onRotateButtonPressed() {
    this._tetris.actionRotate();
  }

  private _addHotkeys() {
    this._hotkeysService.add(
      new Hotkey(
        "up",
        (event: KeyboardEvent): boolean => {
          this._tetris.actionRotate();
          return false; // Prevent bubbling
        }
      )
    );

    this._hotkeysService.add(
      new Hotkey(
        "left",
        (event: KeyboardEvent): boolean => {
          this._tetris.actionLeft();
          return false; // Prevent bubbling
        }
      )
    );

    this._hotkeysService.add(
      new Hotkey(
        "down",
        (event: KeyboardEvent): boolean => {
          this._tetris.actionDown();
          return false; // Prevent bubbling
        }
      )
    );

    this._hotkeysService.add(
      new Hotkey(
        "right",
        (event: KeyboardEvent): boolean => {
          this._tetris.actionRight();
          return false; // Prevent bubbling
        }
      )
    );
    this._hotkeysService.add(
      new Hotkey(
        "[",
        (event: KeyboardEvent): boolean => {
          this._tetris.actionStop();
          return false; // Prevent bubbling
        }
      )
    );
    this._hotkeysService.add(
      new Hotkey(
        "]",
        (event: KeyboardEvent): boolean => {
          this._tetris.actionStart();
          return false; // Prevent bubbling
        }
      )
    );
  }
}
