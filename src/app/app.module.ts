import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { ShoppingComponent } from './body/shopping/shopping.component';
import { ReceipeComponent } from './body/receipe/receipe.component';
import { ShoppingListComponent } from './body/shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './body/shopping/shopping-list-edit/shopping-list-edit.component';
import { DetailsComponent } from './body/receipe/details/details.component';
import { ItemComponent } from './body/receipe/receipe-list/item/item.component';
import { ReceiptListComponent } from './body/receipe/receipe-list/receipe-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ShoppingComponent,
    ReceipeComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DetailsComponent,
    ItemComponent,
    ReceiptListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
