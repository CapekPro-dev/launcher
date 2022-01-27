const { Client, Authenticator } = require('minecraft-launcher-core');

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
const memmax = "3G";
const memmin = "1G";
    const playbtn = document.querySelector('.launch__client');
    playbtn.addEventListener("click", clicked);
function clicked(){
const launcher = new Client();
const msmc = require("msmc");
const fetch = require("node-fetch");
//msmc's testing enviroment sometimes runs into this issue that it can't load node fetch
msmc.setFetch(fetch)
msmc.fastLaunch("raw",
    (update) => {

    }).then(result => {

        //If the login works
        let opts = {
            clientPackage: null,
            // Pulled from the Minecraft Launcher core docs , this function is the star of the show
            authenticate: msmc.getMCLC().getAuth(result),
            root: "./data",
            version: {
                number: "1.8",
                type: "release"
            },
            memory: {
                max: `${memmax}`,
                min: `${memmin}`
            },

        }
        
        console.log("Starting!")
        launcher.launch(opts);


    })
}
})