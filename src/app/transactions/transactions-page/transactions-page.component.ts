import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { TransactionService } from '../service/transaction.service';
import { TransactionFormComponent } from '../components/transaction-form/transaction-form.component';
import { TransactionListComponent } from '../components/transaction-list/transaction-list.component';


@Component({
  selector: 'app-transactions-page',
  standalone: true,
  imports: [TransactionFormComponent, TransactionListComponent],
  templateUrl: './transactions-page.component.html',
  styleUrl: './transactions-page.component.scss'
})
export class TransactionsPageComponent implements OnInit{
  transactions: Transaction[] = [];
  viewMode: 'ALL' | 'EXPENSE' | 'INCOME' = 'ALL';
  editingTransaction?: Transaction;

  constructor( private service: TransactionService){}

  ngOnInit() {
    this.loadTransactions();
  }

  loadTransactions() {
    this.service.getTransactions().subscribe(data => {
      this.transactions = data;
    });
  }

  getVisibleTransactions() {
    if(this.viewMode === 'ALL') return this.transactions;
    return this.transactions.filter((transaction) => transaction.type === this.viewMode);
  }

  onSave(transaction: Transaction) {
    if(transaction.id) {
      this.service.updateTransaction(transaction).subscribe(() => this.loadTransactions());
    } else {
      const {id, createdAt, ...createPayload} = transaction as any;
      this.service.createTransaction(createPayload).subscribe(() => this.loadTransactions());
    }

    this.editingTransaction = undefined;
  }

  onDelete(id: string) {
    this.service.deleteTransaction(id).subscribe(() => this.loadTransactions());
  }

  onEdit(transaction: Transaction) {
    this.editingTransaction = transaction;
  }


}
