!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=r.parcelRequired76b;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){n[e]=r},r.parcelRequired76b=i);var a=i("9I33b"),o=i("8BN3R"),s=i("puS1k"),l=i("jQRv7"),c=i("bpxeT"),u=i("2TvXO"),d=i("h6c0i"),f=i("4Nugj"),p=i("8fdg5"),y=i("UL92Z"),b=i("2ibrE"),m=new(0,y.MyLibrary),h=new(0,p.default),g=m.getFromWatched(),L=m.getFromQueue();function v(){return x.apply(this,arguments)}function x(){return(x=e(c)(e(u).mark((function r(){var t;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===g.length){e.next=8;break}return f.refs.libraryEmpty.classList.add("is-hidden"),e.next=4,h.getFilmFromLocalStorage(g);case 4:t=e.sent;try{(0,b.renderFilmCardLibrary)(t)}catch(e){console.log(e)}e.next=9;break;case 8:k();case 9:case"end":return e.stop()}}),r)})))).apply(this,arguments)}function w(){return F.apply(this,arguments)}function F(){return(F=e(c)(e(u).mark((function r(){var t;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===L.length){e.next=8;break}return f.refs.libraryEmpty.classList.add("is-hidden"),e.next=4,h.getFilmFromLocalStorage(L);case 4:t=e.sent;try{(0,b.renderFilmCardLibrary)(t)}catch(e){console.log(e)}e.next=9;break;case 8:k();case 9:case"end":return e.stop()}}),r)})))).apply(this,arguments)}function k(){d.Notify.info("Your film list is empty"),f.refs.libraryEmpty.classList.remove("is-hidden"),f.refs.movieLibrary.innerHTML=""}i("3fu6U"),i("bRreI");var T=i("3jSZ7"),E=i("eWSA9");(0,l.libraryHeaderLinkBntLogic)(),(0,T.onFirstLoadThemeLibrary)(),localStorage.auth="yes",(0,E.firebaseRealtimeDatabase)(),(0,a.sliderRevenueFilms)(),0!==g.length?v():d.Notify.info("Your film list is empty"),f.refs.btnWatched.addEventListener("click",v),f.refs.btnQueue.addEventListener("click",w),(0,o.scrolToTop)(),(0,s.onTeamModal)()}();
//# sourceMappingURL=my_library.c744ae5a.js.map