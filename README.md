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
> - dotenv

**3. Tworzenie i uruchamianie bazy danych:**
> - [Instrukcje](docker.txt)

**5. W Visual Studio Code:**
> - Otwórz wybrany folder, w którym ma się znaleźć aplikacja
> - Otwórz terminal
> - git clone https://github.com/Marmag8/E121.git
> - cd E121
> - Set-Content -Path .env -Value "SESSION_KEY=[WARTOSC]" -NoNewline -Encoding UTF8
> - W nowo utworzonym pliku .env, zamień ```[WARTOSC]``` na dowolny ciąg znaków, który posłuży za klucz sesji, np. ```"supersekretnyklucz"```
> - npm i
> - npm start
> - By wyłączyć aplikację, zamknij Visual Studio Code lub wykonaj Ctrl+C w terminalu, a następnie zatrzymaj kontener w Docker Desktop

### Przy każdym następującym uruchomieniu, wystarczy otworzyć folder aplikacji w Visual Studio Code, a następnie otworzyć terminal i wykonać polecenie ```npm start```