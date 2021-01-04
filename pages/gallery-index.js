export class slide{
    constructor(title, caption, image, link){
        this.title = title;
        this.caption = caption;
        this.image = image;
        this.link = link;
    }
}

export var slides = [new slide("john", "he is john", "pages/gallery/Cat_tower_defense/projectHeaderImage.png", "https://www.bbc.co.uk/"),
    new slide("jack", "he is jack", "pages/gallery/Room_builder/projectHeaderImage.png", "https://twitter.com/"),
    new slide("james", "he is james", "pages/gallery/EPQ_project/projectHeaderImage.png", "https://www.google.com/")
];