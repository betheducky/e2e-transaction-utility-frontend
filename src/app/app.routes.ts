import { Routes } from '@angular/router';
import { TransactionsPageComponent } from './transactions/transactions-page/transactions-page.component';

export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: 'home', component: TransactionsPageComponent}
];
