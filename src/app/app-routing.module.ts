import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GamePageComponent } from "./pages/game-page/game-page.component";
import { IntroPageComponent } from "./pages/intro-page/intro-page.component";

const routes: Routes = [
    { path: '', component: IntroPageComponent },
    { path: 'game', component: GamePageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }