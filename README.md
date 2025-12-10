# E121

## Instrukcje uruchomenia

**1. Wymagane Oprogramowanie:**
> - [NodeJS](https://nodejs.org/en)
> - Git lub GitHub Desktop (w tym wypadku używany będzie Git)
> - Docker Desktop
> - Wybrane środowisko programistyczne (w tym wypadku będzie to Visual Studio Code)
> - Opcjonalnie dla podglądu danych, MongoDB Compass

**2. Potrzebne moduły:**
> - express
> - express-session
> - ejs
> - mongodb

**3. W terminalu Docker Desktop:**
> - ```docker run -d --name recipes -p 27017:27017 mongo:6.0```

**4. Opcjonalnie, w MongoDB Compass utwórz połączenie z kontenerem:**
> - Przycisk "Add new connection"
> - URI: ```mongodb://localhost:27017```
> - Ustal nazwę i opcjonalnie kolor połączenia
> - Przycisk "Save & Connect"
> - Najedź na utworzoną bazę danych, następnie kliknij "Create Database"
> - Database Name: ```recipes```, Collection Name: ```recipes```
> - Przycisk "Create Database"

**5. W Visual Studio Code:**
> - Otwórz wybrany folder, w którym ma się znaleźć aplikacja
> - Otwórz terminal
> - git clone https://github.com/Marmag8/E121.git
> - npm i
> - npm start