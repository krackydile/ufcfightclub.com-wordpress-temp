let moment = require('moment-timezone');
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
                      <h5 class="card-title mb-3">${item?.venue?.name}</h5>
                       <h6 class="card-subtitle mb-4 event-venue">${item?.venue?.city}, ${item?.venue?.state}</h6>
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
