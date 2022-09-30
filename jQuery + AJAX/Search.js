// Start function when form is submitted
$('#searchForm').submit(function (event) {

  // Remove previous search results
  $('article').remove();

  event.preventDefault();

  // Take search terms from form
  const address = $(this).attr('action');
  const searchTerm = $(this).serialize();
  const url = address + '?' + searchTerm;

  //Fetch the api
  $.getJSON(url, function (shows) {
    console.log(shows);

    // list details for each result
    $.each(shows, function (i, show) {
      const name = show.show.name;
      const site = show.show.officialSite || show.show.url;
      const genres = show.show.genres;
      const description = show.show.summary;
      const image = show.show.image?.original || "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
      $('#result').append(`
      <article class="row py-5">
          <div class="row mb-3">
            <h2>${name}</h2>
          </div>
          <div class="col-4">
            <div class="row">
              <img src="${image}" alt="cover image for ${name}">
            </div>
          </div>
          <div class="col">
            <div class="row pb-3">
              <h3>Genres: ${genres.join(' | ')}</h3>
            </div> 
            <div class="row py-3">
              <h3>Description</h3>
              <div class"">${description}</div>
            </div>
            <div class="row py-3">
              <div class="col-3">
                <a class="btn btn-danger" href="${site}">Link to show</a>
              </div>
            </div>
          </div>
      </article>
      `);
    });
  });

});