import { DispenserBuild as BuildDispensers } from "./builds/dispensers_build.js";
import { CoinsBuild as BuildCoins } from "./builds/coins_build.js"
import { BuildRegister } from "./builds/register_build.js"


const app = {
    init() {
        BuildDispensers.init();
        BuildCoins.init();
        BuildRegister.init();
    }
}

app.init();
