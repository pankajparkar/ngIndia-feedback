import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/routes';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserAnimationsModule),
        provideRouter(routes),
    ]
});