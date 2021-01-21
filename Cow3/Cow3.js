/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cow3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("cow3", "./Cow3/costumes/cow3.png", { x: 126, y: 180 })
    ];

    this.sounds = [];

    this.triggers = [];
  }
}
