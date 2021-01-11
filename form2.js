class Form2 {
    constructor() {
        player.getreadyplayers();

        //logo
        this.logo = createSprite(400,250);
        this.logo.addImage(logoImg);
        this.logo.scale = 1;
        
        // play button
        this.playbutton = createImg("Gui/buttons/normal/play.png");
        this.playbutton.position(displayWidth / 2 + 350, displayHeight - 150);
        this.playbutton.size(100, 100);

        // settings 
        this.mute = createImg("Gui/buttons/normal/settings.png");
        this.mute.position(displayWidth / 2 + 150, displayHeight - 150);
        this.mute.size(100, 100);

        // Player Info
        this.info = createImg("Gui/buttons/normal/profile.png");
        this.info.position(displayWidth / 2 + 550, displayHeight - 150);
        this.info.size(100, 100);
        
    }
    display() {
        background(backGui);
        this.playbutton.mousePressed(() => {
            readyplayers += 1;
            player.updatereadyplayers(readyplayers);
        })
        drawSprites();
    }
    hide() {
        this.logo.visible = false;
        this.playbutton.hide();
        this.mute.hide();
        this.info.hide();
    }
}