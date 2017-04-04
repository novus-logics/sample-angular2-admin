
import { Component, Injectable } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';


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
    public startDate: DateModel;
    public endDate: DateModel;
    public options: DatePickerOptions;
    constructor( private dashservice: DashboardService) {
        this.options = new DatePickerOptions();
    }

    ngOnInit() {
        let that = this;
        let dateObj = {
            startDate: '',
            endDate: ''
        }
        this.dashservice.getDashpie(dateObj).subscribe(function (data) {
            that.data = data;
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
        this.dashservice.getDashpie(dateObj).subscribe(function (data) {
            that.data = data;
        });
    }
    dateChange() {
        let that = this;
        let dateObj = {
            startDate: that.startDate.formatted,
            endDate: that.endDate.formatted
        }
        this.dashservice.getDashpie(dateObj).subscribe(function (data) {
            that.data = data;
        });
    }
}
