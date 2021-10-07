import { BrowserModule } from '@angular/platform-browser';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule, FormsModule, RichTextEditorAllModule, BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }