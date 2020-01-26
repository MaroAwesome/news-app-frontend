import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ListAllComponent } from "./list-all/list-all.component";
import { HttpClientModule } from "@angular/common/http";
import { HeadComponent } from "./head/head.component";
import { NewsCardComponent } from "./news-card/news-card.component";
import { MaterialModule } from "./material/material.module";
import { NewsDisplayComponent } from "./news-display/news-display.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddNewsComponent } from "./add-news/add-news.component";

@NgModule({
  declarations: [
    AppComponent,
    ListAllComponent,
    HeadComponent,
    NewsCardComponent,
    NewsDisplayComponent,
    AddNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddNewsComponent]
})
export class AppModule {}
