import {Component, Injectable} from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
@Injectable()
export class Dashboard {
  public data: any = null;
  public totalCountView: number = 0;
  public startDate: DateModel;
  public endDate: DateModel;
  public options: DatePickerOptions;
  constructor(private dashservice: DashboardService) {
    this.options = new DatePickerOptions();
  }
  ngOnInit() {
    let that = this;
    let dateObj = {
      startDate: '',
      endDate: ''
    }
    this.dashservice.getDashboard(dateObj).subscribe(function (data) {
      that.data = data;
      function add(a, b) {
        return a + b;
      }

      let total = 0;
      that.totalCountView = that.data.trafficData.map(function (d) {
        return d.value;
      }).reduce(add, 0);
    });
  }
  dateClear() {
    let that = this;
    that.startDate = DateModel;
    that.endDate = DateModel;
    let dateObj = {
      startDate: '',
      endDate: ''
    }
    this.dashservice.getDashboard(dateObj).subscribe(function (data) {
      that.data = data;
      function add(a, b) {
        return a + b;
      }

      let total = 0;
      that.totalCountView = that.data.trafficData.map(function (d) {
        return d.value;
      }).reduce(add, 0);
    });
  }
  dateChange() {
    let that = this;
    let dateObj = {
      startDate: that.startDate.formatted,
      endDate: that.endDate.formatted
    }
    this.dashservice.getDashboard(dateObj).subscribe(function (data) {
      that.data = data;
      function add(a, b) {
        return a + b;
      }

      let total = 0;
      that.totalCountView = that.data.trafficData.map(function (d) {
        return d.value;
      }).reduce(add, 0);
    });
  }
}
