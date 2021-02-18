const Handlebars = require("handlebars");
const universejs = require('universe-js')({environment: 'production', key: '3af65919-3f76-46c8-b905-0f952ffcbd47'});

require('handlebars-helpers')();

universejs.init(function(err, data) {
    if (err) throw err;
    if(document.getElementById("authentication-template") !== null) {
        let template = document.getElementById("authentication-template").innerHTML;
        let renderFanClub = Handlebars.compile(template);
        let redirectURL = window.location.origin;
        document.getElementById("authentication-secondary").innerHTML = renderFanClub({
            data: data,
            redirectURL: redirectURL
        });
    }
});

universejs.on('error', function(err) {
    throw err;
});

universejs.on('ready', data => {
    require('universe-js/login').linkify(data.fanclub);
});
