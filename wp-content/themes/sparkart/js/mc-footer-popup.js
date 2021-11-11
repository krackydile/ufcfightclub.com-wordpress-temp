    // Fill in your MailChimp popup settings below.
    // These can be found in the original popup script from MailChimp.
    var mailchimpConfig = {
        baseUrl: 'mc.us17.list-manage.com',
        uuid: '1ac480ebd6c74965f0d24306c',
        lid: '7635f918b5'
    };
    
    var chimpPopupLoader = document.createElement("script");
    chimpPopupLoader.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/signup-forms/popup/embed.js';
    chimpPopupLoader.setAttribute('class', 'chimpPopupLoader');
    chimpPopupLoader.setAttribute('data-dojo-config', 'usePlainJson: true, isDebug: false');
    jQuery('body').append(chimpPopupLoader);

    var chimpPopup = document.createElement("script");
    chimpPopup.setAttribute('class', 'chimpPopup');
    chimpPopup.appendChild(document.createTextNode('require(["mojo/signup-forms/Loader"], function (L) { L.start({"baseUrl": "' +  mailchimpConfig.baseUrl + '", "uuid": "' + mailchimpConfig.uuid + '", "lid": "' + mailchimpConfig.lid + '"})});'));

    document.cookie = "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    jQuery(".mailing-list-popup").click(function(e) {
      document.cookie.split("; ").forEach(function(c) { if (c.toLowerCase() == "mcpopupclosed=yes") { 
        jQuery('.chimpPopupLoader').remove();
        jQuery('.chimpPopup').remove();
        jQuery('body').append(chimpPopupLoader);
        document.cookie = "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
      } });
      jQuery('body').append(chimpPopup);
    });
    // End MailChimp popup settings.

    console.log('k')