/* ----------------------------------------------------
   --- Lightbox init                                ---
   ---------------------------------------------------- */
   if (typeof SimpleLightbox !== "undefined") {
    /* var matches = document.querySelectorAll(".gallery");
    matches.forEach(
        gal => {
            new SimpleLightbox("#" + gal.id + " a");
        }
    );*/
    new SimpleLightbox(".figure a");
}
