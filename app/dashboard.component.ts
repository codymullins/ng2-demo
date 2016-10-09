import { Component, OnInit } from '@angular/core';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-dashboard',
  template: `
  <h2>Top Heroes</h2>
<div class="grid grid-pad">
  <div *ngFor="let hero of heroes" (click)="gotoDetail(hero)" class="col-1-4">
    <div class="module hero">
      <h4>{{hero.name}}</h4>
    </div>
  </div>
</div>
`
})
export class DashboardComponent implements OnInit { 
   heroes: Hero[] = [];

   constructor(private heroService: HeroService){

    }

    ngOnInit():void{
        this.heroService.getHeroes().then(
            heroes => this.heroes = heroes.slice(0,4)
            );
    }
}
