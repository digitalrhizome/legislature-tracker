this["LT"] = this["LT"] || {};
this["LT"]["templates"] = this["LT"]["templates"] || {};

this["LT"]["templates"]["js/app/templates/template-categories.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\n<div class="categories-container">\n  ';
 if (LT.options.title) { ;
__p += '\n    <h2>' +
((__t = ( LT.options.title )) == null ? '' : __t) +
'</h2>\n  ';
 } ;
__p += '\n  \n  ';
 if (typeof LT.app.totalBills != 'undefined') { ;
__p += '\n    <div class="aggregate-counts">\n      <span class="aggregate-stat">\n        <span class="aggregate-count-label">Bills introduced:</span>\n        <span class="aggregate-count-value">' +
((__t = ( _.numberFormatCommas(LT.app.totalBills) )) == null ? '' : __t) +
'</span>\n      </span>\n      \n      <span class="aggregate-stat">\n        <span class="aggregate-count-label">Bills signed:</span>\n        <span class="aggregate-count-value">' +
((__t = ( _.numberFormatCommas(LT.app.totalBillsSigned) )) == null ? '' : __t) +
'</span>\n      </span>\n    </div>\n  ';
 } ;
__p += '\n\n  <ul class="category-list">\n    ';
 _.each(categories, function(c, i) { ;
__p += '\n      <li class="category-' +
((__t = ( _.cssClass(c.id) )) == null ? '' : __t) +
'">\n          ';
 if (c.image) { ;
__p += '\n            <a href="#/category/' +
((__t = ( encodeURI(c.id) )) == null ? '' : __t) +
'">\n              <img class="category-image" src="' +
((__t = ( LT.utils.imagePath(c.image) )) == null ? '' : __t) +
'" />\n            </a>\n          ';
 } ;
__p += '\n           \n          <h3>\n            <a href="#/category/' +
((__t = ( encodeURI(c.id) )) == null ? '' : __t) +
'">\n              ' +
((__t = ( c.title )) == null ? '' : __t) +
'\n            </a>\n          </h3>\n          \n          <div>\n            Watching \n            <strong>' +
((__t = ( c.bills.length )) == null ? '' : __t) +
'</strong>\n            ';
 if (c.total_bill_count) { ;
__p += '\n              of ' +
((__t = ( c.total_bill_count )) == null ? '' : __t) +
'\n            ';
 } ;
__p += '\n            bills.\n          </div>\n      </li>\n    ';
 }) ;
__p += '\n  </ul>\n</div>';

}
return __p
};

this["LT"]["templates"]["js/app/templates/template-category.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\n' +
((__t = ( header )) == null ? '' : __t) +
'\n\n<div class="category-container">\n  <h2>\n    ';
 if (category.image) { ;
__p += '\n      <img class="category-image" src="' +
((__t = ( LT.utils.imagePath(category.image) )) == null ? '' : __t) +
'" />\n    ';
 } ;
__p += '\n    \n    ' +
((__t = ( category.title )) == null ? '' : __t) +
'\n  </h2>\n  \n  <p>' +
((__t = ( category.description )) == null ? '' : __t) +
'</p>\n  \n  ';
 if (_.isArray(category.links) && category.links.length > 0) { ;
__p += '\n    <div class="e-links">\n      <h4>In the news</h4>\n      \n      <ul class="e-links-list">\n        ';
 _.each(category.links, function(l) { ;
__p += '\n          <li><a href="' +
((__t = ( l.url )) == null ? '' : __t) +
'">' +
((__t = ( l.title )) == null ? '' : __t) +
'</a></li>\n        ';
 }) ;
__p += '\n      </ul>\n    </div>\n  ';
 } ;
__p += '\n  \n  <div class="clear-block bills-list">\n    ';
 category.bills.each(function(b) { ;
__p += '\n      ' +
((__t = ( templates.ebill({
        bill: b.toJSON(),
        expandable: true,
        templates: templates
      }) )) == null ? '' : __t) +
'\n    ';
 }); ;
__p += '\n  </div>\n  \n  <div class="clear-block total-bill">\n    Watching \n    <strong>' +
((__t = ( category.bills.length )) == null ? '' : __t) +
'</strong>\n    ';
 if (typeof category.total_bill_count != 'undefined') { ;
__p += '\n      of ' +
((__t = ( category.total_bill_count )) == null ? '' : __t) +
'\n    ';
 } ;
__p += '\n    bills in the ' +
((__t = ( category.title )) == null ? '' : __t) +
' category.\n  </div>\n</div>';

}
return __p
};

