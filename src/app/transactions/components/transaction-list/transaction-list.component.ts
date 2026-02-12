import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../../models/transaction.model';
import { NgClass } from "../../../../../node_modules/@angular/common/index";

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss'
})
export class TransactionListComponent {
    @Input() selected: Transaction | undefined = undefined;
    @Input() transactions: Transaction[] = [];
    @Output() edit = new EventEmitter<Transaction>();
    @Output() delete = new EventEmitter<string>();

    onEdit(tx: Transaction) {
      this.edit.emit(tx);
    }

    onDelete(id: string){
      this.delete.emit(id);
    }

}
