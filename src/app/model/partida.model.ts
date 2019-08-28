import { Duelo } from './duelo.model';
import { PersonagemDto } from './personagemDto.model';

export class Partida{
    constructor(public duelos : Array<Duelo>, public heroiQueMaisVenceu : PersonagemDto, public segundoHeroiQueMaisVenceu : PersonagemDto){

    }
}