this["LT"]["templates"]["js/app/templates/template-ebill.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (!expandable) { ;
__p += '\n  ' +
((__t = ( header )) == null ? '' : __t) +
'\n';
 } ;
__p += '\n<div class="bill ebill ';
 if (expandable) { ;
__p += 'is-expandable';
 } ;
__p += ' ';
 if (!bill.hasBill) { ;
__p += 'no-bill';
 } ;
__p += '">\n  <div class="bill-top">\n    <div class="bill-status">\n      <img class="lower ';
 if (bill.newest_action && Math.abs(parseInt(bill.newest_action.date.diff(moment(), 'days'))) < LT.options.recentChangeThreshold) { ;
__p += 'passed';
 } ;
__p += '" src="' +
((__t = ( LT.options.imagePath )) == null ? '' : __t) +
'RecentChanges.png" title="';
 if (bill.newest_action && Math.abs(parseInt(bill.newest_action.date.diff(moment(), 'days'))) < LT.options.recentChangeThreshold) { ;
__p += 'Recently changed';
 } else { ;
__p += 'Not recently changed';
 } ;
__p += '" />\n      \n      <img class="lower ';
 if (bill.actions && bill.actions.lower) { ;
__p += 'passed';
 } ;
__p += '" src="' +
((__t = ( LT.options.imagePath )) == null ? '' : __t) +
'PassedHouse.png" title="';
 if (bill.actions && bill.actions.lower) { ;
__p += 'Passed ' +
((__t = ( LT.utils.translate('chamber', 'lower') )) == null ? '' : __t);
 } else { ;
__p += 'Not passed ' +
((__t = ( LT.utils.translate('chamber', 'lower') )) == null ? '' : __t);
 } ;
__p += '" />\n      \n      <img class="upper ';
 if (bill.actions && bill.actions.upper) { ;
__p += 'passed';
 } ;
__p += '" src="' +
((__t = ( LT.options.imagePath )) == null ? '' : __t) +
'PassedSenate.png" title="';
 if (bill.actions && bill.actions.upper) { ;
__p += 'Passed ' +
((__t = ( LT.utils.translate('chamber', 'upper') )) == null ? '' : __t);
 } else { ;
__p += 'Not passed ' +
((__t = ( LT.utils.translate('chamber', 'upper') )) == null ? '' : __t);
 } ;
__p += '" />\n      \n      ';
 if (LT.options.conferenceBill) { ;
__p += '\n        <img class="conference ';
 if (bill.bill_type && bill.bill_type.conference) { ;
__p += 'passed';
 } ;
__p += '" src="' +
((__t = ( LT.options.imagePath )) == null ? '' : __t) +
'InConferenceCommittee.png" title="';
 if (bill.bill_type && bill.bill_type.conference) { ;
__p += 'Conference bill created';
 } else { ;
__p += 'Coinference bill not created';
 } ;
__p += '" />\n      ';
 } ;
__p += '\n      \n      <img class="signed ';
 if (bill.actions && bill.actions.signed) { ;
__p += 'passed';
 } ;
__p += '" src="' +
((__t = ( LT.options.imagePath )) == null ? '' : __t) +
'SignedIntoLaw.png" title="';
 if (bill.actions && bill.actions.signed) { ;
__p += 'Signed into law by the Governor';
 } else { ;
__p += 'Not signed into law';
 } ;
__p += '" />\n    </div>\n    \n    ';
 if (expandable) { ;
__p += '<h3>';
 } else { ;
__p += '<h2>';
 } ;
__p += '\n      ' +
((__t = ( bill.title )) == null ? '' : __t) +
'\n      <a class="permalink" title="Permanent link to bill" href="#/bill/' +
((__t = ( encodeURI(bill.bill) )) == null ? '' : __t) +
'"></a>\n    ';
 if (expandable) { ;
__p += '</h3>';
 } else { ;
__p += '</h2>';
 } ;
__p += '\n    \n    ';
 if (!bill.hasBill){ ;
__p += '\n      <div class="latest-action">\n        <em>This bill has not been tracked by the legislature yet.</em>\n      </div>\n    ';
 } ;
