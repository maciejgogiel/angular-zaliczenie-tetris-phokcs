import { Component, VERSION, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // onEnteredName;
  // titleChanged;
  // kark;
  // @ViewChild("maslo") maslo: ElementRef;
  // public greet() {
  //   const kark = this.maslo.nativeElement.value;
  //   console.log(kark);
  // }
  // show = true;
  // onLineCleared() {}
}
//   onTitleChanged($event: any) {
//     console.log($event);
//   }
// }

// @Directive({
//   selector: '[popup]'
// })

// export class AnnoyingPopupDirective implements OnInit {

//   @Input() popup = 1000;
//   @Input() popupColor = 'pink';

//   constructor(private viewContainerRef: ViewContainerRef,
//               private templateRef: TemplateRef<any>) {}

//   ngOnInit() {
//     setTimeout(() => {
//       const embeddedView = this.viewContainerRef.createEmbeddedView(this.templateRef);
//       embeddedView.rootNodes[0].style['background-color'] = this.popupColor;
//     }, this.popup);
//   }
// }
