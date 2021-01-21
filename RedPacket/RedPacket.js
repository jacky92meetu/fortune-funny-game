/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class RedPacket extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("red_packet", "./RedPacket/costumes/red_packet.png", {
        x: 236,
        y: 236
      })
    ];

    this.sounds = [new Sound("Coin", "./RedPacket/sounds/Coin.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *startAsClone() {
    this.x = this.random(-250, 250);
    this.visible = true;
    while (true) {
      this.y += -5;
      if (this.touching(this.sprites["CowBucket"].andClones())) {
        yield* this.startSound("Coin");
        this.stage.vars.point += 1;
        this.deleteThisClone();
      }
      if (this.y < -160) {
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
      if (this.random(1, 5) == 1) {
        if (this.stage.vars.time > 0) {
          this.createClone();
        }
      }
      yield;
    }
  }
}
