import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction.model';
import { TransactionService } from '../service/transaction.service';


@Component({
  selector: 'app-transactions-page',
  standalone: true,
  imports: [],
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

  onSave(transaction: Transaction) {
    if(transaction.id) {
      this.service.updateTransaction(transaction).subscribe(() => this.loadTransactions());
    } else {
      const {id, createdAt, ...createPayload} = transaction as any;
      this.service.createTransaction(createPayload).subscribe(() => this.loadTransactions());
    }

    this.editingTransaction = undefined;
  }

  // onDelete, onEdit methods

}
