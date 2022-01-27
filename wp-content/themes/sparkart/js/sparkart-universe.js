let moment = require('moment-timezone');
let async = require('async');
let serialize = require('form-serialize');
let scroll = require('scroll');
let jQuery = require('jquery');

const universejs = require('universe-js')({environment: 'production', key: 'd828a4cb-f8a7-4bf5-a5bb-5a9eed9c27cb'});

// Conditional Menu
document.querySelectorAll('li.conditional-menu ul').forEach(function(element) {
    element.style.display = 'none';
});

universejs.init(function (err, data) {
    if (err) throw err;

    // Conditional Menu
    document.querySelectorAll('li.conditional-menu ul').forEach(function(element) {
        element.removeAttribute('style');
    });

    if(data.customer && data.customer.expired == true){
        if(document.getElementById('expired-notification') != null) {
            document.getElementById('expired-notification').classList.remove('hide');
        }
    }
    if(data.customer){
        if(document.getElementById('banner-cta') !== null){
           document.getElementById('banner-cta').classList.add('hide');

        }
        if(document.getElementById('banner-cta-mobile') !== null){
           document.getElementById('banner-cta-mobile').classList.add('hide');

        }
        if(document.getElementById('spark-alert-box') !== null){
           document.getElementById('spark-alert-box').classList.add('hide');
        }
        // show protected-help
        if ( document.getElementById('protected-help') !== null ){
            document.getElementById('protected-help').classList.remove('hide');
        }
        // show protected-carousel
        if ( document.getElementById('protected-swiper') !== null ){
            document.getElementById('protected-swiper').classList.remove('hide');
            const event = new Event('swiperManager');
            document.getElementById('protected-swiper').dispatchEvent(event);
        }

        // Begin UFC
        document.body.classList.add("loggedin");

        // Begin Szeto: Needed for Fan Club Party 2021
        localStorage.setItem('universeCustomerId', data.customer.id);
        localStorage.setItem('universeCustomerFirstName', data.customer.first_name);
        localStorage.setItem('universeCustomerLastName', data.customer.last_name);
        // End Szeto
    }else{
        // show unprotected-help
        // show protected-help
        if ( document.getElementById('unprotected-help') !== null ){
            document.getElementById('unprotected-help').classList.remove('hide');
        }
        if (document.getElementById("unprotected-swiper") !== null){
            document.getElementById('unprotected-swiper').classList.remove('hide');
            const event = new Event('swiperManager');
            document.getElementById('unprotected-swiper').dispatchEvent(event);
        }
        // show unprotected-carousel
    }

    /* Checks if the page is login protected and redirects to join page */
    if (document.getElementById("loader-wrapper") !== null) {
        if (!data.customer) {
            window.location= document.getElementById("loader-wrapper").dataset.join;
        }else{
                document.body.classList.add("loaded");
                document.body.classList.remove("protected");
            if(data.customer && data.customer.expired == true){
                document.getElementById('expired-notification').classList.remove('hide');
                document.getElementById('main').classList.add('hide');

            }
        }
    }

    if (data.customer) {
       /* if (document.getElementById("secondary-navigation-box") !== null) {
            document.getElementById("secondary-navigation-box").innerHTML = "" +
                "<ul class=\"nav float-right\">" +
                " <li class=\"nav-item\">\n" +
                "    <a class=\"nav-link\" href=\"" + data.fanclub.links.forum +"\" style=\"padding-top: 12px;\">\n" +
                "       <span>Message Board</span>\n" +
                "    </a>\n" +
                " </li>" +
                " <li class=\"nav-item secondary-emphasis-button\">\n" +
                "    <a class=\"nav-link\" href=\"/account\">\n" +
                "       <span>My Account</span>\n" +
                "    </a>\n" +
                " </li>" +
                " <li class=\"nav-item\">\n" +
                "     <a class=\"nav-link sign-out\" style=\"padding: 0.5rem 12px;padding-top: 12px;text-transform: none;text-decoration: underline\" href=\'" + data.fanclub.links.logout + "'\">\n" +
                "       <span>(Sign Out)</span>\n" +
                "     </a>\n" +
                " </li>" +
                "</ul>";
        }*/
        /* if (document.getElementById("protected-box") !== null) {
            document.getElementById("protected-box").innerHTML = `
               ${data.customer.subscription ? `
                <p class="event-code-heading" id="presale-access-code-text" style="text-transform: uppercase">YOUR UNIQUE PRE-SALE ACCESS CODE:</p>
                <div class="accesscode protected block-protected\">
                 <div class="input-group my-2">
                  <input type="text" class="form-control" placeholder="Event Code" id="event-code-field" aria-label="Recipient's username" aria-describedby="button-addon2" value="${data.customer.subscription.affiliates[0].codes[0]}">
                  <button class="btn btn-outline-secondary clipboard-button" type="button" id="button-addon2" data-clipboard-target="#event-code-field"><i class="fa fa-copy"></i></button>
                 </div>
                </div>`:``
            }`;
        } */
        if (document.getElementById("presale-access-code-signin-text") !== null) {
            document.getElementById("presale-access-code-signin-text").style.display = 'none';
        }
        if (document.getElementById("presale-access-code-text") !== null) {
            document.getElementById("presale-access-code-text").style.display = 'block';
        }

        // Conditional Menu
        document.querySelectorAll('li.logged-in-sub-menu').forEach(function(element) {
            element.style.display = 'block';
        });
        document.querySelectorAll('li.logged-out-sub-menu').forEach(function(element) {
            element.style.display = 'none';
        });

    } else {
       /* if (document.getElementById("secondary-navigation-box") !== null) {
            document.getElementById("secondary-navigation-box").innerHTML = "" +
                "<ul class=\"nav float-right\">" +
                " <li class=\"nav-item secondary-signin-button\">\n" +
                "     <a class=\"nav-link\" href=\'" + data.fanclub.links.login + "?redirect=" + encodeURIComponent(currentURL) + "'\">\n" +
                "          <span>Sign In </span>\n" +
                "     </a>\n" +
                " </li>" +
                "  <li class=\"nav-item secondary-emphasis-button\">\n" +
                "       <a class=\"nav-link\" href=\"/join\"><span>Join The Fan Club</span></a>\n" +
                " </li>" +
                "</ul>"
        } */
        if (document.getElementById("unprotected-box") !== null) {
            document.getElementById("unprotected-box").innerHTML = `
              <div class="tour-box__image"><img src="/wp-content/uploads/2021/12/Stacked.png" alt="UFC Fight Club"></div>
              <div>
                <h2 class="tour-box__headline">Not a UFC Fight Club Member?</h2>
                <p>Join UFC Fight Club and enjoy exclusive members-only benefits including presale tickets, exclusive content, message board access and much more.</p>
                <p><a href="/join" class="btn btn-primary"><span>Join Now</span></a><a href="${data.fanclub.links.login}?redirect=${encodeURIComponent(currentURL)}" class="btn btn-outline" style="margin-left:15px;"><span>Login Now</span></a></p>
              </div>
            `;
        }


        if (document.getElementById("presale-access-code-text") !== null) {
           document.getElementById("presale-access-code-text").style.display = 'none';
         }
        if (document.getElementById("presale-access-code-signin-text") !== null) {
           document.getElementById("presale-access-code-signin-text").style.display='block';
        }

        // Conditional Menu
        document.querySelectorAll('li.logged-in-sub-menu').forEach(function(element) {
            element.style.display = 'none';
        });
        document.querySelectorAll('li.logged-out-sub-menu').forEach(function(element) {
            element.style.display = 'block';
        });
    }

    // Logout page
    if (data.fanclub) {
        if (document.getElementById('redirect') !== null) {
            let redirect = document.getElementById('redirect');
            redirect.href = data.fanclub.links.logout || '/';
            redirect.click();
        }
    }
});


