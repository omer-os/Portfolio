export class slide{
    constructor(title, caption, image, imagePos, link){
        this.title = title;
        this.caption = caption;
        this.image = image;
        this.imagePos = imagePos;
        this.link = link;
    }
}

export var slides = [
    new slide(
        "VR interaction system and physics engine", 
        "A project done for my EPQ, during post-16, where I aimed to create a virtual reality environment where the user could grab and interact with objects in a semi-physics based \
        environment.<br><br>This system was my introduction to Unreal Engine and mainly used its \"Blueprint\" visual language, however I later used C++ to try and add my own physics \
        to it.", 
        "./pages/gallery/epq-project/projectHeaderImage.png", 
        "object-position: center;",
        "./pages/gallery/epq-project/epq-project.html"
        ),
    new slide(
        "Tower defence game", 
        "A project I created with a friend to help us gain a better understanding of pygame. <br><br> This was a basic tower defence game but featured a fully scalable and customisable \
        level system allowing users to add their own levels and towers. One of my earliest projects, this is something I have revisited and improved upon quite a few times.", 
        "./pages/gallery/cat-tower-defence/projectHeaderImage.png", 
        "object-position: top;",
        "./pages/gallery/cat-tower-defence/cat-tower-defence.html"
        ),
    new slide(
        "House designer", 
        "Originally a task given to do in a school lesson with a text interface, this became a small personal project that I added many other features to.<br><br> It included \
        a graphical interface that allowed the user to draw, move and label rooms as well as set the painting and carpeting price which could later be used to calculate \
        full decoration costs.", 
        "./pages/gallery/room-builder/projectHeaderImage.png", 
        "object-position: top;",
        "./pages/gallery/room-builder/room-builder.html"
        )
];  