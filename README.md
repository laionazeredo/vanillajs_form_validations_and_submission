# __laionazeredo__ vanillajs_form_validations_and_submission
This project demonstrate a form submission page that validates name and phone accordinly a defined pattern and sends the submission to a backend DB via JSON API.
![Representação da Página](/assets/final_result_page.png)

 ## Directory Tree
```
vanillajs_form_validations_and_submission           //
├─ db.json                                                      // lowdb to be used with json-server to test purposes
├─ index.html                                                   // mainpage
├─ LICENSE                                                      //
├─ node_modules                                                 // dev dependencies
├─ package-lock.json                                            // 
├─ package.json                                                 //
├─ README.md                                                    //
├─ scripts.js                                                   // all js scripts
└─ styles                                                       // 
  
```

## Frameworks and packages used
The majority of code base is in vanilla JS. For styling, I used Bulma CSS Framework.

## Installing dependencies
Make `npm install` to install all dev dependencies.

## API Test
In case you want to test the developed api, I suggest using the json-server (can be found via NPM) and use the command "json-server -p 8080 db.json" to start the server. After that, just enter the url http://localhost:8080/formsubmissions