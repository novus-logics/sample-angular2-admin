
import { Component, Injectable } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';



@Component({
    selector: 'dashboard-new',
    styleUrls: ['./dashboard.scss'],
    templateUrl: './dashboard-new.html'
})
@Injectable()
export class DashboardNew {
    public data: any = null;
    public dataLine: any = null;
    public allData: any;
    constructor( private dashservice: DashboardService) {
    }

    ngOnInit() {
        let that = this
        this.dashservice.getDashpie().subscribe(function (data) {
            that.data = data;
        });
    }
}
