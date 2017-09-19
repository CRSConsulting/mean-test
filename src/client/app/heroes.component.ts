import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { Mobile } from './mobile';
import { HeroService } from './hero.service';
import { MobileService } from './mobile.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  addingHero = false;
  addingMobile = false;
  heroes: any = [];
  mobiles: any = [];
  selectedHero: Hero;
  selectedMobile: Mobile;

  constructor(private heroService: HeroService, private mobileService: MobileService) { }

  ngOnInit() {
    this.getHeroes();
    this.getMobiles();
  }

  cancel() {
    this.addingHero = false;
    this.selectedHero = null;
  }

  deleteHero(hero: Hero) {
    this.heroService.deleteHero(hero).subscribe(res => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) {
        this.selectedHero = null;
      }
    });
  }

  getHeroes() {
    return this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  getMobiles() {
    return this.mobileService.getMobiles().subscribe(mobiles => {
      this.mobiles = mobiles;
    });
  }

  enableAddMode() {
    this.addingHero = true;
    this.selectedHero = new Hero();
  }

  onSelect(hero: Hero) {
    this.addingHero = false;
    this.selectedHero = hero;
  }

  saveHero() {
    if (this.addingHero) {
      this.heroService.addHero(this.selectedHero).subscribe(hero => {
        this.addingHero = false;
        this.selectedHero = null;
        this.heroes.push(hero);
      })
    } else {
      this.heroService.updateHero(this.selectedHero).subscribe(hero => {
        this.addingHero = false;
        this.selectedHero = null;
      });
    }
  }
  saveMobile() {
    if (this.addingMobile) {
      this.mobileService.addMobile(this.selectedMobile).subscribe(mobile => {
        this.addingMobile = false;
        this.selectedMobile = null;
        this.mobiles.push(mobile);
      })
    }
  }
}