universejs.on('error', function (err) {
    throw err;
});

let shippingStateLabel = 'Province/Region';
let shippingZipCodeLabel = 'Postal Code';

universejs.on('ready', data => {
    require('universe-js/login').linkify(data.fanclub);
    if (data.customer) {
        let loadComments = require('universe-js/lib/disqus');
        loadComments('', universejs);
    }

    // Account Page
    if( jQuery('body.page-template-account').length ){
        async.parallel({
            account: function (cb) { universejs.get('/account', cb) },
            shipping: function (cb) { universejs.get('/account/shipping', cb) },
            plans:  function (cb) { universejs.get('/plans', cb) },
            orders:  function (cb) { universejs.get('/orders', cb) },
            countries: function (cb) { universejs.get('/addresses/countries', cb) },
        }, function (error, resources) {
            // Account
            if(resources.account) {
                if(resources.account.customer.expired){
                    document.querySelector(".account-content").style.display = 'none';
                }else{
                    document.querySelector(".account-content").style.display = 'block';

                    document.getElementById("current-email").value = resources.account.customer.email;
                    document.getElementById("new-email").value = resources.account.customer.new_email;
                    document.getElementById("first-name").value = resources.account.customer.first_name;
                    document.getElementById("last-name").value = resources.account.customer.last_name;
                    document.getElementById("phone-number").value = resources.account.customer.phone_number;

                    document.getElementById("plan-name").innerHTML = resources.account.customer.subscription.plan.name;
                    document.getElementById("plan-start").innerHTML = moment(resources.account.customer.subscription.start_date).format('MM/DD/YYYY');
                    document.getElementById("plan-end").innerHTML = moment(resources.account.customer.subscription.end_date).format('MM/DD/YYYY');
                    // console.log('e');
                    // console.log(resources.orders);
                    if(resources.orders && resources.orders.orders.length > 0) {
                        document.getElementById("shipped-on").innerHTML = 'Shipped on ' + resources.orders.orders[0].paid_at;
                    }
                    // Shipping
                    if(resources.shipping && resources.shipping.address != null) {
                        document.getElementById("shipping-first-name").value = resources.shipping.address.first_name;
                        document.getElementById("shipping-last-name").value = resources.shipping.address.last_name;
                        document.getElementById("shipping-street-address").value = resources.shipping.address.address;
                        document.getElementById("shipping-address-2").value = resources.shipping.address.address_2;
                        document.getElementById("shipping-city").value = resources.shipping.address.city;
                        // Shipping Country
                        if(resources.countries) {
                            let countryOptions = "";
                            for (let option of resources.countries.countries) {
                                let isSelected = option.id === resources.shipping.address.country ? 'selected': '';
                                countryOptions += "<option value=" + option.id +" "+ isSelected+">" + option.name + "</option>";
                            }
                            document.getElementById("shipping-country").innerHTML = countryOptions;
                        }

                        document.getElementById("shipping-state").value = resources.shipping.address.state;
                        document.getElementById("shipping-zip-code").value = resources.shipping.address.postal_code;

                        // Label Change
                        if(document.getElementById("shipping-country").value ==='US'){
                            document.getElementById("shipping-state-label").innerHTML = 'State';
                            document.getElementById("shipping-zip-code-label").innerHTML = 'ZIP Code';
                        } else if(document.getElementById("shipping-country").value ==='CA'){
                            document.getElementById("shipping-state-label").innerHTML = 'Province';
                        }else{
                            document.getElementById("shipping-state-label").innerHTML = shippingStateLabel;
                            document.getElementById("shipping-zip-code-label").innerHTML = shippingZipCodeLabel;
                        }

                        let preferences = "";
                        for (let item of resources.shipping.items) {
                            for (const [key, value] of Object.entries(item)) {
                                preferences += "<div class=\"form-group\">";
                                preferences += " <label for=\"shipping-size\" class=\"text-capitalize\">" + value.label + "</label>";
                                preferences += "<select class=\"form-control\" id=\"shipping-size\" name=" + key + ">";
                                for (let option of value.options) {
                                    let isSelected = option.selected ? 'selected': '';
                                    preferences += "<option value=" + option.id +" "+ isSelected+">" + option.name + "</option>";
                                }
                                preferences += "</select>";
                                preferences += "</div>";
                            }
                        }
                        document.getElementById("preferences").innerHTML = preferences;
                    }
                    // Subscription Plan
                    if(resources.plans) {
                        let planOptions = "";
                        for (let plan of resources.plans.plans) {
                            planOptions += "<div class=\"col-sm-12\">";
                            planOptions += "<div class=\"main-card\">";
                            planOptions += "<h3 class=\"utransform column-heading\">" + plan.name + "</h3>";
                            planOptions += (plan.id ===61)? "<p>* Donation to C.A.T.S. Foundation</p>" : "<p></p>";
                            planOptions += (plan.upgrade)? "<h1 class=\"column-text-price\">" + plan.upgrade_price + " <del>"+plan.display_price+"</del></h1>" : "<h1 class=\"column-text-price\">" + plan.display_price + "</h1>";
                            planOptions += "<a title=\"Join NOw\" href="+ plan.checkout +" class=\"utransform btn btn-primary\"><span>Renew Now</span></a>";
                            planOptions += "</div>";
                            planOptions += (plan.id === 61)? "<p class=\"text-center additional mt-2\"><a href=\"http://catsfoundation.com\">Learn more about The C.A.T.S Foundation</a></p>": "<p class=\"text-center additional mt-2\"><a href=\"\"></a></p>";
                            planOptions += "</div>";
                        }
                        document.getElementById("subscription-plan").innerHTML = planOptions;
                    }
                }
            }
        });
    }

    // Contest Detail Page
    if( jQuery('body .contest-details').length ){
        const urlParams = new URLSearchParams(window.location.search);
        const eventId = urlParams.get('event');
        const contestId = urlParams.get('contest');
        async.parallel({
            event: function (cb) { eventId && universejs.get('/events/'+eventId, cb) },
            contest: function (cb) { contestId && universejs.get('/contests/'+contestId, cb) },
        }, function (error, resources) {
            if(resources.event.event) {
                document.getElementById("event-info").innerHTML =
                    `<h3>Performance in <a href="/events-details/?event=${eventId}">${resources.event.event.venue.city}, ${resources.event.event.venue.state}</a></h3>`;
            }
            if(resources.contest.contest) {
                if(resources.event.event && resources.event.event.tags.indexOf('fan party') >= 0){
                  var contestType = "RSVP";
                  jQuery('h3:contains("Contest Details")').text('Rsvp Details');
                } else {
                  var contestType = "Contest";
                }
                document.getElementById("contest-alert-info").innerHTML = `
                    ${resources.contest.contest.entered ? `
                    <div  style="text-transform: uppercase">You have been entered into the ` + contestType + `</div>` : ``
                    }`;

                document.getElementById("contest-detail-info").innerHTML = `
                     <div class="topic">
                     <h3>${resources.contest.contest.name}
                      ${resources.contest.contest.ended ? `
                        <span>&mdash;</span> <strong>` + contestType + ` is Finished</strong>` : ``
                      }
                     </h3>
                      ${resources.contest.contest.event ? `
                          <h4><a href="/events-details/?event=${resources.contest.contest.event.id}">${resources.contest.contest.event.title}</a></h4>` : ``
                      }
                        <dl>
                          <dt>${new Date(resources.contest.contest.details) >  new Date()  ? contestType + ` Starts`: contestType + ` Started`}</dt>
                          <dd>${moment.tz(resources.contest.contest.starts_at, resources.contest.contest.timezone.tz).format('M/DD/YY h:mma z')}</dd>
                          <dt>${resources.contest.contest.ended ? contestType + ` Ended`: contestType + ` Ends`}</dt>
                          <dd>${moment.tz(resources.contest.contest.ends_at, resources.contest.contest.timezone.tz).format('M/DD/YY h:mma z')}</dd>
                         </dl>
                      </div>
                      <div class="details">
                       ${resources.contest.contest.details ? `
                         <div class="contest"> <h4>` + contestType + ` Details</h4> <div class="markup">${resources.contest.contest.details}</div></div>` : ``
                       }
                        ${resources.contest.contest.rules ? `
                         <div class="contest"> <h4>` + contestType + ` Rules</h4> <div class="markup">${resources.contest.contest.rules}</div></div>` : ``
                       }
                       </div>`;

                document.getElementById("contest-form-info").innerHTML = `
                 ${resources.contest.contest.available_to_customer && resources.contest.contest.running ? `
                   <form class="contest-form" id="contest-form" method="post">
                                <label>
                                    <em>Phone Number</em>
                                    <input type="text" class="form-control" name="phone_number" id="contest-phone-number" size="12" value="${data.customer.phone_number}" />
                                </label><br />

                                <fieldset>
                                    <label>
                                        <input type="checkbox" class="" name="rules" value="true" /> <em>I agree to the ` + contestType + ` Rules</em>
                                    </label>
                                </fieldset>
                                <input type="submit" id="contest-submit" value="Submit" class="btn btn-primary" />
                   </form>` :``
                 }`;
            }

            //Contest submit
            let contestForm = document.querySelector('#contest-form');
            if(contestForm !== null){
                contestForm.addEventListener('submit', (event)=>{
                    event.preventDefault();

                    document.getElementById("contest-success-message").style.display='none';
                    document.getElementById("contest-error-message").style.display='none';

                    const urlParams = new URLSearchParams(window.location.search);
                    const contestId = urlParams.get('contest');

                    let contestEntry = serialize(contestForm);

                    if (!contestEntry.match('rules')) {
                        let rulesEl = document.querySelector('input[name="rules"]').parentNode;
                        let rulesErr = rulesEl.querySelector('strong');

                        if (rulesErr) rulesEl.removeChild(rulesErr);
                        rulesEl.innerHTML += '<strong>Please agree to the contest rules to enter this contest</strong>';

                        if (rulesEl.classList) {
                            rulesEl.classList.add('error');
                        } else {
                            rulesEl.className += ' error';
                        }

                        return;
                    }

                    let submitButton = document.querySelector('#contest-submit');

                    submitButton.setAttribute('disabled', true);
                    universejs.post('/contests/' + contestId + '/enter', contestEntry, function (err, response) {

                        let body = (document.documentElement && document.documentElement.scrollTop)
                            ? document.documentElement
                            : document.body;

                        scroll.top(body, 0, function (error, position) {
                            if (position !== 0) return;

                            if (response && response.status === 'ok') {
                                document.getElementById("contest-success-message").style.display='block';
                                document.getElementById("contest-success-message").innerHTML = '<p>You have been entered into the contest</p>';
                            } else if (response && Array.isArray(response.messages)) {
                                document.getElementById("contest-error-message").style.display='block';
                                document.getElementById("contest-error-message").innerHTML = response.messages.join(/\s/);
                            }
                            submitButton.removeAttribute('disabled');
                        });

                    });
                });
            }

        });

    }

    // Presale code and exclusive event ticket links
    if (data.customer && (data.customer.subscription.plan.name == "Ultimate" || data.customer.subscription.plan.name == "Ultimate (moderator)") && document.getElementById("protected-box")) {
      const exclusiveEventLinks = document.querySelectorAll('.event-link-exclusive');
      if (exclusiveEventLinks.length) {

        const eventId = (new URLSearchParams(window.location.search)).get('event');
        universejs.get('/events/'+eventId, function (err, data) {
          const exclusiveUrls = {};
          let codes = [];
          data.event.links.forEach(function (link) {
            if (link.exclusive) exclusiveUrls[data.event.id.toString() + '-' + link.name.replace(/"/g, '')] = link.url;
            codes = codes.concat(link.codes);
          });
          Array.prototype.forEach.call(exclusiveEventLinks, function (link) {
            var exclusiveUrl = exclusiveUrls[link.getAttribute('data-id')];
            if (exclusiveUrl) link.setAttribute('href', exclusiveUrl);
          });

          if (codes.length && document.getElementById("protected-box") !== null) {
              document.getElementById("protected-box").innerHTML = `
                <h2 class="tour-box__headline">Only UFC Fight Club Ultimate Members Get First Access To Tickets</h2>
                <p class="event-code-heading" id="presale-access-code-text" style="text-transform: uppercase">YOUR PRE-SALE ACCESS CODE:</p>
                <div class="accesscode protected block-protected\">
                 <div class="input-group my-2">
                  <input type="text" class="form-control" placeholder="Event Code" id="event-code-field" aria-label="Recipient's username" aria-describedby="button-addon2" value="${codes.join(', ')}">
                  <button class="btn btn-outline-secondary clipboard-button" type="button" id="button-addon2" data-clipboard-target="#event-code-field"><i class="fa fa-copy"></i></button>
                 </div>
                </div>`;
          }
        });
      } else {

        var latestAffiliateIndex = data.customer.subscription.affiliates.length - 1;
        document.getElementById("protected-box").innerHTML = `
        <div class="tour-box__image"><img src="/wp-content/uploads/2021/12/Stacked.png" alt="UFC Fight Club"></div>
        <div>
        <h2 class="tour-box__headline">Only UFC Fight Club Ultimate Members Get First Access To Tickets</h2>
        
        <!--p class="tour-box--important">Once the presale is announced, your fan club presale password will be shown.</p-->
         
          <p class="event-code-heading" id="presale-access-code-text" style="text-transform: uppercase">YOUR UNIQUE PRE-SALE ACCESS CODE:</p>
          <div class="accesscode protected block-protected">
           <div class="input-group">
            <input type="text" class="form-control" placeholder="Event Code" id="event-code-field" aria-label="Recipient's username" aria-describedby="button-addon2" value="${data.customer.subscription.affiliates[latestAffiliateIndex].codes[0]}">
            <button class="btn btn-outline-secondary clipboard-button" type="button" id="button-addon2" data-clipboard-target="#event-code-field"><i class="fa fa-copy"></i></button>
           </div>
          </div>
          <p class="tour-box__details">Pre-sale tickets are not guaranteed, ticket purchases are subject to availability on a first come, first serve basis for select US, Canadian, Australian, and European performances only. All shows are subject to cancellation or postponement without notice. Please consult with the relevant venue for seating information prior to purchase and any changes to the show schedule.</p>
          </div>`
          ;
      }
    }

    if (data.customer && (data.customer.subscription.plan.name == "Ultimate" || data.customer.subscription.plan.name == "Ultimate (moderator)") && document.getElementById("protectedTourContent")) {
        document.getElementById("protectedTourContent").style.display = "block";
        if (document.getElementById("unprotectedTourContent")) {
            document.getElementById("unprotectedTourContent").style.display = "none";
        }
    }

    if (data.customer && (data.customer.subscription.plan.name != "Ultimate" && data.customer.subscription.plan.name != "Ultimate (moderator)") && document.getElementById("protected-box")) {
        document.getElementById("protected-box").innerHTML = `
        <div class="tour-box__image"><img src="/wp-content/uploads/2021/12/Stacked.png" alt="UFC Fight Club"></div>
        <div>
            <h2 class="tour-box__headline">Only UFC Fight Club Ultimate Members Get First Access To Tickets</h2>        
            <p><a href="/account" class="btn btn-primary"><span>Upgrade Now</span></a></p>
        </div>`
        ;
    }

    if (data.customer && (data.customer.subscription.plan.name != "Ultimate" && data.customer.subscription.plan.name != "Ultimate (moderator)") && document.getElementById("protectedTourContent")) {
        document.getElementById("protectedTourContent").style.display = "block";
        if (document.getElementById("unprotectedTourContent")) {
            document.getElementById("unprotectedTourContent").style.display = "none";
        }
    }
});

//Country Change Event
if (document.querySelector('select[name=country]')) {
    let countrySelectBox = document.querySelector('select[name=country]');
    countrySelectBox.addEventListener('change', function (ev) {
        if (ev.target.value === 'US') {
            document.getElementById("shipping-state-label").innerHTML = 'State';
            document.getElementById("shipping-zip-code-label").innerHTML = 'ZIP Code';
        } else if (ev.target.value === 'CA') {
            document.getElementById("shipping-state-label").innerHTML = 'Province';
        } else {
            document.getElementById("shipping-state-label").innerHTML = shippingStateLabel;
            document.getElementById("shipping-zip-code-label").innerHTML = shippingZipCodeLabel;
        }
    });
}

let tempUpcomingTourArray = [];
let tempPreSaleArray = [];
let tempUpcomingAppearanceArray = [];
let tempPastEventArray = [];
// JL: let upcomingTourURL = '/events?scope=upcoming&tags=performance&limit=36';
// JL: let preSaleURL = '/events?scope=upcoming&tags=unique,generic&limit=36';
// JL: let upcomingAppearanceURL = '/events?scope=upcoming&tags=appearance,tv,radio&limit=36';
// JL: let pastEventURL = '/events?scope=past&order=DESC&limit=36';
let upcomingTourURL = '/universe-events/?tab=upcoming-tour-dates';
let preSaleURL = '/universe-events/?tab=fan-club-pre-sale';
let upcomingAppearanceURL = '/universe-events/?tab=upcoming-appearances';
let pastEventURL = '/universe-events/?tab=past-events';
let loading = false;

window.loadMorePagination = (e, type, currentPage) => {
    document.getElementById("load-more").style.display='none';
    document.getElementById("load-more-loading").style.display='block';
    e = e || window.event;
    let target = e.target || e.srcElement;
    console.log("ttr", target);

    // JL: let tempCurrentPage = '&page=' + currentPage;
    let tempCurrentPage = '&pg=' + currentPage;
    if ('UpcomingTour' === type) {
        upcomingTourAPI(tempUpcomingTourArray, upcomingTourURL + tempCurrentPage);
    } else if ('PreSale' === type) {
        preSaleAPI(tempPreSaleArray, preSaleURL + tempCurrentPage);
    } else if ('UpcomingAppearance' === type) {
        upcomingAppearanceAPI(tempUpcomingAppearanceArray, upcomingAppearanceURL + tempCurrentPage);
    } else if ('PastEvent' === type) {
        pastEventAPI(tempPastEventArray, pastEventURL + tempCurrentPage);
    }

};

eventDetailBox = (containerId, type, data, pagination) => {
    // Transform data to remove month groups
    // TODO: dataCombined is a quick fix to flatten data. This could be cleaned up.
    let dataCombined = []
    let eventsList = []
    data.forEach((month) => {
        month.events.forEach(event => eventsList.push(event))
    })
    dataCombined[0] = {events: eventsList}
    const loadMore = pagination && pagination.current_page < pagination.total_pages;
    const container = document.getElementById(containerId);
    if (container !== null) {
        loading = false;
        container.innerHTML = `
                ${dataCombined && dataCombined[0].events.length > 0 ? `
                ${dataCombined.map(group => `
                 <div class="event-block upcoming-events upcoming-events--page">
                 <div class="row">
                 ${(group.events || []).map(item => {
            const upcomingLinks = item.links.filter(function (link) {return link.tickets_upcoming});
            const availableLinks = item.links.filter(function (link) {return link.tickets_available});
            // const ufcPresaleLinks = item.links.filter(function (link) {return link.name == "Presale Tickets"});
        item.venue = item.venue || {name: '', city: '', state: ''};
            return `
                    <div class="col-lg-12 col-sm-12 col-xs-12 events-card__container">
                     <div class="card events-card" data-tags="${item.tags}">
                      <div class="card-body">
                      <h6 class="card__date">${moment.tz(item.date, item.timezone.tz).format('DD')}<span>${moment.tz(item.date, item.timezone.tz).format('MMM YYYY')}</span></h6>
                      <div class="card-content">
                      <div class="card-info">
                        <h5 class="card-title"><a href="/events-details/?event=${item.id}">${item.venue.name}</a></h5>
                       <h6 class="card-subtitle event-venue">${item.venue.city}${item.venue.state ? `, ${item.venue.state}` : ``}</h6>
                       </div>
                      ${upcomingLinks.map(function (link) {return `
                          <span class="btn btn-disabled">${link.name} On Sale:<br />${moment.tz(link.publish_start, item.timezone.tz).format('M/D/YY [at] h:mmA z')}</span>
                      `}).join('')}
                      ${availableLinks.map(function (link) {return `
              <a href="/events-details/?event=${item.id}" class="btn btn-primary">Buy ${link.name}</a>
                      `}).join('')}
                      ${item.contests.length > 0 ? `
                       <a href="/events-details/?event=${item.id}" class="btn btn-outline-primary">Meet & Greet</a>` : ``
                      }
                      </div>
                      </div>
                     </div>
                    </div>`
            }).join('')}
                 </div>
                 </div>`
        ).join('')}
                    ${loadMore ? `
                        <div class="text-center mt-4 mb-5">
                        <a id ="load-more" class="btn btn-outline-primary" onclick="loadMorePagination(event,'${type}', '${pagination.current_page + 1}')">Load More</a>
                        <a id ="load-more-loading" style="display: none;" class="btn btn-outline-primary events-load-more-loading"><i class="fa fa-circle-o-notch fa-spin"></i> Loading</a>` : ``

            }
                </div>` : `<div class="event-block upcoming-events upcoming-events--page text-center"><p style="color:#1C0D0B;">No events have been scheduled at this time.</p></div>`}
                `;
    }

};

upcomingTourAPI = (tempUpcomingTourArray, eventScope) => {
    // JL: universejs.get(eventScope, function (err, data) {
    jQuery.getJSON(eventScope, function (data) {
        if (data && data.events && data.events.length > 0) {
            tempUpcomingTourArray.push(...data.events);
        }
        const groups = (tempUpcomingTourArray || []).reduce((groups, event) => {
            const date = moment(event.date).format('MMMM Y');
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(event);
            return groups;
        }, {});

        const groupArrays = Object.keys(groups).map((date) => {
            return {
                date,
                events: groups[date]
            };
        });
        eventDetailBox('upcoming-tour-dates-container', 'UpcomingTour', groupArrays, data && data.pagination);
    });
};

preSaleAPI = (tempPreSaleArray, eventScope) => {
    // JL: universejs.get(eventScope, function (err, data) {
    jQuery.getJSON(eventScope, function (data) {
        if (data && data.events && data.events.length > 0) {
            tempPreSaleArray.push(...data.events);
        }
        const groups = (tempPreSaleArray || []).reduce((groups, event) => {
            const date = moment(event.date).format('MMMM Y');
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(event);
            return groups;
        }, {});

        const groupArrays = Object.keys(groups).map((date) => {
            return {
                date,
                events: groups[date]
            };
        });
        eventDetailBox('fan-club-presales-container', 'PreSale', groupArrays, data && data.pagination);
    });
};

upcomingAppearanceAPI = (tempUpcomingAppearanceArray, eventScope) => {
    // JL: universejs.get(eventScope, function (err, data) {
    jQuery.getJSON(eventScope, function (data) {
        if (data && data.events && data.events.length > 0) {
            tempUpcomingAppearanceArray.push(...data.events);
        }
        const groups = (tempUpcomingAppearanceArray || []).reduce((groups, event) => {
            const date = moment(event.date).format('MMMM Y');
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(event);
            return groups;
        }, {});

        const groupArrays = Object.keys(groups).map((date) => {
            return {
                date,
                events: groups[date]
            };
        });
        eventDetailBox('upcoming-appearances-container', 'UpcomingAppearance', groupArrays, data && data.pagination);
    });
};

pastEventAPI = (tempPastEventArray, eventScope) => {
    // JL: universejs.get(eventScope, function (err, data) {
    jQuery.getJSON(eventScope, function (data) {
        if (data && data.events && data.events.length > 0) {
            tempPastEventArray.push(...data.events);
        }
        const groups = (tempPastEventArray || []).reduce((groups, event) => {
            const date = moment(event.date).format('MMMM Y');
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(event);
            return groups;
        }, {});

        const groupArrays = Object.keys(groups).map((date) => {
            return {
                date,
                events: groups[date]
            };
        });

        eventDetailBox('past-events-container', 'PastEvent', groupArrays, data && data.pagination);
    });
};

jQuery(() => {

    // UFC: merge events
    if (jQuery('.upcoming-events').length && jQuery('.ufc-upcoming-events').length) {
        jQuery('.upcoming-events .card').each(function(){
            var date = jQuery(this).find('.card__date span').text();
            var salesTime = jQuery(this).find(jQuery('.ufc-card-sales-time'));
            var links = jQuery(this).find(jQuery('.btn'));
            var url = jQuery(this).find(jQuery('.card-title a')).attr('href');
            var formattedUrl = url.replace('events-details//','events-details/').replace('events-details/events','events-details');
            links.attr('href',formattedUrl);
            var actionsContainer = jQuery('<div class="ufc-card-actions actions-tickets"</div>').append(links);
            var matchingCard = jQuery('.ufc-card-date:contains(' + date + ')').parents('.ufc-card');
            jQuery(matchingCard).find('.ufc-card-footer').prepend(salesTime);
            jQuery(matchingCard).find('.ufc-card-footer').append(actionsContainer);
            jQuery(matchingCard).find('.ufc-card-subtitle').wrapInner('<a href="' + formattedUrl + '"></a>');
            jQuery(matchingCard).addClass('has-presale');
            // jQuery(matchingCard).find('.ufc-card-footer').show();
        })
    }

    // JL: add condition
    if (jQuery('.event-list').length) {
        // upcomingTourAPI(tempUpcomingTourArray, upcomingTourURL);
        jQuery('#upcoming-tour-dates-container').html(jQuery('body.page-template-events-landing .ufc-events-cards'));
    }

    jQuery('ul.event-pills li a').on('click', function (e) {
        let eventType = jQuery(this).attr('id');
        if (eventType === 'pills-upcoming-tour-dates-tab') {
            tempUpcomingTourArray = [];
            // upcomingTourAPI(tempUpcomingTourArray, upcomingTourURL);
        } else if (eventType === 'pills-fan-club-presales-tab') {
            tempPreSaleArray = [];
            preSaleAPI(tempPreSaleArray, preSaleURL);
        } else if (eventType === 'pills-upcoming-appearances-tab') {
            tempUpcomingAppearanceArray = [];
            upcomingAppearanceAPI(tempUpcomingAppearanceArray, upcomingAppearanceURL);
        } else if (eventType === 'pills-past-events-tab') {
            tempPastEventArray = [];
            pastEventAPI(tempPastEventArray, pastEventURL);
        }

    });
});

//Account submit
let accountForm = document.querySelector('#account-form');
/*accountForm check added as it was giving error*/
if(accountForm !== null){
accountForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    document.getElementById("success-message").style.display='none';
    document.getElementById("error-message").style.display='none';

    let updates = serialize(accountForm);
    let action = accountForm.getAttribute('action') || '/account';
    let submitButton = accountForm.querySelector('#account-submit');

    submitButton.setAttribute('disabled', true);
    universejs.post(action, updates, function (err, response) {

        let body = (document.documentElement && document.documentElement.scrollTop)
            ? document.documentElement
            : document.body;

        scroll.top(body, 0, function (error, position) {
            if (position !== 0) return;

            if (response && response.status === 'ok') {
                document.getElementById("success-message").style.display='block';
                document.getElementById("success-message").innerHTML = '<p>Changes Saved</p>';
            } else if (response && Array.isArray(response.messages)) {
                document.getElementById("error-message").style.display='block';
                let msg = '';
                msg+= '<p>Sorry, we couldn&rsquo;t save your changes</p>';
                msg+= '<p>Please correct the following:</p>';
                msg+= '<ul class="\error-message\">';
                for (let message of response.messages) {
                    msg+= "<li style=\"text-transform:none\">" + message + "</li>";
                }
                msg+= '</ul>';
                document.getElementById("error-message").innerHTML = msg;
            } else if (response) {
                document.getElementById("error-message").style.display='block';
                let msg = '';
                msg+= '<p>Sorry, we couldn&rsquo;t save your changes</p>';
                msg+= '<p>' + response.message+ '</p>';
                document.getElementById("error-message").innerHTML = msg;
            }
            submitButton.removeAttribute('disabled');
        });

    });
});
}

