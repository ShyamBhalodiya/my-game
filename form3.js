class Form3 {
    constructor() {
        noLoop();
        Player.getplayer();

        this.namespace = createImg("Gui/frames/name bar.png");
        this.namespace.position(500, 100);
        this.namespace.size(200, 60);

        this.namespace2 = createImg("Gui/frames/name bar.png");
        this.namespace2.position((width - 500) + 320, 100);
        this.namespace2.size(200, 60);

        this.healthbarback = createSprite(230, 60);
        this.healthbarback.addImage(healthbarimg);
        this.healthbarback.scale = 0.25;

        this.healthbarback2 = createSprite(width - 450, 60);
        this.healthbarback2.addImage(healthbarimg);
        this.healthbarback2.scale = 0.25;

        this.healthbar1 = createImg("Gui/frames/healthbar.png");
        this.healthbar1.position(500, 100);
        this.healthbar1.size(player1health * 2, 25);

        this.healthbar2 = createImg("Gui/frames/healthbar.png");
        this.healthbar2.position((width - 500) + 320, 100);
        this.healthbar2.size(player2health * 2, 25);

        this.name1 = createElement("h3");
        this.name1.position(500, 100);
        this.name1.html(allPlayers[1][0]);

        this.name2 = createElement("h3");
        this.name2.position((width - 500) + 320, 100);
        this.name2.html(allPlayers[1][1]);

        /*for(var plname in allPlayers){
           var displayname = allPlayers[plname].name;
           
           text1 = createElement("h3");
           text1.position(200, 60);
           text1.html(displayname);

           text2 = createElement("")
        }*/

        /*for(var plrname in allPlayers){
            var index = 1;

            var name1 = allPlayers
        }*/

        loop();
    }
    hide() {
        this.healthbarback1.visible = false;
        this.healthbarback2.visible = false;
        this.healthbar1.hide();
        this.healthbar2.hide();
    }
}