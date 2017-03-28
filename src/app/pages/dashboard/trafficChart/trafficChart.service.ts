import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class TrafficChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }


  getData() {
    let dashboardColors = this._baConfig.get().colors.dashboard;
    return [
      {
        value: 25000,
        label: 'Other'
      }, {
        value: 1500,
        label: 'Search engines'
      }, {
        value: 1000,
        label: 'Referral Traffic'
      }, {
        value: 1200,
        label: 'Direct Traffic'
      }, {
        value: 400,
        label: 'Ad Campaigns'
      },
    ];
  }
}
