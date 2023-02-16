export class sixcardModel {
    img: string;
    category: string;
    cardtitle: string;
    ratings: number;

    constructor(img: string, category: string, cardtitle: string, ratings: number){
        this.img= img;
        this.category = category;
        this.cardtitle = cardtitle;
        this.ratings = ratings;
    }
}