import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { TetrisCoreModule } from "ngx-tetris";
import { KEY_SLASH, KEY_N, KEY_ESCAPE } from "keycode-js";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello/hello.component";
import { GameComponent } from "./game/game.component";
import { NgIfSimple } from "./ngif.component";
// import { NgIfSimple2 } from "./2ngif.component";
import { HotkeyModule } from "angular2-hotkeys";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TetrisCoreModule,
    HotkeyModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    GameComponent,
    NgIfSimple
    // NgIfSimple2
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

// export const MODE_NONE = "none";
// export const MODE_SEARCH = "game.actionStart()";
// export const MODE_CREATE = "game.actionStart()";

// export function getNextModeByKey(current, keyPressed) {
//   switch (current) {
//     case MODE_NONE:
//       if (keyPressed === KEY_SLASH) return MODE_SEARCH;
//       if (keyPressed === KEY_N) return MODE_CREATE;

//       break;

//     default:
//       if (keyPressed === KEY_ESCAPE) return MODE_NONE;
//   }

//   return current;
// }
