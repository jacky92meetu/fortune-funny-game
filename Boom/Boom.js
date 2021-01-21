/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Boom extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("fire_cracker", "./Boom/costumes/fire_cracker.png", {
        x: 120,
        y: 175
      })
    ];

    this.sounds = [new Sound("Big Boing", "./Boom/sounds/Big Boing.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *startAsClone() {
    this.x = this.random(-250, 250);
    this.visible = true;
    while (true) {
      this.y += -3;
      if (this.y < -160) {
        this.deleteThisClone();
      }
      if (this.touching(this.sprites["CowBucket"].andClones())) {
        yield* this.startSound("Big Boing");
        this.stage.vars.point = 0;
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.x = -209;
    this.y = 70;
    this.visible = false;
    while (true) {
      yield* this.wait(0.1);
      if (this.random(1, 10) == 1) {
        if (this.stage.vars.time > 0) {
          this.createClone();
        }
      }
      yield;
    }
  }
}
