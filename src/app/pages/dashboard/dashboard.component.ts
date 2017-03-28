import {Component, Injectable} from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
@Injectable()
export class Dashboard {
  public data: any = null;
  public totalCountView: number = 0;
  constructor(private dashservice: DashboardService) {
  }
  ngOnInit() {
    let that = this
    this.dashservice.getDashboard().subscribe(function (data) {
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
