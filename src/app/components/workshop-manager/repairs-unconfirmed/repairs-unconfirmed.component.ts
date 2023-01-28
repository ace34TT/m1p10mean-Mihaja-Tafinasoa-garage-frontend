import { Component, OnInit } from '@angular/core';
import { WorkshopManagerService } from 'src/app/services/workshop-manager/workshop-manager.service';

@Component({
  selector: 'app-repairs-unconfirmed',
  templateUrl: './repairs-unconfirmed.component.html',
  styleUrls: ['./repairs-unconfirmed.component.scss'],
})
export class RepairsUnconfirmedComponent {
  repairs!: any;
  constructor(private workshopManagerService: WorkshopManagerService) {}
  ngOnInit() {
    this.workshopManagerService.repairsUnconfirmed().subscribe((res) => {
      console.log(res);
      this.repairs = this.refactoUnconfirmedRepairs(res);
      console.log(this.repairs);
    });
  }
  refactoUnconfirmedRepairs(repairs: any) {
    let refacto = [{}];
    console.log('unconfirmed');
    console.log(repairs);
    // for (const tabRefacto of repairs) {
    //   for (const element of tabRefacto.repairs) {
    //     refacto.push({
    //       _id: tabRefacto._id,
    //       repairId: element._id,
    //       firstname: tabRefacto.firstname,
    //       lastname: tabRefacto.lastname,
    //       registration_number: element.car.registration_number,
    //       model: element.car.model,
    //     });
    //   }
    // }
    for (const tabRefacto of repairs) {
      refacto.push({
        _id: tabRefacto._id,
        repairId: tabRefacto._id,
        firstname: tabRefacto.firstname,
        lastname: tabRefacto.lastname,
        registration_number: tabRefacto._id,
        model: tabRefacto._id,
      });
    }
    return refacto;
  }
}
