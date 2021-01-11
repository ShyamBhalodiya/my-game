class Game {
    constructor() {
        this.input = null;
        this.save = null;
        this.text = null;
        this.greeting = null;
    }
    getstate() {
        database.ref("gamestate").on("value", (data) => {
            gamestate = data.val();
        });
    }
    updatestate(state) {
        database.ref("/").update({
            gamestate: state
        })
    }
    preStart() {
        clear();
        background(backGui);

        var form = new Form();
        form.display();

    }
    start() {
        clear();
        form2 = new Form2();
        form2.display();

        players = [player1, player2];
    }

    play() {
        clear();
        form2.hide();
        
        var form3 = new Form3();
        
        background(matchbackground);
        player1.visible = true;
        player2.visible = true;

        player1.collide(ground);
        player2.collide(ground);

        var index = 0;
        Player.getplayer();
        drawSprites();
        for (var plr in allPlayers) {
            index = index + 1;
            var x = 500 - allPlayers[plr].distance;
            var y = displayHeight - 200;

            players[index - 1].x = x;
            players[index - 1].y = y;

            players[index - 1].y += 20;
            //players[index - 1].collide(ground);
            if (index === player.index) {
                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    if (player.index == 1) {
                        player1.changeAnimation("3");
                        player1face = "right";
                    }
                    if (player.index == 2) {
                        player2.changeAnimation("8");
                        player2face = "right";
                    }
                    player.distance -= 10;

                    player.updateplayer();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    if (player.index == 1) {
                        player1.changeAnimation("4");
                        player1face = "left";
                    }
                    if (player.index == 2) {
                        player2.changeAnimation("9");
                        player2face = "left";
                    }
                    player.distance += 10
                    player.updateplayer();
                }
                if (keyIsDown(65) && player.index !== null){
                    if (player.index == 1 && player1face == "right"){
                        player1.changeAnimation("6");
                    }
                    
                    if(player.index == 2 && player2face == "right"){
                        player2.changeAnimation("11");
                    }
                    if (player.index == 1 && player1face == "left"){
                        player1.changeAnimation("7");
                    }
                    if(player.index == 2 && player2face == "left"){
                        player2.changeAnimation("12");
                    }
                    noLoop();
                    if (player1.isTouching(player2) && player.index == 1) {
                        player2health -= 10;
                    }
                    if (player2.isTouching(player1) && player.index == 2) {
                        player1health -= 10;
                    }
                    loop();
                }
            }
            
        }
        
    }

    reset() {
        player.updatecount(0);
        game.updatestate(0);
        player.updatereadyplayers(0);
        player.removenode();
        location.reload(true);
    }
}