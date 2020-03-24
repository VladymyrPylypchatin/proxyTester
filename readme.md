# Proxy tester

## To start:
```
npm i
```

```
node app.js
```

## How it works
`proxyTester(url, proxyCredentials)`
  * `url` url of the page to open
  * `proxyCredentials` information to connect to proxy server
    * `server` server ip in format ipaddress:port
    * `username` username to connect to proxies if required
    * `password` password to connect to proxies if required
  
  This function lauch chrome browser which use the proxies specified in the
  `proxyCredentials` and opens the url specified in `url`.
  
  Then you need to login into your account of one of the services like Google, Amazon,
  Twitter... to ensure that this pages isn't blocked.
  
  You shoudn't open new tabs and pages since proxies are applyed only to progrmaticaly opened page.
  So specify the url of the page you want to open in the param `url`
  

