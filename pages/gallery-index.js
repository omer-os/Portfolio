export class slide{
    constructor(title, caption, image, link){
        this.title = title;
        this.caption = caption;
        this.image = image;
        this.link = link;
    }
}

export var slides = [
    new slide(
        "VR interaction system and physics engine", 
        "A project done for my EPQ at secondary school, this was my first exploration into physics simulation, virtual reality development and Unreal Engine.<br><br>During this project I created a basic system that allowed the user to grab and throw items with their hands that were tracked with 6 degrees of freedom, this system also had full finger tracking. This was all implemented using Unreal Engines \"Blueprint\" visual programming language. During this I also used C++ within Unreal Engine to try to create a basic physics engine that I could integrate into my interaction system. I managed to finish movement and general force calculations but didnt manage to implement rotation before my EPQ had to be handed in so ended up having to leave the physics system out of the final product and use Unreals \"Chaos\" engine instead.<br><br>This was one of my favorite projects and until my switch to Unity for VR developemnt, became a base for most of my later VR experiments. For a month or so after this, if I ever had an idea for a new weapon I would like to try put in VR I would use this project as my base to build off", 
        "pages/gallery/EPQ_project/projectHeaderImage.png", 
        "https://www.bbc.co.uk/"
        ),
    new slide(
        "jack", 
        "he is jack", 
        "pages/gallery/Room_builder/projectHeaderImage.png", 
        "https://twitter.com/"
        ),
    new slide(
        "james", 
        "he is james", 
        "pages/gallery/Cat_tower_defense/projectHeaderImage.png", 
        "https://www.google.com/"
        )
];  