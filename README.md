# __laionazeredo__ vanillajs_form_validations_and_submission
 This project demonstrate a form submission page that validates name and phone accordinly a defined pattern and sends the submission to a backend DB via JSON API.
![Representação da Página](/assets/final_result_page.png)

 ## Directory Tree
```
vanillajs_form_validations_and_submission           //
├─ .git                                                         //
├─ .gitattributes                                               //
├─ .gitignore                                                   //
├─ db.json                                                      // lowdb para ser usada para testes em conjunto com o json-server
├─ index.html                                                   // página principal com o formulário
├─ LICENSE                                                      //
├─ node_modules                                                 // dependências 
├─ package-lock.json                                            // 
├─ package.json                                                 //
├─ README.md                                                    //
├─ scripts.js                                                   // concentra todos os scripts
└─ styles                                                       // concentra todos os arquivos de estilos
  
```

## Frameworks and packages used
The majority of code base is in vanilla JS. For styling, I used Bulma CSS Framework.


## API Test
In case you want to test the developed api, I suggest using the json-server (can be found via NPM) and use the command "json-server -p 8080 db.json" to start the server. After that, just enter the url http://localhost:8080/formsubmissions