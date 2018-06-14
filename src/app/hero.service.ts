import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import { of } from 'rxjs/observable/of';
import {MessageService} from './message.service'

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  // getHeroes(): Hero[] {
  //   this.messageService.add('HeroService: fetched Heroes');  
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {

    this.messageService.add('HeroService: fetched Heroes');
    return of(HEROES);     // of(HEROES) returns an observable<Hero[]>
                           // that emits a single value, array of heroes

  }

}
