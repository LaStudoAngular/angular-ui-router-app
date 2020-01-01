import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// UI-ROUTER
import { UIRouterModule } from '@uirouter/angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { uiRouterConfigFn } from './config/router.config';

// COMPONENTS
import { AppComponent } from './app.component';
import { INITIAL_COMPONENTS } from './config/states';

// STATES
import { INITIAL_STATES } from './config/states';
import { PeopleComponent } from './components/people/people.component';

@NgModule({
  declarations: [AppComponent, ...INITIAL_COMPONENTS, PeopleComponent],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({
      states: INITIAL_STATES,
      useHash: true,
      config: uiRouterConfigFn
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(ref => {
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
  })
  .catch(error => console.error(error));
