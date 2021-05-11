class Game{
    constructor(){

    }
    getState(){
        gameStateRef = database.ref('gamestate')
        gameStateRef.on("value",function(data){
            gameState =data.val()
        })

    }
    update(state){
        database.ref('/').update({
            gameState:state
        })

    }
    async start(){
        if(gameState===0){
            player = new Player()
            //when we wait for something to happen
            var playerCountRef =await database.ref('playerCount').once("value")
            if(playerCountRef.exists()){
                playerCount= playerCountRef.val()
                player.getCount()


            }
            
            form = new Form()
            form.display()

        }
        car1 = createSprite(100,200)
        car1.addImage(car1Image)
        car2 = createSprite(300,200)
        car2.addImage(car2Image)
        car3 = createSprite(500,200)
        car3.addImage(car3Image)
        car4 = createSprite(700,200)
        car4.addImage(car4Image)
        cars=[car1,car2,car3,car4];
        


    }
    play(){
        form.hide();
        text("gameStart",120,100);
        //infromation about the player
        // it is a function which calls the class
        Player.getPlayerInfo();
        player.getCarsAtEnd
        //player is undifined
        if(allPlayers!==undefined){
            background(groundImage)
            image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index =0
            var x = 175;
            var y
            //position
            //var display_Position = 140;
            for(var plr in allPlayers){
                index=index+1
                x=x+200
                y=displayHeight-allPlayers[plr].distance
                cars[index-1].x=x
                cars[index-1].y=y
                if(index===player.index){
                    stroke(10)
                    fill("red")
                    ellipse(x,y,60,60)
                    cars[index-1].shapeColor="red"
                    camera.position.x=displayWidth/2
                    camera.position.y= cars[index-1].y

                }
               
                /*if(plr === "player"+player.index){
                    fill("red")

                }
                else{
                    fill("black")
                    
                }
                display_Position=display_Position+20;
            text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_Position)*/
            }
            
            
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance=player.distance+50
            player.update()

        }
        if(player.distance>3900){
            gameState = 2
            player.rank = player.rank+1
            Player.updateCarsAtEnd(player.rank)


        }

        drawSprites()

    }
    end(){
        console.log("error")
        console.log(player.rank)
    }
}