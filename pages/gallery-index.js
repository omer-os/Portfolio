export class slide{
    constructor(title, caption, image, link){
        this.title = title;
        this.caption = caption;
        this.image = image;
        this.link = link;
    }
}
export var slides = [new slide("john", "he is john", "gallery/Cat_tower_defense/projectHeaderImage.png"),
    new slide("james", "he is james", "gallery/EPQ_project/projectHeaderImage.png"), 
    new slide("jack", "he is jack", "gallery/Room_builder/projectHeaderImage.png")
];