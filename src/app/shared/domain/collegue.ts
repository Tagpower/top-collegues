export class Collegue {

    constructor(private _nom:string, private _image:string, private _score:number=100) {

    }

    get nom() {
        return this._nom;
    }

    get image() {
        return this._image;
    }

    get score() {
        return this._score;
    }

    set score(newscore:number) {
        this._score = newscore;
    }

}
