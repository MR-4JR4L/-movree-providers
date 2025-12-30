// meta.js
async function meta(link) {
  try {
    const response = await fetch(link);
    const html = await response.text();
    const $ = cheerio.load(html);
    
    return {
      title: $('.entry-title').text().trim(),
      plot: $('.entry-content p').first().text().trim(),
      cast: [],
      episodes: [] 
    };
  } catch (error) {
    return {};
  }
}
