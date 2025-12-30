// posts.js
async function posts(keyword, page = 1) {
  const baseUrl = 'https://vegamovies.hot';
  const url = `${baseUrl}/page/${page}/?s=${encodeURIComponent(keyword)}`;
  
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    
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
