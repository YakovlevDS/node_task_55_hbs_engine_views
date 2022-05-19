// const express = require("express");
  
// const app = express();
// // создаем парсер для данных в формате json
// const jsonParser = express.json();
// // Прежде всего для получения данных в формате json необходимо создать парсер с помощью функции json:
// app.post("/user", jsonParser, (req, res)=> {
//     console.log(req.body);
//     if(!req.body) return res.sendStatus(400);
//     res.json(request.body); // отправляем пришедший ответ обратно
// });
  
// app.get("/", (req, res)=>{
// res.sendFile(__dirname + "/index.html");
// });
  
// app.listen(3000);


// Вообще движков представлений в Express довольно много: Pug, Jade, Dust, Nunjucks, EJS, Handlebars и другие.
// Прежде всего это настройка view engine, которая устанавливает используемый движок предствлений,
//  и views, которая устанавливает путь к папке с представлениями внутри проекта
//   (если этот параметр не установлен, то по умолчанию используется папка с именем views).

// Для хранения представлений определим в проекте папку views. 
// const express = require("express");
// const app = express();
// app.set("view engine", "hbs"); //!!!
// app.use("/contact", (_, res)=>{
//     res.render("contact.hbs");
// });
// app.use("/", (_, res)=>{
     
//     res.send("Главная страница");
// });
// app.listen(3000);

// ==============================================
// const express = require("express");
 
// const app = express();
 
// app.set("view engine", "hbs");
 
// app.use("/contact", function(_, response){
     
//     response.render("contact.hbs", {
//         title: "Мои контакты",
//         email: "gavgav@gmail.com",
//         phone: "+1234567890"
//     });
// });
// app.use("/", function(_, response){
     
//     response.send("Главная страница");
// });
// app.listen(3000);

// ==========================================
const express = require("express");

const app = express();
app.set("view engine", "hbs");
 
app.use("/contact", function(_, response){
     
    response.render("contact.hbs", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        phone: "+1234567890"
    });
});
 
app.use("/", function(_, response){
     
    response.send("Главная страница");
});
app.listen(3000);

// По умолчанию представления помещаются в папку views, но мы можем выбрать любую другую папку в проекте. Для этого необходимо установить параметр views:
// const express = require("express");
  
// const app = express();
  
// app.set("view engine", "hbs");
// app.set("views", "templates"); // установка пути к представлениям
// // В данном случае в качестве папки представлений используется папка templates.
// app.use("/contact", function(request, response){
      
//     response.render("contact");
// }); 
 
// app.listen(3000);