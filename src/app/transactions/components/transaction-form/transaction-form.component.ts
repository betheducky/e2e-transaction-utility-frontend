import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Transaction, TransactionType } from '../../models/transaction.model';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.scss'
})
export class TransactionFormComponent {

  @Input() transaction?: Transaction;

  @Output() save = new EventEmitter<Transaction>();
  @Output() cancel = new EventEmitter<void>();
  @Output() delete = new EventEmitter<string>();

  types: TransactionType[] = ['INCOME', 'EXPENSE'];

  formData: Transaction = this.getEmptyTransaction();

  getEmptyTransaction(): Transaction {
    return {
      id: '',
      description: '',
      amount: 0,
      type: 'EXPENSE',
      createdAt: '',
      updatedAt: '',
    }
  }

  ngOnChanges() {
    if(this.transaction) {
      this.formData = { ...this.transaction }
    } else {
      this.formData = this.getEmptyTransaction();
    }
  }

  onSubmit(form: any) {
    this.save.emit(this.formData);
    form.resetForm();
  }

  onCancel() {
    this.cancel.emit();
    this.formData = this.getEmptyTransaction();
  }
}