__p += '\n    \n     ';
 if (bill.newest_action) { ;
__p += '\n      <div class="latest-action">\n        Last action ' +
((__t = ( bill.newest_action.date.fromNow() )) == null ? '' : __t) +
'.\n      </div>\n    ';
 } ;
__p += '\n    \n    <div class="description">\n      ';
 if (bill.description.indexOf('<p') < 3) { ;
__p += '\n        ' +
((__t = ( _.ellipsisText(bill.description, 60) )) == null ? '' : __t) +
'\n      ';
 } else { ;
__p += '\n        <p>' +
((__t = ( _.ellipsisText(bill.description, 60) )) == null ? '' : __t) +
'</p>\n      ';
 } ;
__p += '\n    </div>\n    \n    <div class="e-bill-categories">\n      <strong>Categories:</strong>\n      ';
 _.each(bill.categories, function(c, i) { ;
__p += '\n        <a href="#/category/' +
((__t = ( c.get('id') )) == null ? '' : __t) +
'">\n          ';
 if (c.get('image')) { ;
__p += '<img class="category-image" src="' +
((__t = ( LT.utils.imagePath(c.get('image')) )) == null ? '' : __t) +
'" />';
 } ;
__p += '\n          ' +
((__t = ( c.get('title') )) == null ? '' : __t) +
'</a>';
 if (i < bill.categories.length - 1) { ;
__p += ',';
 } ;
__p += '\n      ';
 }) ;
__p += '\n    </div>\n    \n    ';
 if (expandable && !(!bill.hasBill && bill.description.split(' ').length < 60 && !(_.isArray(bill.links) && bill.links.length > 0))) { ;
__p += '\n      <a href="#" class="bill-expand">More detail</a>\n      <a href="#/bill/' +
((__t = ( encodeURI(bill.bill) )) == null ? '' : __t) +
'" class="bill-details-link">More detail</a>\n    ';
 } ;
__p += '\n  </div>\n  \n  <div class="bill-bottom">\n    ';
 if (_.isArray(bill.links) && bill.links.length > 0) { ;
__p += '\n      <div class="e-links">\n        <h4>In the news</h4>\n        <ul class="e-links-list">\n          ';
 _.each(bill.links, function(l) { ;
__p += '\n            <li><a href="' +
((__t = ( l.url )) == null ? '' : __t) +
'">' +
((__t = ( l.title )) == null ? '' : __t) +
'</a></li>\n          ';
 }) ;
__p += '\n        </ul>\n      </div>\n    ';
 } ;
__p += '\n    \n    ';
 if (_.isArray(bill.custom_events) && bill.custom_events.length > 0) { ;
__p += '\n      <div class="custom-events">\n        <h4>Events</h4>\n        <ul class="custom-events-inner">\n          ';
 _.each(bill.custom_events, function(e) { ;
__p += '\n            <li><strong>' +
((__t = ( e.bill_id )) == null ? '' : __t) +
' ' +
((__t = ( e.action )) == null ? '' : __t) +
'</strong> on  ' +
((__t = ( e.date.format('MMM DD, YYYY') )) == null ? '' : __t) +
': ' +
((__t = ( e.description )) == null ? '' : __t) +
'</li>\n          ';
 }) ;
__p += '\n        </ul>\n      </div>\n    ';
 } ;
__p += '\n\n    ';
 if (_.isObject(bill.bill_conference)) { ;
__p += '\n      <div class="conference-bill">\n        <div class="conference-bill-inner clear-block">\n          ' +
((__t = ( templates.osbill({
            title: 'Conference Bill',
            bill: bill.bill_conference.toJSON(),
            templates: templates
          }) )) == null ? '' : __t) +
'\n        </div>\n      </div>\n      \n      <a class="expand-other-bills" href="#">Show other bills</a>\n    ';
 } ;
__p += '\n    \n    <div class="clear-block ';
 if (_.isObject(bill.bill_conference)) { ;
__p += 'has-conference-bill';
 } ;
__p += '">\n      ';
 if (_.isObject(bill.bill_primary)) { ;
__p += '\n        <div class="primary-bill ';
 if (_.isObject(bill.bill_companion)) { ;
__p += 'with-companion';
 } ;
__p += '">\n          <div class="primary-bill-inner clear-block">\n            ' +
((__t = ( templates.osbill({
              title: (LT.options.chamberLabel) ? LT.utils.translate('chamber', bill.bill_primary.get('chamber')) + ' Bill' : 'Primary Bill',
              bill: bill.bill_primary.toJSON(),
              templates: templates
            }) )) == null ? '' : __t) +
'\n          </div>\n        </div>\n      ';
 } ;
