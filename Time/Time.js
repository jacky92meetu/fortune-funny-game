/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Time extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("time", "./Time/costumes/time.png", { x: 0, y: 0 }),
      new Costume("tiime 2", "./Time/costumes/tiime 2.png", { x: 189, y: 297 })
    ];

    this.sounds = [
      new Sound(
        "Chinese New Year (CNY) Royalty Free Background Music",
        "./Time/sounds/Chinese New Year (CNY) Royalty Free Background Music.wav"
      ),
      new Sound("smb_gameover", "./Time/sounds/smb_gameover.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.point = 0;
    this.stage.vars.time = 30;
    this.visible = false;
    yield* this.startSound(
      "Chinese New Year (CNY) Royalty Free Background Music"
    );
    while (!(this.stage.vars.time == 0)) {
      yield* this.wait(1);
      this.stage.vars.time += -1;
      yield;
    }
    this.visible = true;
    this.stopAllSounds();
    yield* this.playSoundUntilDone("smb_gameover");
    if (this.stage.vars.time == 0) {
      yield* this.askAndWait("Please write down your full name.");
    }
  }
}
