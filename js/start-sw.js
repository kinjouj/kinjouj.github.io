if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js");
    const handler = (e) => {
      fetch(e.target.href, { cache: "no-cache" });
      e.target.removeEventListener("mouseover", handler);
    };
    const articleLinks = document.getElementsByName("article-link");
    for (var articleLink of articleLinks) {
      articleLink.addEventListener("mouseover", handler, false);
    }
  });
}