__p += '\n      \n      ';
 if (_.isObject(bill.bill_companion)) { ;
__p += '\n        <div class="companion-bill">\n          <div class="companion-bill-inner clear-block">\n            ' +
((__t = ( templates.osbill({
              title: (LT.options.chamberLabel) ? LT.utils.translate('chamber', bill.bill_companion.get('chamber')) + ' Bill' : 'Companion Bill',
              bill: bill.bill_companion.toJSON(),
              templates: templates
            }) )) == null ? '' : __t) +
'\n          </div>\n        </div>\n      ';
 } ;
__p += '\n    </div>\n  </div>\n</div>';

}
return __p
};

this["LT"]["templates"]["js/app/templates/template-error.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="error-container">\n  <div class="error"><span>There was an error.</span></div>\n</div>';

}
return __p
};

this["LT"]["templates"]["js/app/templates/template-header.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="ls-header-container">\n  <div class="ls-header">\n    <a class="all-categories-link" href="#/">\n      <img src="' +
((__t = ( LT.options.imagePath )) == null ? '' : __t) +
'back-100-85.png" />\n      All Categories\n    </a>\n    \n    <span class="categories-nav">\n      &nbsp;&nbsp;|&nbsp;&nbsp;\n      ';
 _.each(categories, function(c) { ;
__p += '\n        <a class="" href="#/category/' +
((__t = ( c.id )) == null ? '' : __t) +
'" title="' +
((__t = ( c.title )) == null ? '' : __t) +
'">\n          ' +
((__t = ( (c.short_title) ? c.short_title : c.title.split(' ')[0] )) == null ? '' : __t) +
'\n        </a>&nbsp;&nbsp;\n      ';
 }) ;
__p += '\n    </span>\n  </div>\n</div>';

}
return __p
};

this["LT"]["templates"]["js/app/templates/template-legislator.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\n<div class="legislator">\n  ';
 if (LT.options.legImageProxy) { ;
__p += '\n    <img src="' +
((__t = ( LT.options.legImageProxy )) == null ? '' : __t) +
'' +
((__t = ( encodeURI(photo_url) )) == null ? '' : __t) +
'" />\n  ';
 } else { ;
__p += '\n    <img src="' +
((__t = ( photo_url )) == null ? '' : __t) +
'" />\n  ';
 } ;
__p += '\n  \n  <div class="legislator-info">\n    ' +
((__t = ( full_name )) == null ? '' : __t) +
'<br />\n    ';
 if (typeof district != 'undefined') { ;
__p += '\n      District ' +
((__t = ( district )) == null ? '' : __t) +
'\n    ';
 } ;
__p += '\n    ';
 if (typeof party != 'undefined') { ;
__p += '\n      (' +
((__t = ( LT.utils.translate('partyAbbr', party) )) == null ? '' : __t) +
') \n    ';
 } ;
__p += ' <br />\n    ';
 if (typeof chamber != 'undefined') { ;
__p += '\n      ' +
((__t = ( LT.utils.translate('chamber', chamber) )) == null ? '' : __t) +
'\n    ';
 } ;
__p += '\n  </div>\n</div>';

}
return __p
};

this["LT"]["templates"]["js/app/templates/template-loading.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="loading-general-container">\n  <div class="loading-general"><span>Loading...</span></div>\n</div>';

}
return __p
};

this["LT"]["templates"]["js/app/templates/template-osbill.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (typeof detailed != 'undefined' && detailed)  { ;
__p += '\n  ' +
((__t = ( header )) == null ? '' : __t) +
'\n';
 } ;
__p += '\n\n<div class="osbill">\n  <h4>\n    ';
 if (typeof title != 'undefined') { ;
__p += '\n      ' +
((__t = ( title )) == null ? '' : __t) +
' (' +
((__t = ( bill.bill_id )) == null ? '' : __t) +
')\n    ';
 } else { ;
__p += '\n      ' +
((__t = ( bill.bill_id )) == null ? '' : __t) +
'\n    ';
 } ;
__p += '\n    <a class="permalink" title="Permanent link to bill" href="#/bill-detail/' +
((__t = ( encodeURI(bill.bill_id) )) == null ? '' : __t) +
'"></a>\n  </h4>\n  \n  ';
 if (typeof detailed != 'undefined' && detailed) { ;
__p += '\n    <p class="description">\n      ' +
((__t = ( bill.title )) == null ? '' : __t) +
'\n    </p>\n  ';
 } ;
