# api-dioshopping

Backend do projeto final do Bootcamp DIO/Impulso com node e typescript

Se a Amazon começou com uma livraria on-line, porque não fazer uma feira on-line! rsrsrs
Resolvi aproveitar esta oportunidade e fazer uma feira on-line, usando como base o código ensinado pela professora.
Primeiro gostaria de um layout mais "temático", o que fez com que fosse necessário algumas mudanças no "CSS" da aplicação, precisei colocar mais informações nos produtos, como tipo da unidade de medida, tanto no "Card" dos produtos quanto no carrinho de compras. Entre outras mudanças, a que achei mais interessante, foi na página de contato, onde a aplicação faz uso da API para interagir com o BD, eu decidi acrescentar a funcionalidade de alterar a cor do background do comentário deixado pelo usuário, sendo azul para elogios e vermelho para reclamações, para isso precisei alterar o "Migration" e todo o código de criação de uma nova mensagem e, usando o typeORM, construir um novo banco de dados com a coluna "teor" (que seria teor da mensagem), essa informação quando consumida pelo Front-End altera a coloração do background, a partir de um operador ternário.

## Front-End: https://github.com/acristoni/

https://user-images.githubusercontent.com/107071638/182007030-ccedb9ef-f778-4f6f-8077-ac96070dc227.mp4
