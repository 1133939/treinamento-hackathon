import { PersonagemDto } from './personagemDto.model';
import { Partida } from './partida.model';

export class Duelo{
    constructor(public personagens : Array<PersonagemDto>, public personagemVitorioso : PersonagemDto, public partida : Partida, public atributo : number){

    }
}