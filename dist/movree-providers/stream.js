// stream.js
async function stream(link) {
  try {
    const response = await fetch(link);
    const html = await response.text();
    const $ = cheerio.load(html);const streams = [];
    
    // Vegamovies sering meletakkan link di tombol download
    // Ini adalah logika pencarian link sederhana
    $('a.maxbutton').each((i, el) => {
      const btnText = $(el).text().toLowerCase();
      const href = $(el).attr('href');
      
      if (href && (href.includes('vcloud') || href.includes('drive'))) {
        streams.push({
          server: btnText || `Server ${i + 1}`,
          url: href, // Link ini mungkin perlu di-decrypt lagi tergantung proteksi site
        });
      }
    });
    
    return streams;
  } catch (error) {
    return [];
  }
}
