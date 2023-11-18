import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './pages/game-page/board/board.component';
import { InfoPanelComponent } from './pages/game-page/info-panel/info-panel.component';
import { FunctionalPanelComponent } from './pages/game-page/functional-panel/functional-panel.component';
import { ChoosePanelComponent } from './pages/intro-page/choose-panel/choose-panel.component';
import { LogoComponent } from './common/logo/logo.component';
import { MarkToggleComponent } from './pages/intro-page/mark-toggle/mark-toggle.component';
import { AppInjector } from './app-injector';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { AppRoutingModule } from "./app-routing.module";
import { LocalService } from './services/local.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    InfoPanelComponent,
    FunctionalPanelComponent,
    ChoosePanelComponent,
    LogoComponent,
    MarkToggleComponent,
    GamePageComponent,
    IntroPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    AppInjector.setInjector(injector);
  }
}
