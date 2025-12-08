# E121

**Aplikacja o tematyce listy przepisów, umożliwiająca zarządzanie przepisami które zostają zapisane w bazie mongodb.**

## Instrukcje uruchomenia

**1. Potrzebne moduły:**
> - ejs
> - mongodb

**2. W terminalu Docker Desktop:**
> - docker run -d --name recipes -p 27017:27017 mongo:6.0
> - docker exec -it recipes mongosh
> - use recipes

-# *Opcjonalnie, w MongoDB Compass utwórz połączenie z kontenerem i zobacz stan kolekcji danych

**3. W terminalu Visual Studio Code:**
> - npm i ejs mongodb
> - npm start