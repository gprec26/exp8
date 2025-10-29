import 'zone.js';  // In TERMINAL npm install zone.ts
 import { bootstrapApplication } from '@angular/platform-browser';
 import { App } from './app/app';
 import { provideHttpClient } from '@angular/common/http';
 bootstrapApplication(App, {
  providers: [provideHttpClient()]
 });