import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DeleteModalComponent } from 'src/app/deleteModal/deleteModal.component';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss']
})
export class DashboardUserComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog
    ) { }

  ngOnInit() {
    this.dialog.closeAll();
  }

  onDelete(id) {
    this.dialog.open(DeleteModalComponent, {
      data: {
        id: id,
        routeTarget: "/ping/delete/",
        routeOrigin: "/dashboard-user",
        userType: 'user',
      }
    })
  }
}