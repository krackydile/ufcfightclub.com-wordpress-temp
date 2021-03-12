let moment = require('moment-timezone');
let async = require('async');
let serialize = require('form-serialize');
let scroll = require('scroll');
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
                " <li class=\"nav-item\">\n" +
                "    <a class=\"nav-link\" href=\"/join\">\n" +
                "       <span>Message Board</span>\n" +
                "    </a>\n" +
                " </li>" +
                " <li class=\"nav-item secondary-emphasis-button\">\n" +
                "    <a class=\"nav-link\" href=\"/account\">\n" +
                "       <span>My Account</span>\n" +
                "    </a>\n" +
                " </li>" +
                " <li class=\"nav-item\">\n" +
                "     <a class=\"nav-link sign-out\" style=\"text-transform: none;text-decoration: underline\" href=\'" + data.fanclub.links.logout + "'\">\n" +
                "       <span>(Sign Out)</span>\n" +
                "     </a>\n" +
                " </li>" +
                "</ul>";
        }
        if (document.getElementById("protected-box") !== null) {
            document.getElementById("protected-box").innerHTML = "" +
                "<div class=\"accesscode protected block-protected\">" +
                " <div class=\"input-group my-2\">" +
                "  <input type=\"text\" class=\"form-control\" placeholder=\"Event Code\" id=\"event-code-field\" aria-label=\"Recipient's username\" aria-describedby=\"button-addon2\" value=" + data.customer.subscription.affiliates[0].codes[0] + ">"+
                "  <button class=\"btn btn-outline-secondary clipboard-button\" type=\"button\" id=\"button-addon2\" data-clipboard-target=\"#event-code-field\"><i class=\"fa fa-copy\"></i></button>" +
                " </div>" +
                "</div>";
        }
        if (document.getElementById("presale-access-code-signin-text") !== null) {
            document.getElementById("presale-access-code-signin-text").style.display = 'none';
        }
        if (document.getElementById("presale-access-code-text") !== null) {
            document.getElementById("presale-access-code-text").style.display = 'block';
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
        if (document.getElementById("unprotected-box") !== null) {
            document.getElementById("unprotected-box").innerHTML = "" +
                "<div class=\"cta-buttons\">" +
                "<a href=\"/join\" class=\"btn btn-cta-primary\">" +
                "<span>JOIN THE FAN CLUB </span></a>" +
                "<a  href=\'" + data.fanclub.links.login + "?redirect=" + encodeURIComponent(window.location.origin) + "'\" class=\"btn btn-cta-outline\"> " +
                "<span>SIGN IN </span></a>" +
                "</div>";
        }

        if (document.getElementById("presale-access-code-text") !== null) {
           document.getElementById("presale-access-code-text").style.display = 'none';
         }
        if (document.getElementById("presale-access-code-signin-text") !== null) {
           document.getElementById("presale-access-code-signin-text").style.display='block';
        }
    }
});


universejs.on('error', function (err) {
    throw err;
});

universejs.on('ready', data => {
    require('universe-js/login').linkify(data.fanclub);
    if (data.customer) {
        let loadComments = require('universe-js/lib/disqus');
        loadComments('carrieunderwood', universejs);
    }
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
                document.getElementById("current-email").value = resources.account.customer.email;
                document.getElementById("new-email").value = resources.account.customer.new_email;
                document.getElementById("first-name").value = resources.account.customer.first_name;
                document.getElementById("last-name").value = resources.account.customer.last_name;
                document.getElementById("phone-number").value = resources.account.customer.phone_number;

                document.getElementById("plan-name").innerHTML = resources.account.customer.subscription.plan.name;
                document.getElementById("plan-start").innerHTML = moment(resources.account.customer.subscription.start_date).format('MM/DD/YYYY');
                document.getElementById("plan-end").innerHTML = moment(resources.account.customer.subscription.end_date).format('MM/DD/YYYY');
            }
            if(resources.orders) {
                document.getElementById("shipped-on").innerHTML = 'Shipped on ' + resources.orders.orders[0].paid_at;
            }
            // Shipping
            if(resources.shipping) {
                document.getElementById("shipping-first-name").value = resources.shipping.address.first_name;
                document.getElementById("shipping-last-name").value = resources.shipping.address.last_name;
                document.getElementById("shipping-street-address").value = resources.shipping.address.address;
                document.getElementById("shipping-address-2").value = resources.shipping.address.address_2;
                document.getElementById("shipping-city").value = resources.shipping.address.city;

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
            // Country
            if(resources.countries) {
                let countryOptions = "";
                for (let option of resources.countries) {
                    let isSelected = option.selected ? 'selected': '';
                    countryOptions += "<option value=" + option.id +" "+ isSelected+">" + option.name + "</option>";
                }
                document.getElementById("shipping-country").innerHTML = countryOptions;
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
                    planOptions += "<a title=\"Join NOw\" href="+ plan.checkout +" class=\"utransform btn btn-primary\">Renew Now</a>";
                    planOptions += "</div>";
                    planOptions += (plan.id === 61)? "<p class=\"text-center additional mt-2\"><a href=\"http://catsfoundation.com\">Learn more aobut The C.A.T.S Foundation</a></p>": "<p class=\"text-center additional mt-2\"><a href=\"\"></a></p>";
                    planOptions += "</div>";
                }
                document.getElementById("subscription-plan").innerHTML = planOptions;
            }
        });
    }
});

