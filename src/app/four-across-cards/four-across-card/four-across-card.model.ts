export class fourAcrosscardModel {
    img: string;
    category: string;
    cardtitle: string;
    ratings: string;

    constructor(img: string, category: string, cardtitle: string, ratings: string){
        this.img= img;
        this.category = category;
        this.cardtitle = cardtitle;
        this.ratings = ratings;
    }
}