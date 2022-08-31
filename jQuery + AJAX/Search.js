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
      const description = show.show.summary;
      const image = show.show.image.medium;
      $('#result').append(`
      <article>
        Name: ${name} <br>
        Site: <a href="${site}">link</a> <br>
        Description: ${description} <br>
        <img src="${image}" alt="cover image for ${name}"> <br><br>
      </article>`);
    });
  });

});