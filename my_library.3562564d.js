var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},t=e.parcelRequired76b;null==t&&((t=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var l={id:e,exports:{}};return i[e]=l,t.call(l.exports,l,l.exports),l.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,i){r[e]=i},e.parcelRequired76b=t);var l=t("9XIKo"),a=t("1awFj"),n=t("hR8LQ"),o=t("28AT6"),s=t("iQIUW"),d=t("krGWQ"),c=t("f4Y7b"),f=t("31u3U"),y=t("7NS3K");const u=new(0,f.MyLibrary),m=new(0,c.default);let g=u.getFromWatched(),b=u.getFromQueue();let h=c.default.pageNum(newPage);async function p(){if(0!==g.length){d.refs.libraryEmpty.classList.add("is-hidden");Math.ceil(g.length/2);let e=g.slice(2*h-2,2*h-2+2);const i=await m.getFilmFromLocalStorage(e);try{(0,y.renderFilmCardLibrary)(i)}catch(e){console.log(e)}}else w()}async function L(){if(0!==b.length){d.refs.libraryEmpty.classList.add("is-hidden");Math.ceil(b.length/2);let e=b.slice(2*h-2,2*h-2+2);const i=await m.getFilmFromLocalStorage(e);try{(0,y.renderFilmCardLibrary)(i)}catch(e){console.log(e)}}else w()}function w(){s.Notify.info("Your film list is empty"),d.refs.libraryEmpty.classList.remove("is-hidden"),d.refs.movieLibrary.innerHTML=""}t("c1QDM"),t("3yZwQ");var F=t("1wH5c"),v=t("iytAl");(0,o.libraryHeaderLinkBntLogic)(),(0,F.onFirstLoadThemeLibrary)(),localStorage.auth="yes",(0,v.firebaseRealtimeDatabase)(),(0,l.sliderRevenueFilms)(),0!==g.length?p():s.Notify.info("Your film list is empty"),d.refs.btnWatched.addEventListener("click",p),d.refs.btnQueue.addEventListener("click",L),(0,a.scrolToTop)(),(0,n.onTeamModal)();
//# sourceMappingURL=my_library.3562564d.js.map
