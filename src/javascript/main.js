import { DispenserBuild as BuildDispensers } from "./dispensers_build.js";
import { CoinsBuild as BuildCoins } from "./coins_build.js"


const app = {
    init() {
        BuildDispensers.init();
        BuildCoins.init();
    }
}

app.init();
