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
  mobile: Mobile;

  constructor(private mobileService: MobileService) { }

  ngOnInit() {

  }

  getMobiles() {
    console.log('getManyObjs start', Date.now())
    return this.mobileService.getMobiles().subscribe(mobiles => {
      this.mobiles = mobiles;
      console.log('GET 1000 documents', Date.now());
    });

  }

  insertManyObjs() {
    console.log('insertManyObjs start', Date.now())
   return this.mobileService.insertManyObjs(this.mobile).subscribe(mobile => {
      console.log('1000 Documents POSTED successfully', Date.now())
    })
  }
}
