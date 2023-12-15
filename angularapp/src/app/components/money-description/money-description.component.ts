import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MoneyDescriptionService } from '../money-description.service';

@Component({
  selector: 'app-money-description',
  templateUrl: './money-description.component.html',
  styleUrls: ['./money-description.component.scss']
})
export class MoneyDescriptionComponent {
  public amountPlaceholder: string = '0 - 999999999.99';
  validateForm!: UntypedFormGroup;
  amountErrorTip: string = 'Must enter valid money amount from 0 - 999999999.99';
  moneyDescription: string = '';

  constructor(
    private formBuilder: UntypedFormBuilder,
    private moneyDescriptionService: MoneyDescriptionService) {
    this.validateForm = this.formBuilder.group({
      amount: [null, [Validators.required]]
    });
  }

  submit() {
    let amount = this.validateForm.get("amount")?.value;
    this.moneyDescriptionService.getMoneyDescription(amount).subscribe({
        next: response => {
          this.moneyDescription = response.moneyDescription;
        }, error: data => {
          console.log('Error', data);
        }
      });
  }
}