let tempUpcomingTourArray = [];
let tempPreSaleArray = [];
let tempUpcomingAppearanceArray = [];
let tempPastEventArray = [];
let upcomingTourURL = '/events?scope=upcoming&tags=performance&limit=3';
let preSaleURL = '/events?scope=upcoming&tags=appearance,tv,radio&limit=12';
let upcomingAppearanceURL = '/events?scope=upcoming&tags=appearance,tv,radio&limit=12';
let pastEventURL = '/events?scope=past&order=DESC&limit=12';
let loading = false;

window.loadMorePagination = (e, type, currentPage) => {
    document.getElementById("load-more").style.display='none';
    document.getElementById("load-more-loading").style.display='block';
    e = e || window.event;
    let target = e.target || e.srcElement;
    console.log("ttr", target);

    let tempCurrentPage = '&page=' + currentPage;
    if ('UpcomingTour' === type) {
        upcomingTourAPI(tempUpcomingTourArray, upcomingTourURL + tempCurrentPage);
    } else if ('PreSale' === type) {
        preSaleAPI(tempPreSaleArray, preSaleURL + tempCurrentPage);
    } else if ('UpcomingAppearance' === type) {
        upcomingAppearanceAPI(tempUpcomingTourArray, upcomingAppearanceURL + tempCurrentPage);
    } else if ('PastEvent' === type) {
        pastEventAPI(tempPastEventArray, pastEventURL + tempCurrentPage);
    }

};

eventDetailBox = (containerId, type, data, pagination) => {
    const loadMore = pagination?.current_page < pagination?.total_pages;
    const container = document.getElementById(containerId);
    if (container !== null) {
        loading = false;
        container.innerHTML = `
                ${data.length > 0 ? `
                ${data?.map(group => `
                 <div class="event-block">
				 <h3 class="event-heading" style="text-transform: uppercase;">${group?.date}</h3>
                 <div class="row">
                 ${group?.events?.map(item => `
                    <div class="col-lg-4 col-sm-12 col-xs-12">
                     <div class="card events-card">
                      <div class="card-body">
                      <h6 class="card-subtitle mb-3">${moment.tz(item?.date, item?.timezone?.tz).format('D MMMM')}</h6>
                      <div class="card-content"><h5 class="card-title mb-3">${item?.venue?.name}</h5>
                       <h6 class="card-subtitle mb-4 event-venue">${item?.venue?.city}, ${item?.venue?.state}</h6>
                       </div>
                      ${item.links.length > 0 ? `
                       <a href="/events-details/?event=${item?.id}" class="btn btn-primary">Buy Tickets</a>` : ``
                }
                       <a href="/events-details/?event=${item?.id}" class="btn btn-outline-primary">Meet & Greet</a>
                      </div>
                     </div>
                    </div>`
            ).join('')}
                 </div>
                 </div>`
        ).join('')}
                    ${loadMore ? `
                        <div class="text-center mt-4 mb-5">
                        <a id ="load-more" class="btn btn-outline-primary" onclick="loadMorePagination(event,'${type}', '${pagination?.current_page + 1}')">Load More</a> 
                        <a id ="load-more-loading" style="display: none;" class="btn btn-outline-primary events-load-more-loading"><i class="fa fa-circle-o-notch fa-spin"></i> Loading</a>` : ``

            }
                </div>` : `<div class="text-center"><p style="color:#6E8776;">No events have been scheduled at this time.</p></div>`}
                `;
    }

};

upcomingTourAPI = (tempUpcomingTourArray, eventScope) => {
    universejs.get(eventScope, function (err, data) {
        if (data?.events?.length > 0) {
            tempUpcomingTourArray.push(...data?.events);
        }
        const groups = tempUpcomingTourArray?.reduce((groups, event) => {
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
        eventDetailBox('upcoming-tour-dates-container', 'UpcomingTour', groupArrays, data?.pagination);
    });
};

preSaleAPI = (tempPreSaleArray, eventScope) => {
    universejs.get(eventScope, function (err, data) {
        if (data?.events?.length > 0) {
            tempPreSaleArray.push(...data?.events).format('MMMM Y');
        }
        const groups = tempPreSaleArray?.reduce((groups, event) => {
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
        eventDetailBox('fan-club-presales-container', 'PreSale', groupArrays, data?.pagination);
    });
};

upcomingAppearanceAPI = (tempUpcomingAppearanceArray, eventScope) => {
    universejs.get(eventScope, function (err, data) {
        if (data?.events?.length > 0) {
            tempUpcomingAppearanceArray.push(...data?.events);
        }
        const groups = tempUpcomingAppearanceArray?.reduce((groups, event) => {
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
        eventDetailBox('upcoming-appearances-container', 'UpcomingAppearance', groupArrays, data?.pagination);
    });
};

pastEventAPI = (tempPastEventArray, eventScope) => {
    universejs.get(eventScope, function (err, data) {
        if (data?.events?.length > 0) {
            tempPastEventArray.push(...data?.events);
        }
        const groups = tempPastEventArray?.reduce((groups, event) => {
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

        eventDetailBox('past-events-container', 'PastEvent', groupArrays, data?.pagination);
    });
};

jQuery(() => {

    upcomingTourAPI(tempUpcomingTourArray, upcomingTourURL);

    jQuery('ul.event-pills li a').on('click', function (e) {
        let eventType = jQuery(this).attr('id');
        if (eventType === 'pills-upcoming-tour-dates-tab') {
            tempUpcomingTourArray = [];
            upcomingTourAPI(tempUpcomingTourArray, upcomingTourURL);
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

//Shipping submit
let shippingForm = document.querySelector('#shipping-form');
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
