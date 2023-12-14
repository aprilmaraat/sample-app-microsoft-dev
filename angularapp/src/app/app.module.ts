import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { SharedModule } from './shared/shared.module';
import { MoneyDescriptionComponent } from './components/money-description/money-description.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/component.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    // MoneyDescriptionComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule,
    ComponentsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
