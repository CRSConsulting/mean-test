import { Component, OnInit } from '@angular/core';
import { Mobile } from './mobile';
import { MobileService } from './mobile.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html'
})
export class MobilesComponent implements OnInit {
  addingMobile = false;
  mobiles: any = [];
  selectedMobile: Mobile;

  constructor(private mobileService: MobileService) { }

  ngOnInit() {

  }

  cancel() {
    this.addingMobile = false;
    this.selectedMobile = null;
  }


  getMobiles() {
    return this.mobileService.getMobiles().subscribe(mobiles => {
      this.mobiles = mobiles;
      console.log('GET 1000 documents', mobiles);
    });
  }

  enableAddMode() {
    this.addingMobile = true;
    this.selectedMobile = new Mobile();
  }

  onSelect(mobile: Mobile) {
    this.addingMobile = false;
    this.selectedMobile = mobile;
  }

  save() {
    if (this.addingMobile) {
      this.mobileService.addMobile(this.selectedMobile).subscribe(mobile => {
        this.addingMobile = false;
        this.selectedMobile = null;
        this.mobiles.push(mobile);
      })
    } else {
      console.log('hello world');
    }
  }

  insertManyObjs() {
   return this.mobileService.insertManyObjs(this.selectedMobile).subscribe(mobile => {
      console.log('1000 Documents POSTED successfully', mobile)
    })
  }
}
