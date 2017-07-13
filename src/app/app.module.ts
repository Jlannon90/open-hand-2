import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectsComponent } from './projects/projects.component';
import { AdminComponent } from './admin/admin.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AboutComponent } from './about/about.component';

import { routing } from './app.routing'; // add manually
import { masterFirebaseConfig } from './api-keys'; //add manually
import { AngularFireModule } from 'angularfire2'; //add manually
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { SortAmountPipe } from './sort-amount.pipe'; //add manually


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}; //add manually

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProjectsComponent,
    AdminComponent,
    ProjectDetailComponent,
    AboutComponent,
    EditProjectComponent,
    SortAmountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,  //add manually
    AngularFireModule.initializeApp(firebaseConfig), //add manually
    AngularFireDatabaseModule //add manually
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
