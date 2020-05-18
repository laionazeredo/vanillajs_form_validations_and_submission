# laionazeredo_elogroup_form_validation_with_js_test
 Build a validation form with HTML5 and JS validation loop and CSS provided by Bulma
![Representação da Página](/assets/final_result.png)

 ## Estrututra do projeto
```
laionazeredo_elogroup_form_validation_with_js_test              //
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

 ## Nome no Processo Seletivo
 Laion Azeredo (laion.azeredo@gmail.com)

 ## Frameworks e demais códigos usados
 A maior parte do trabalho é feita usando js puro. Para o estilo, usei o framework css Bulma.


 ## Teste da API
 Em caso de querer testar a api desenvolvida, sugiro utilizar o json-server (pode ser encontrado via NPM) e usar o comando "json-server -p 8080 db.json" para subir o servidor. Após isso, basta entrar na url  http://localhost:8080/formsubmissions