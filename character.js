class character {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/character.png"), 289, 295, 70.5, 70, 15, 0.05);
        
        this.x = 0;
        this.y = 0;
        this.speed = 300;

    };

    update() {
        this.x += this.speed * this.game.clockTick;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y)
    };


};
    