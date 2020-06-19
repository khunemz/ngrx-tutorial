import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoreModule} from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from '../shared/shared.module';
import { ProductShellComponent } from './product-shell/product-shell.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { reducer } from './state/product.reducer';

const productRoutes: Routes = [
  { path: '', component: ProductShellComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(productRoutes) , 
    StoreModule.forFeature('products' ,reducer) , 
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  declarations: [
    ProductShellComponent,
    ProductListComponent,
    ProductEditComponent
  ]
})
export class ProductModule { }
