/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CowBucket extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("cow_bucket", "./CowBucket/costumes/cow_bucket.png", {
        x: 256,
        y: 256
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenKeyRightArrowPressed() {
    this.move(10);
    if (this.x > 250) {
      this.x = -250;
    }
  }

  *whenKeyLeftArrowPressed() {
    this.move(-10);
    if (this.x < -250) {
      this.x = 250;
    }
  }

  *whenGreenFlagClicked() {
    this.direction = 90;
    this.x = 7;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.x = this.mouse.x;
      yield;
    }
  }
}
