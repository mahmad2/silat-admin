import { Routes } from '@angular/router';

import { ShopComponent } from './shop/shop.component';
import { CardComponent } from './cards/cards.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { InvoiceComponent } from './invoice/invoice.component';

export const EcommerceRoutes: Routes = [
   {
      path: '',
      redirectTo: 'shop',
      pathMatch: 'full',
   },
   {
      path: '',
      children: [
         {
            path: 'shop',
            component: ShopComponent
         },
         {
            path: 'cart',
            component: CartComponent
         },
         {
            path: 'checkout',
            component: CheckoutComponent
         },
         {
            path: 'cards',
            component: CardComponent
         },
         {
            path: 'invoice',
            component: InvoiceComponent
         }
      ]
   }
];
