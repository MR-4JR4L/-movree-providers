// catalog.js
async function catalog(filter, page = 1) {
  const baseUrl = 'https://vegamovies.hot';
  const url = page === 1 ? baseUrl : `${baseUrl}/page/${page}/`;
  
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html); // Asumsi cheerio tersedia global atau di-inject
    
    const results = [];
    $('.blog-items .blog-item').each((i, el) => {
      results.push({
        title: $(el).find('.entry-title').text().trim(),
        link: $(el).find('a').attr('href'),
        poster: $(el).find('img').attr('src'),
      });
    });
    
    return results;
  } catch (error) {
    return [];
  }
}
