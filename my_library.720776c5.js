var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=e.parcelRequired76b;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var i=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,i.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,o){t[e]=o},e.parcelRequired76b=i);var r=i("9XIKo"),n=i("1awFj"),s=i("hR8LQ"),l=i("28AT6"),a=i("iQIUW"),c=i("krGWQ"),d=i("31u3U"),f=i("f4Y7b"),u=i("7NS3K");const m=new(0,d.MyLibrary);new(0,f.default);function g(){try{m.getFromQueue()||(c.refs.emptyTitle.classList.remove("is-hidden"),c.refs.emptyImg.classList.remove("is-hidden"),a.Notify.info("Your film list is empty"))}catch(e){console.log(e.message)}}function y(){try{m.getFromWatched();queueMovie?async function(){const e=await getFilmFromLocalStorage(p);console.log(e),console.log(p);try{(0,u.renderFilmCard)(e),pagination.reset(e.total_results)}catch(e){console.log(e)}}():(c.refs.emptyTitle.classList.remove("is-hidden"),c.refs.emptyImg.classList.remove("is-hidden"),Notiflix.Notify.info("Your film list is empty"))}catch(e){console.log(e.message)}}let p=m.getFromWatched();var v=i("iytAl");i("c1QDM"),i("3yZwQ");var h=i("1wH5c");(0,l.libraryHeaderLinkBntLogic)(),localStorage.auth="yes",(0,h.onFirstLoadTheme)(),setInterval(v.giveLocalStorageToFirebaseStorage,1e4),(0,r.sliderRevenueFilms)(),c.refs.btnWatched.addEventListener("click",g),c.refs.btnQueue.addEventListener("click",y),(0,n.scrolToTop)(),(0,s.onTeamModal)();
//# sourceMappingURL=my_library.720776c5.js.map
