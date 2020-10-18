import { DispenserBuild as BuildDispensers } from "./dispensers_build.js";
import { CoinsBuild as BuildCoins } from "./coins_build.js"
import { BuildRegister } from "./register_build.js"


const app = {
    init() {
        BuildDispensers.init();
        BuildCoins.init();
        BuildRegister.init();
    }
}

app.init();
