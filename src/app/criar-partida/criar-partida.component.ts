import { Component, OnInit } from '@angular/core';
import { PersonagemService } from '../personagens.service';
import { Partida } from '../model/partida.model';
import { PersonagemDto } from '../model/personagemDto.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-criar-partida',
  templateUrl: './criar-partida.component.html',
  styleUrls: ['./criar-partida.component.css'],
  providers:[PersonagemService]
})
export class CriarPartidaComponent implements OnInit {
  public partida : Partida = new Partida(null,null,null);
  public mutante : PersonagemDto = new PersonagemDto(null,null,null,null,null,null,null,null,null)
  public criarMutanteBoolean : boolean = false;
  public form : FormGroup = new FormGroup({
    'nome' : new FormControl(null,[Validators.required, Validators.minLength(2), Validators.maxLength(20)])
  })
  constructor(private service : PersonagemService) { }

  ngOnInit() {
  }
  fazerJogada(){
      this.service.fazerJogada(this.partida).subscribe((response:any)=>{
        this.partida=response;
        if(this.partida.duelos.length==10){
          this.criarMutanteBoolean = true;
        }
        console.log(this.partida)
      })

  }
  criarMutante(){
    this.service.criarMutante(this.partida).subscribe((response:any)=>{
      this.mutante=response;
      console.log(this.mutante)
      this.criarMutanteBoolean = false;
    })
  }

  salvarMutante(){
    this.form.get('nome').markAsTouched()
    if(this.form.valid){
    this.partida.heroiQueMaisVenceu.nome=this.form.get('nome').value
    this.service.criarMutante(this.partida).subscribe((response:any)=>{
      this.mutante=response;
      console.log(this.mutante)
      this.criarMutanteBoolean = false;
    })
  }   
}
}
