import { Calcultator } from "./modules/Calculator";
import { InputManipulation } from "./modules/InputManipulation";
import { Startup } from "./Startup";

class App {

  public startup : Startup

  constructor(_startup: Startup) {
    this.startup = _startup
  }

}

const app = new App(new Startup(new Calcultator, new InputManipulation));

app.startup.Init();