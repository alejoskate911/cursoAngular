import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Tor'];
  heroeBorrados: string = '';

  borrarHeroe(){
    this.heroeBorrados= this.heroes.shift() || '';
  }


}
