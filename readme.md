## Запуск на сервере
ssh root + пароль
apt-get update
 apt-get install git
1. Команда ls - отобразить все папки в текущем деректории проекта  
2. Cd «имя вашего проекта» - перейти в дермьтер и передать ссылка  
3. В google пишем "docker install ubuntu" первая ссылка  
https://docs.docker.com/engine/install/ubuntu/  

- Выполнить все команды на шаге Set up Docker's apt repository.  
- Выполнить Install the Docker packages.  

8. Авторизация в docker: docker login -u <ваш логин от докер>  
- Login Seccsecful  

9. Запуск сборки:  
   - docker compose -f Docker-compose.yaml up --build  
   - Остановить сборку ctrl + c