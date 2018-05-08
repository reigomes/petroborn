import {Injectable} from '@angular/core';
import brokers from './mock-brokers';

@Injectable()
export class BrokerService {
	brokers: Array<any> = brokers;

  findAll() {
      return this.brokers;
  }

  findById(id) {
      return Promise.resolve(this.brokers[id - 1]);
  }

  getItem(id) {
    for (var i = 0; i < this.brokers.length; i++) {
      if (this.brokers[i].id === parseInt(id)) {
        return this.brokers[i];
      }
    }
    return null;
  }

}
