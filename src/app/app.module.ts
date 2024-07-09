import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ProductRowComponent } from './product-list/product-row/product-row.component';
import { ProductImageComponent } from './product-list/product-image/product-image.component';
import { ProductDepartmentComponent } from './product-list/product-department/product-department.component';
import { PriceDisplayComponent } from './product-list/price-display/price-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavigationComponent,
    BreadcrumbsComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    PriceDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
