const request = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
const json2csv = require('json2csv').Parser;

const URL="https://mentorpick.com/leaderBoard/course/5fc9711508395c71106bde9c";

(async() => {
    let mydata=[];
    const response = await request({
        uri: URL,
        headers: {
            // ":authority": "mentorpick.com",
            // ":method": "GET",
            // ":path": "/leaderBoard/course/5fc9711508395c71106bde9c",
            // ":scheme": "https",
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            //"cache-control": "max-age=0",
            // "cookie": "_ga=GA1.2.733546662.1609556575; __cfduid=d1b619ac5bd3468ef695d57efc24f55f51618834886; _gid=GA1.2.958216731.1620397976; connect.sid=s%3A_xtvlye-Ry-RDl0Iw6-7lGkXVsrFcj8Q.WL0Dw8%2B1%2F6BiQCXPOGp3P4wEHgzAaoQ3RWymfZK11Io",
            // "sec-ch-ua": '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            // "sec-ch-ua-mobile": "?0",
            // "sec-fetch-dest": "document",
            // "sec-fetch-mode": "navigate",
            // "sec-fetch-site": "none",
            // "sec-fetch-user": "?1",
            // "upgrade-insecure-requests": "1",
            // "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
        },
        gzip: true,
    });

    let $ = cheerio.load(response);
    let title = $('div[class="col-md-12"] > h3').text();
    let name = $('body > div.container.ng-scope > div:nth-child(3) > div > table > tbody > tr:nth-child(14) > td:nth-child(2)').text();
    let leetcode = $('div[class="col-md-12"] > table > tbody > tr:nth-child(14) > td:nth-child(3)').text();
    let codechef = $('div[class="col-md-12"] > table > tbody > tr:nth-child(14) > td:nth-child(4)').text();
    let codeforces = $('div[class="col-md-12"] > table > tbody > tr:nth-child(14) > td:nth-child(7)').text();
    let vjudge = $('div[class="col-md-12"] > table > tbody > tr:nth-child(14) > td:nth-child(9)').text();
    let mentorpick = $('div[class="col-md-12"] > table > tbody > tr:nth-child(14) > td:nth-child(10)').text();

    mydata.push({
        title, name, leetcode, codechef, codeforces, vjudge, mentorpick
    });

    console.log(mydata);

    /*mydata.forEach(element => {
        console.log(element);
    });

    const j2cp = new json2csv();
    const csv = j2cp.parse(mydata);

    fs.writeFileSync('./mydata.csv', csv, 'utf-8');*/

})();