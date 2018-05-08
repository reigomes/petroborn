import {Injectable} from '@angular/core';
import invoices from './mock-invoices';

@Injectable()
export class InvoiceService {

  invoiceCounter: number = 0;
  invoices: Array<any> = invoices;

  constructor() {
      console.log('mock invoices: ', invoices);
      console.log(this.invoices)
  }

  getInvoices() {
    return Promise.resolve(this.invoices);
  }

}
