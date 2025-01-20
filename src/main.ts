import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http'; // Importiere provideHttpClient

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withEnabledBlockingInitialNavigation(), // Standardmäßige initiale Navigation aktivieren
      withInMemoryScrolling({ 
        scrollPositionRestoration: 'enabled', // Scroll-Position wiederherstellen
        anchorScrolling: 'enabled', // Aktiviert Scrollen zu Ankern (#id)
      })
    ),
    provideHttpClient(), // HttpClient bereitstellen
  ],
}).catch((err) => console.error(err));





