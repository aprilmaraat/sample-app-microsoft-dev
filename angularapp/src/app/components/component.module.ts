import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MoneyDescriptionService } from './money-description.service';
import { MoneyDescriptionComponent } from './money-description/money-description.component';

@NgModule({
  declarations: [
    MoneyDescriptionComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    MoneyDescriptionComponent
  ],
  providers: [
    MoneyDescriptionService
  ]
})
export class ComponentsModule {
}