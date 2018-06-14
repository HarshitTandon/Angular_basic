import { Component, OnInit } from '@angular/core';

import {Hero} from './../hero';
import {HEROES} from './../mock-heroes';
import {HeroService} from './../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //heroes = HEROES
  heroes: Hero[]
  selectedHero: Hero
  // hero: Hero = {
  //   id : 1,
  //   name : 'Windstorm'
  // };
  constructor(private heroService: HeroService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  getHeroes(): void{

    // without Observable
   // this.heroes = this.heroService.getHeroes();
   
   // with Observable
   this.heroService.getHeroes()
   .subscribe((heroes) => this.heroes = heroes);

  }
  ngOnInit() {

    this.getHeroes();

  }

  

}
