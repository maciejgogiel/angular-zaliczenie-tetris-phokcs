import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild
} from "@angular/core";
// import { NgIfSimple2 } from "./2ngif.component";

@Component({
  selector: "hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.css"]
})
export class HelloComponent {
  @Input() name;
  @Input() odRodzica;
  // kark;

  @Output() titleChanged = new EventEmitter<string>();

  playerName = "";
  isShowGame = false;

  onKeydownEvent($event: any) {
    // console.log($event.target.value);

    if ($event.keyCode !== 13) {
      // console.log($event.target.value);
      this.playerName = $event.target.value;
    } else {
      this.isShowGame = true;
      this.titleChanged.emit(this.playerName);
    }
  }
}

//<button (click)="myFunction()">Try it</button>
// myFunction() {
//   var x = document.getElementById("input");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// @Component({
//   selector: "app-key-up3",
//   template: `
//     <input #box (keyup.enter)="onEnter(box.value)" />
//     <p>{{ value }}</p>
//   `
// })
// export class KeyUpComponent_v3 {
//   value = "";
//   onEnter(value: string) {
//     this.value = value;
//   }
// }

// <form action="/action_page.php">
//   <label for="fname">Name:</label>
//   <input type="text" id="fname" name="fname"><br><br>

//   <input type="submit" value="Submit">
// </form>
