import {Component} from '@angular/core';
import 'bootstrap/less/bootstrap.less';
import 'font-awesome/less/font-awesome.less';
import 'simple-line-icons/less/simple-line-icons.less';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';
import 'nprogress/nprogress.css';
import '../../styles/less/main.less';

@Component({
    selector: 'root',
    template:require('./views/app.html'),
})
export class RootComponent {}