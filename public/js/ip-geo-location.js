const text = fetch('https://www.cloudflare.com/cdn-cgi/trace')
  .then(response => {
    return(response.text());
  })
  .then(text => {
    const regex = /loc=../g;
    const found = text.match(regex);
    const country = found[0].split('=')[1]

    console.log(`country ~> ${country}`);
    return country;
  });

