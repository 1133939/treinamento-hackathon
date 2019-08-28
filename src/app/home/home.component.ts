import { Component, OnInit } from '@angular/core';
import { Partida } from '../model/partida.model';
import { Duelo } from '../model/duelo.model';
import { PersonagemService } from '../personagens.service';
import { PersonagemDto } from '../model/personagemDto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[PersonagemService]
})
export class HomeComponent implements OnInit {
  public partida : Partida = new Partida(null,null,null);
  public duelo : Duelo = new Duelo(null,null,null,null);
  public personagemVitorioso : PersonagemDto
  public mostrarHabilidade : boolean = false;
  public randomPersonagem : boolean = false;
  constructor(private service : PersonagemService) { }

  ngOnInit() {
  }
  
  randomPersonagens(){
    this.mostrarHabilidade=false;
    this.personagemVitorioso = undefined;
this.service.getRandomDuelo().subscribe((response:any)=>{
  this.duelo = response;
  this.randomPersonagem=true;
})
  }
  getHabilidade(){
    this.mostrarHabilidade = true;
  }
  getVencedor(){
    this.personagemVitorioso = this.duelo.personagemVitorioso;
  }


}
