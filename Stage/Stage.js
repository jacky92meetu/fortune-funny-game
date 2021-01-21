/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("cow2", "./Stage/costumes/cow2.svg", {
        x: 259.1349401198034,
        y: 191.12648102399885
      })
    ];

    this.sounds = [];

    this.triggers = [];

    this.vars.myVariable = 0;
    this.vars.point = 6;
    this.vars.time = 13;

    this.watchers.point = new Watcher({
      label: "point",
      style: "normal",
      visible: true,
      value: () => this.vars.point,
      x: 245,
      y: 175
    });
    this.watchers.time = new Watcher({
      label: "time",
      style: "normal",
      visible: true,
      value: () => this.vars.time,
      x: 245,
      y: 147
    });
  }
}
