import {Collegue} from '../domain/collegue';

export class Vote {

    constructor(public id:number, public collegue:Collegue, public avis:string, public score:number) {

    }

}
