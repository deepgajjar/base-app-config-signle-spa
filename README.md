# base-app-config-signle-spa

For running locally start this base app first 

And then start below apps 

1. https://github.com/deepgajjar/root-navigation-app-single-spa
2. https://github.com/deepgajjar/ems-sing-spa
3. https://github.com/deepgajjar/expense-tracker-sinngle-spa

And add those apps inside index.ejs like below for runninng locally <br /> <br />

 <% if (isLocal) { %>
 <br />
    <script type="systemjs-importmap"> 
     <br />
      {
      <br />
        "imports": { 
         <br />
          "react" : "https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js", <br />
          "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js", <br />
          "@SampelAuth/root-config": "//localhost:9000/SampelAuth-root-config.js", <br />
          "@SampelAuth/ems": "//localhost:8081/SampleAuth-ems.js", <br />
          "@SampleAuth/expense-tracker": "//localhost:8082/SampleAuth-expense-tracker.js", <br />
          "@SampleAuth/root-navigation":"//localhost:8080/SampleAuth-root-navigation.js" <br />
        } <br />
      } <br />
    </script> <br />
    <% } %> <br />

    For executing production builds first build all projects and except root-confing i have deployed project using http-server which is package that you will get from npm, <br />

    And root confi project i have deployed using nginx,you will be found nginx configuration in nginx.conf file inside project directory.
