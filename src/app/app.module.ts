import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import { TagComponent } from './components/tag/dot5.components.tag.ts.component';
import { TagContainer } from './container/tag/dot5.container.tag.ts.component';
import { TagChildrenComponent } from './components/tagchildren/dot5.components.tagchildren';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**Angular Material */
import { MatButtonModule }    from '@angular/material/button';
import { MatInputModule }     from '@angular/material/input';
import { MatIconModule }      from '@angular/material/icon';
import { MatDialogModule }    from '@angular/material/dialog';
import { AddmodalComponent }  from './components/modal/dot5.addmodal.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    TagComponent,
    TagContainer,
    TagChildrenComponent,
    AddmodalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
