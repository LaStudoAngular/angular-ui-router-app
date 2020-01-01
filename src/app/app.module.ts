import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// UI-ROUTER
import { UIRouterModule } from '@uirouter/angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

// STATES
const homeState = { name: 'home', url: '/home', component: HomeComponent };
const aboutState = { name: 'about', url: '/about', component: AboutComponent };

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent],
  imports: [BrowserModule, UIRouterModule.forRoot({ states: [homeState, aboutState], useHash: true })],
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