//Shipping submit
let shippingForm = document.querySelector('#shipping-form');
if(shippingForm !== null){

shippingForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    document.getElementById("success-message").style.display='none';
    document.getElementById("error-message").style.display='none';

    let updates = serialize(shippingForm);
    let action = shippingForm.getAttribute('action') || '/account/shipping';
    let submitButton = shippingForm.querySelector('#shipping-submit');

    submitButton.setAttribute('disabled', true);
    universejs.post(action, updates, function (err, response) {

        let body = (document.documentElement && document.documentElement.scrollTop)
            ? document.documentElement
            : document.body;

        scroll.top(body, 0, function (error, position) {
            if (position !== 0) return;

            if (response && response.status === 'ok') {
                document.getElementById("success-message").style.display='block';
                document.getElementById("success-message").innerHTML = '<p>Changes Saved</p>';
            } else if (response && Array.isArray(response.messages)) {
                document.getElementById("error-message").style.display='block';
                let msg = '';
                msg+= '<p>Sorry, we couldn&rsquo;t save your changes</p>';
                msg+= '<p>Please correct the following:</p>';
                msg+= '<ul class="\error-message\">';
                for (let message of response.messages) {
                    msg+= "<li style=\"text-transform:none\">" + message + "</li>";
                }
                msg+= '</ul>';
                document.getElementById("error-message").innerHTML = msg;
            } else if (response) {
                document.getElementById("error-message").style.display='block';
                let msg = '';
                msg+= '<p>Sorry, we couldn&rsquo;t save your changes</p>';
                msg+= '<p>' + response.message+ '</p>';
                document.getElementById("error-message").innerHTML = msg;
            }
            submitButton.removeAttribute('disabled');
        });

    });
});
}
