Jump1.winning = function () {

        this.player = null;
        this.platforms = null;
        this.sky = null;

        this.facing = 'left';
        this.edgeTimer = 0;
        this.jumpTimer = 0;

        this.wasStanding = false;
        this.cursors = null;

    };

    Jump1.winning.prototype = {

        init: function () {

            this.game.renderer.renderSession.roundPixels = true;

            this.world.resize(640, 2000);

            this.physics.startSystem(Phaser.Physics.ARCADE);

            this.physics.arcade.gravity.y = 750;
            this.physics.arcade.skipQuadTree = false;
           

        },

        preload: function () {

            //  We need this because the assets are on Amazon S3
            //  Remove the next 2 lines if running locally
            // this.load.baseURL = 'http://files.phaser.io.s3.amazonaws.com/codingtips/issue003/';
            this.load.crossOrigin = 'anonymous';

            this.load.image('clouds', 'assets/sun.png');
            

            //  Note: Graphics are Copyright 2015 Photon Storm Ltd.

        },

        
        create: function () {

            this.stage.backgroundColor = '#2b57c1';

            this.sky = this.add.tileSprite(0, 0, 640, 700, 'clouds');
            this.sky.fixedToCamera = true;



        },

   

        update: function () {

            if (this.input.activePointer.isDown){
                this.game.state.start('level1');
            
            }
        }

    };


