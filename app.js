import test from "./test.js";

class App {
  constructor() {
    console.log("live");

    this.start();
  }

  start() {
    test();
  }
}

new App();
