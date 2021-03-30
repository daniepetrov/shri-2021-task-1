(()=>{"use strict";var n,a,t=String.raw;function i(n,a){for(var t=[],i=0,e=n.length;i<e;)t.push(n.slice(i,i+=a));return t}function e(n,a){return a||(a=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))}Array.prototype.mapj=function(){return this.map.apply(this,arguments).join("")};function c(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function r(n){return function(n){if(Array.isArray(n))return s(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,a){if(n){if("string"==typeof n)return s(n,a);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(n,a):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(n,a){(null==a||a>n.length)&&(a=n.length);for(var t=0,i=new Array(a);t<a;t++)i[t]=n[t];return i}var d={leaders:function(n){var a=n.users.slice(0,5),t=n.users[0],i=n.users.findIndex((function(a){return a.id===n.selectedUserId}))||null,e=i?n.users[i]:null;return'\n    <div class="story leaders">\n      <div class="story__container">\n        <div class="story__content leaders__content">\n          <h1 class="story__heading">'.concat(n.title,'</h1>\n          <h2 class="story__caption">').concat(n.subtitle,'</h2>\n          <ul class="leaders__chart">\n            ').concat(a.mapj((function(a,c){var r,s=4===c&&e&&!n.users.slice(0,5).includes(e)?e:a,d=n.users.findIndex((function(n){return n.id===s.id}));return'\n                <li class="leaders__item '.concat((r=s===t,"leaders__item--active",r?"leaders__item--active":""),'">\n                  <div class="card">\n                    ').concat(function(n,a){return n.emoji&&0===a?'<div class="card__emoji">'.concat(n.emoji,"</div>"):n.users[a].id===n.selectedUserId||4===a&&e&&!n.users.slice(0,5).includes(e)?'<div class="card__emoji">👍</div>':""}(n,c),'\n                    <div class="card__avatar">\n                      <img src=',"/images/1x/".concat(s.avatar),' alt="" class="card__avatar-img" />\n                    </div>\n                    <div class="card__content">\n                      <div class="card__name">').concat(s.name,'</div>\n                      <div class="card__caption">').concat(s.valueText,'</div>\n                    </div>\n                  </div>\n                  <div class="leaders__bar">\n                    <div class="bar">\n                      <div class="bar__number">').concat(d+1,"</div>\n                      ").concat(0===c&&e&&!n.users.slice(0,3).includes(e)?'\n                              <div class="leaders__chosen">\n                                <div class="card">\n                                  <div class="card__emoji">👍</div>\n                                  <div class="card__avatar">\n                                    <img\n                                      src='.concat("/images/1x/".concat(e.avatar),'\n                                      alt=""\n                                      class="card__avatar-img"\n                                    />\n                                  </div>\n                                  <div class="card__content">\n                                    <div class="card__name">',e.name,'</div>\n                                    <div class="card__caption">').concat(e.valueText,'</div>\n                                  </div>\n                                </div>\n                                <div class="bar__number bar__number--bordered">\n                                  ').concat(i+1,"\n                                </div>\n                              </div>\n                            "):"","\n                    </div>\n                  </div>\n                </li>\n              ")})),"\n          </ul>\n        </div>\n      </div>\n    </div>\n  ")},vote:function(i){var c=i.offset||0,r=c+8,s=i.users.slice(c,r),d=function(n,a){return n?a:""};return t(n||(n=e(['\n    <div class="story vote">\n      <div class="story__container">\n        <div class="story__content vote__content">\n          <h1 class="story__heading">','</h1>\n          <h2 class="story__caption vote__caption">','</h2>\n          <ul class="vote__grid">\n            ','\n            <li class="vote__button vote__button--1">\n              <button\n                class="arrow-button arrow-button--reversed"\n                ','\n                data-action="update"\n                data-params=','\n              >\n                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <use xlink:href="#arrow-button" />\n                </svg>\n              </button>\n            </li>\n            <li class="vote__button vote__button--2">\n              <button\n                class="arrow-button arrow-button"\n                ','\n                data-action="update"\n                data-params=','\n              >\n                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <use xlink:href="#arrow-button" />\n                </svg>\n              </button>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  '])),i.title,i.subtitle,s.mapj((function(n,c){return t(a||(a=e(['\n                  <li class="vote__item vote__item--'," ",'">\n                    <div\n                      data-action="update"\n                      data-params=','\n                      class="card card--normal"\n                    >\n                    ','\n                      <div class="card__avatar">\n                        <img src=',' alt="" class="card__avatar-img" />\n                      </div>\n                      <div class="card__content">\n                        <div class="card__name">',"</div>\n                      </div>\n                    </div>\n                  </li>\n                "])),c+1,d(n.id===i.selectedUserId,"vote__item--active"),JSON.stringify({alias:"leaders",data:{selectedUserId:n.id}}),d(n.id===i.selectedUserId,'<div class="card__emoji">👍</div>'),"/images/1x/".concat(n.avatar),n.name)})),0===c&&"disabled",JSON.stringify({alias:"vote",data:{offset:0}}),0!==c&&"disabled",JSON.stringify({alias:"vote",data:{offset:i.offset||0}}))},chart:function(n){var a,t=n.values.sort((function(n,a){return n.title-a.title})),i=t.findIndex((function(n){return n.active})),e=(c(a={},i-3,"threeBefore"),c(a,i-6,"sixBefore"),c(a,i+2,"twoAfter"),c(a,i,"active"),a);return'\n    <div class="story chart">\n      <div class="story__container">\n        <div class="story__content chart__content">\n          <h1 class="story__heading">'.concat(n.title,'</h1>\n          <h2 class="story__caption">').concat(n.subtitle,'</h2>\n          <div class="chart__inner">\n            <div class="chart__grid">\n              ').concat(t.mapj((function(a,t){return'\n                    <div\n                      class="chart__item'.concat(function(n){return e[n]?" chart__item--".concat(e[n]):""}(t),'"\n                      style="max-height: ').concat(function(n,a){var t=n/a.values.find((function(n){return n.active})).value*100;return 0==+t?"auto":"".concat(t,"%")}(a.value,n),'"\n                    >\n                      ').concat((i=Boolean(a.value),c='<div class="chart__item-top">'.concat(a.value,"</div>"),i?c:""),'\n                      <div class="chart__item-bar">\n                        <div class="bar"></div>\n                      </div>\n                      <div class="chart__item-bottom">').concat(a.title,"</div>\n                    </div>\n                  ");var i,c})),'\n            </div>\n          </div>\n          <div class="chart__people">\n            ').concat(n.users.mapj((function(n){return'\n                  <li class="chart__people-column">\n                    <div class="card card--horizontal">\n                      <div class="card__avatar">\n                        <img src="/images/1x/'.concat(n.avatar,'" alt="" class="card__avatar-img" />\n                      </div>\n                      <div class="card__content">\n                        <div class="card__name">').concat(n.name,'</div>\n                        <div class="card__caption">').concat(n.valueText,"</div>\n                      </div>\n                    </div>\n                  </li>\n                ")})),"\n          </div>\n        </div>\n      </div>\n    </div>\n  ")},diagram:function(n){var a=["xl","lg","md","sm"],t=function(n){return String(n).replace(/коммиты|коммитов|коммита/gi,"")};return'\n    <div class="story diagram">\n      <div class="story__container">\n        <div class="story__content diagram__content">\n          <h1 class="story__heading">'.concat(n.title,'</h1>\n          <h2 class="story__caption diagram__caption">').concat(n.subtitle,'</h2>\n          <div class="diagram__inner">\n            <div class="diagram__circle">\n              <div class="diagram__info">\n                <div class="diagram__total">').concat(n.totalText,'</div>\n                <div class="diagram__total-diff">').concat(n.differenceText,'</div>\n              </div>\n            </div>\n            <div class="diagram__table">\n              ').concat(n.categories.mapj((function(n,i){return'\n                    <div class="diagram-row">\n                      <div class="diagram-row__circle '.concat(function(n){return a[n]?"diagram-row__circle--".concat(a[n]):""}(i),'"></div>\n                      <div class="diagram-row__title">').concat(n.title,'</div>\n                      <div class="diagram-row__diff">').concat(t(n.differenceText),'</div>\n                      <div class="diagram-row__value">').concat(t(n.valueText),"</div>\n                    </div>\n                  ")})),"\n            </div>\n          </div>\n          </div>\n        </div>\n      </div>\n</div>\n    ")},activity:function(n){var a={min:{range:[0]},mid:{range:[1,2]},max:{range:[3,4]},extra:{range:[5,6]}},t=n.data,e=function(n){for(var a=Object.keys(n),t=n[a[0]].length,i=0,e=[];i<t;){for(var c=0;c<a.length;c++)e.push(n[a[c]][i]);i++}return e}(t),c=function(n){return Object.keys(n).reduce((function(a,t){return[].concat(r(a),r(n[t].reduce((function(n,a,t,i){return(t+1)%2==0?[].concat(r(n),[a+i[t-1]]):n}),[])))}),[])}(t),s=i(e.map((function(n,a){return a})),7).reduce((function(n,a,t){return(t+1)%2==0?n.concat(a):n}),[]),d=i(c.map((function(n,a){return a})),12).reduce((function(n,a,t){return(t+1)%2==0?n.concat(a):n}),[]);return'\n    <div class="story">\n      <div class="story__container">\n        <div class="story__content activity__content">\n          <h1 class="story__heading">'.concat(n.title,'</h1>\n          <h2 class="story__caption activity__caption">').concat(n.subtitle,'</h2>\n          <div class="heatmap activity__heatmap activity__heatmap--ver">\n            ').concat(e.mapj((function(n,t){var i=Object.keys(a).find((function(t){return a[t].range.includes(n)})),e=s.includes(t);return'\n                <div\n                  class="heatmap__item heatmap__item--'.concat(i," ").concat(e?"heatmap__item--offseted":"",'"\n                >\n                  <div class="heatmap__item-bar"></div>\n                </div>\n              ')})),'\n          </div>\n          <div class="heatmap activity__heatmap activity__heatmap--hor">\n            ').concat(c.mapj((function(n,t){var i=Object.keys(a).find((function(t){return a[t].range.includes(n)})),e=d.includes(t);return'\n                <div\n                  class="heatmap__item heatmap__item--'.concat(i," ").concat(e?"heatmap__item--offseted":"",'"\n                >\n                  <div class="heatmap__item-bar"></div>\n                </div>\n              ')})),'\n          </div>\n          <div class="ranges-wrapper">\n            <div class="activity__ranges ranges">\n              <div class="ranges__item">\n                <div class="ranges__bar"></div>\n                <div class="ranges__value"></div>\n              </div>\n              <div class="ranges__item">\n                <div class="ranges__bar"></div>\n                <div class="ranges__value">0</div>\n              </div>\n              <div class="ranges__item">\n                <div class="ranges__bar"></div>\n                <div class="ranges__value">1 — 2</div>\n              </div>\n              <div class="ranges__item">\n                <div class="ranges__bar"></div>\n                <div class="ranges__value">3 — 4</div>\n              </div>\n              <div class="ranges__item">\n                <div class="ranges__bar"></div>\n                <div class="ranges__value">5 — 6</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ')}};window.renderTemplate=function(n,a){return function(n){switch(n){case"vote":return'\n        <div class="defs" style="height: 0;position: absolute;opacity: 0;">\n          <svg\n            fill="none"\n            viewBox="0 0 64 64"\n            width="0"\n            height="0"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <defs>\n              <path\n                id="arrow-button"\n                fill-rule="evenodd"\n                clip-rule="evenodd"\n                d="M32 62c16.569 0 30-13.431 30-30C62 15.431 48.569 2 32 2 15.431 2 2 15.431 2 32c0 16.569 13.431 30 30 30zm0 2c17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0 14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32zm27-32c0 14.912-12.088 27-27 27S5 46.912 5 32 17.088 5 32 5s27 12.088 27 27zm-33.94-4.06a1.5 1.5 0 00-2.12 2.12l8 8a1.5 1.5 0 002.12 0l8-8a1.5 1.5 0 00-2.12-2.12L32 34.878l-6.94-6.94z"\n                fill="currentColor"\n              />\n            </defs>\n          </svg>\n        </div>\n      ';default:return""}}(n)+d[n](a)}})();