__p += '\n\n  <div class="sponsors primary-sponsors">\n    <h5>Primary sponsors</h5>\n    \n    <div class="clear-block">\n      ';
 _.each(bill.sponsors, function(s) { ;
__p += '\n        ';
 if (s.type === 'primary') { ;
__p += '\n          <div class="sponsor" data-leg-id="' +
((__t = ( s.leg_id )) == null ? '' : __t) +
'" data-sponsor-type="' +
((__t = ( s.type )) == null ? '' : __t) +
'">\n            ' +
((__t = ( s.name )) == null ? '' : __t) +
' (' +
((__t = ( s.type )) == null ? '' : __t) +
')\n          </div>\n        ';
 } ;
__p += '\n      ';
 }) ;
__p += '\n    </div>\n  </div>\n  \n  <div class="actions">\n    <h5><span class="latest-action-label">Latest </span>Actions</h5>\n    \n    <ul class="actions-inner">\n      ';
 _.each(bill.actions, function(a) { ;
__p += '\n        ';
 if (a.date) { ;
__p += '\n          <li>\n            ' +
((__t = ( a.date.format('MMM DD, YYYY') )) == null ? '' : __t) +
':  \n            ' +
((__t = ( a.action )) == null ? '' : __t) +
'\n            (' +
((__t = ( LT.utils.translate('chamber', a.actor) )) == null ? '' : __t) +
')\n          </li>\n        ';
 } ;
__p += ' \n      ';
 }) ;
__p += '\n    </ul>\n  </div>\n\n  ';
 if (bill.sponsors.length > 1) { ;
__p += '\n    <ul class="sponsors co-sponsors clear-block">\n      <h5>Co-Sponsors</h5>\n      \n      <li class="co-sponsors-inner clear-block">\n        ';
 _.each(bill.sponsors, function(s) { ;
__p += '\n          ';
 if (s.type !== 'primary') { ;
__p += '\n            <div class="sponsor" data-leg-id="' +
((__t = ( s.leg_id )) == null ? '' : __t) +
'" data-sponsor-type="' +
((__t = ( s.type )) == null ? '' : __t) +
'">\n              ' +
((__t = ( s.name )) == null ? '' : __t) +
' (' +
((__t = ( s.type )) == null ? '' : __t) +
')\n            </div>\n          ';
 } ;
__p += '\n        ';
 }) ;
__p += '\n      </li>\n    </ul>\n  ';
 } ;
__p += '\n\n  ';
 if (_.isArray(bill.votes) && bill.votes.length > 0) { ;
__p += '\n    <div class="votes">\n      <h5>Votes</h5>\n      \n      <div class="votes-inner clear-block">\n        ';
 _.each(bill.votes, function(v) { ;
__p += '\n          ' +
((__t = ( v.date.format('MMM DD, YYYY') )) == null ? '' : __t) +
':\n          ' +
((__t = ( v.motion )) == null ? '' : __t) +
' ' +
((__t = ( (v.passed) ? 'passed' : 'failed' )) == null ? '' : __t) +
':\n          ' +
((__t = ( v.yes_count )) == null ? '' : __t) +
' Y - \n          ' +
((__t = ( v.no_count )) == null ? '' : __t) +
' N <br />\n        ';
 }) ;
__p += '\n      </div>\n    </div>\n  ';
 } ;
__p += '\n  \n  <div class="sources">\n    <h5>Sources</h5>\n    \n    ';
 var sourceCount = 0; ;
__p += '\n    ';
 _.each(bill.sources, function(s) {  sourceCount++ ; ;
__p += '\n      <a href="' +
((__t = ( s.url )) == null ? '' : __t) +
'" target="_blank">\n        ';
 if (s.text) { ;
__p += '\n          ' +
((__t = ( s.text )) == null ? '' : __t) +
'\n        ';
 } else { ;
__p += '\n          Source at ' +
((__t = ( _.parseURL(s.url).hostname )) == null ? '' : __t) +
' [' +
((__t = ( sourceCount )) == null ? '' : __t) +
']\n        ';
 } ;
__p += '\n      </a> <br />\n    ';
 }) ;
__p += '\n  </div>\n</div>';

}
return __p
};