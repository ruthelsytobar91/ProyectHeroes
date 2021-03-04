import { Component, OnInit } from '@angular/core';
import { Hero } from './../hero';
import { HEROES } from './../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
   heroes = HEROES;
   selectedHero?: Hero;
   total: number = 0;
   registro: String;


   constructor() {    }

   ngOnInit() {
     this.sumHeroId();
     this.datoId();

    }

   onSelect(hero: Hero): void {
     this.selectedHero = hero;
   }

   public sumHeroId(){

     for(var hero of this.heroes){
       this.total = this.total + hero.id
     }
   }

   public datoId(){
     for(var hero of this.heroes){
      if(hero.id == 12){
        this.registro = "Registro Existe"
        break
      } else {
        this.registro = "Registro no existe"
      }

     }
   }



}
