import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import CowBucket from "./CowBucket/CowBucket.js";
import Cow4 from "./Cow4/Cow4.js";
import Cow3 from "./Cow3/Cow3.js";
import RedPacket from "./RedPacket/RedPacket.js";
import Boom from "./Boom/Boom.js";
import Time from "./Time/Time.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  CowBucket: new CowBucket({
    x: -12,
    y: -140,
    direction: 90,
    costumeNumber: 1,
    size: 35,
    visible: true,
    layerOrder: 1
  }),
  Cow4: new Cow4({
    x: -55,
    y: 43,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Cow3: new Cow3({
    x: 22,
    y: 68,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  RedPacket: new RedPacket({
    x: -209,
    y: 70,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 5
  }),
  Boom: new Boom({
    x: -209,
    y: 70,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 4
  }),
  Time: new Time({
    x: -17,
    y: -45,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 6
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
