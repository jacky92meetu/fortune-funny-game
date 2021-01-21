/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cow4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Fluffy-white-cartoon-cloud-on-blue-sky-on-transparent-PNG",
        "./Cow4/costumes/Fluffy-white-cartoon-cloud-on-blue-sky-on-transparent-PNG.svg",
        { x: 216.94420401992298, y: 115.50936204804813 }
      )
    ];

    this.sounds = [];

    this.triggers = [];
  }
}
