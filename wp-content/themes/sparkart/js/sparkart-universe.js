const universejs = require('universe-js')({environment: 'production', key: '3af65919-3f76-46c8-b905-0f952ffcbd47'});
universejs.init(function (err, data) {
    if (err) throw err;
    /* Checks if the page is login protected and redirects to join page */
    if (document.getElementById("loader-wrapper") !== null) {
      if (!data.customer) {
        window.location= document.getElementById("loader-wrapper").dataset.join;
      }else{
        document.body.classList.remove("protected");
        document.body.classList.add("loaded");
      }  
    }
    if (data.customer) {
        if (document.getElementById("secondary-navigation-box") !== null) {
            document.getElementById("secondary-navigation-box").innerHTML = "" +
                "<ul class=\"nav float-right\">" +
                " <li class=\"nav-item secondary-emphasis-button\">\n" +
                "    <a class=\"nav-link\" href=\"/join\">\n" +
                "       <span>Message Board</span>\n" +
                "    </a>\n" +
                " </li>" +
                " <li class=\"nav-item\">\n" +
                "     <a class=\"nav-link\" href=\'" + data.fanclub.links.logout + "'\">\n" +
                "       <span>Sign Out </span>\n" +
                "     </a>\n" +
                " </li>" +
                "</ul>";
        }
    } else {
        if (document.getElementById("secondary-navigation-box") !== null) {
            document.getElementById("secondary-navigation-box").innerHTML = "" +
                "<ul class=\"nav float-right\">" +
                " <li class=\"nav-item secondary-signin-button\">\n" +
                "     <a class=\"nav-link\" href=\'" + data.fanclub.links.login + "?redirect=" + encodeURIComponent(window.location.origin) + "'\">\n" +
                "          <span>Sign In </span>\n" +
                "     </a>\n" +
                " </li>" +
                "  <li class=\"nav-item secondary-emphasis-button\">\n" +
                "       <a class=\"nav-link\" href=\"/join\"><span>Join The Fan Club</span></a>\n" +
                " </li>" +
                "</ul>"
        }
        

    }
    
});

universejs.on('error', function (err) {
    throw err;
});

universejs.on('ready', data => {
    require('universe-js/login').linkify(data.fanclub);
    console.log('in here');
});
