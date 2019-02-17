import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Coche,EstadoCoche } from './coche';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Micropráctica ANGULAR - 02';
  public EstadoCoche:any = EstadoCoche;
  public coches:Array<Coche>= [ new Coche('renault','scenic',new Date(2007,10,1),
  new Date(2018,3,1),5000,'renaultscenic.jpg',EstadoCoche.BUENO),
  new Coche ( 'seat' , 'ibiza' , new Date ( 2003 , 4 , 12 ), new
  Date ( 2018 , 2 , 1 ), 1200 , 'seatibiza.png' , EstadoCoche . BUENO ),
  new Coche ( 'renault' , 'megane' , new Date ( 2006 , 12 , 23 ), new
  Date ( 2018 , 9 , 23 ), 3500 , 'renaultmegane.jpg' , EstadoCoche.MALO ),
  new Coche ( 'citroen' , 'C5' , new Date ( 2012 , 6 , 7 ), new
  Date ( 2019 , 2 , 17 ), 7000 , 'citroenc5.jpg' , EstadoCoche.BUENO ),
  new Coche ( 'citroen' , 'C3' , new Date ( 2011 , 11 , 20 ), new
  Date ( 2019 , 1 , 10 ), 3500 , 'citroenc3.jpg' , EstadoCoche.BUENO )];

  public filtro:string='';

  public getFiltrados():Array<number>{
    var filtrados:Array<number>=[];
    var indice:number=0;
    for(var coche of this.coches)
    {
      if (coche.marca.lastIndexOf(this.filtro, 0) === 0)
    filtrados.push(indice);
    indice=indice+1;
    }
    return filtrados;
  
    }

  public cmd_vender(id)
    {
      this.coches.splice(id,1);
    }
  public cmd_rebajar(id)
  {
	  this.coches[id].rebajar(); 
  }
  }
