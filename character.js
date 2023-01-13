class character {
    constructor(game) {
        this.game = game;
        this.running = new Animator(ASSET_MANAGER.getAsset("./sprites/character.png"), 289, 295, 70.5, 70, 15, 0.05);
        this.jumping = new Animator(ASSET_MANAGER.getAsset("./sprites/character.png"), 259, 462, 68, 80, 8, 0.1);
        this.x = 0;
        this.y = 500;
        this.speed = 300;
        this.yVel = 300;
        this.gravity = -800;

    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if(this.x > 1000){
            this.x = -100;
            this.y=500;
        }
        if(this.x >= 250 && this.x <= 470) {
            this.y -= this.yVel * this.game.clockTick;
            this.yVel += this.gravity * this.game.clockTick;
            
        }
        if(this.y > 500) {
            this.y = 500;
            this.yVel = 300;
            this.gravity = -800;
        }
       
    };

    draw(ctx) {
        let jump = 470

        if(this.x < 250 || this.x > jump) {
            this.running.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        }
        if(this.x >= 250 && this.x <= jump) {
            this.jumping.drawFrame(this.game.clockTick, ctx, this.x, this.y);
            
        }
        
    };


};
    