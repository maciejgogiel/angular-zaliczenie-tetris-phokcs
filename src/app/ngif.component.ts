import { Component, VERSION } from "@angular/core";
// komponent służy do włączania/wyłączania gry + grafiki z dźwiękiem
@Component({
  selector: "ng-if-simple",
  template: `
    <br />
    <div *ngIf="show">
      <iframe
        (click)="show = show"
        src="https://th.bing.com/th/id/R6f3feb9c683d7fefcaf8fd086fde85b0?rik=JvOYQZp5afHdkQ&riu=http%3a%2f%2fbenonicitytimes.co.za%2fwp-content%2fuploads%2fsites%2f26%2f2016%2f07%2f55583077.jpg&ehk=JWWH8DnN1cYEucokYjngIgEEixC%2fsEOs6n%2fd1Eefv9U%3d&risl=&pid=ImgRaw"
        title="Tetris"
        width="400"
        height="400"
      ></iframe>
      <iframe
        width="0"
        height="0"
        src="https://www.youtube.com/embed/SH8wDkqA_50?autoplay=1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <br />
    <button class="button" (click)="show = !show">
      {{ show ? "Nowa gra" : "Koniec gry" }}
    </button>

    <br />
    <div *ngIf="!show">
      <game></game>
    </div>
  `,
  styles: [
    `
      .button {
        background-color: #4caf50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
      }
    `
  ]
})
export class NgIfSimple {
  show = true;
}
