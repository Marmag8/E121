# E121

## Instrukcje uruchomenia

**1. Wymagane Oprogramowanie:**
> - [NodeJS](https://nodejs.org/en)
> - Git lub GitHub Desktop (w tym wypadku używany będzie Git)
> - Docker Desktop
> - Opcjonalnie dla podglądu danych, MongoDB Compass

**2. Potrzebne moduły:**
> - express
> - express-session
> - ejs
> - mongodb
> - dotenv

**3. Tworzenie i uruchamianie bazy danych:**
> - [Instrukcje](docker.txt)

**4. Uruchamianie aplikacji:**
> - Wciśnij Ctrl+R, a następnie wprowadź ```cmd``` w powstałym okienku i kliknij 'OK', aby otworzyć terminal
> - W terminalu otwórz wybrany folder, w którym ma się znaleźć aplikacja (np. ```cd C:\Users\PC\Documents```)
> - Następnie wykonaj polecenie ```git clone https://github.com/Marmag8/E121.git```
> - Przejdź do folderu aplikacji używając polecenia ```cd E121```
> - Otwórz folder aplikacji w eksploratorze plików, a następnie utwórz w nim plik o nazwie ```.env```
> - Skopiuj do pliku ```.env``` zawartość pliku ```.env.example```, i zamien ```twoj_dowolny_klucz``` na dowolny ciąg znaków, który służył będzie za klucz do sesji. Nie używaj spacji ani polskich znaków przy tworzeniu klucza.
> - W terminalu wykonaj polecenie ```npm i```
> - A następnie ```npm start```
> - By wyłączyć aplikację, zamknij terminal lub wykonaj Ctrl+C w oknie terminalu, a następnie zatrzymaj kontener w Docker Desktop

__**Przy każdym następującym uruchomieniu wystarczy uruchomić kontener w Docker Desktop, otworzyć folder aplikacji w terminalu, a następnie wykonać polecenie ```npm start```**__

# Lista Endpointow

Poniższa tabela zawiera listę głównych endpointów aplikacji, metodę HTTP, krótki opis oraz informację czy wymagana jest autoryzacja (zalogowany użytkownik).

| Ścieżka (path) | Metoda | Cel | Wymaga zalogowania? |
|---|---:|---|:---:|
| `/` | GET | Strona główna — lista przepisów należących do zalogowanego użytkownika | Tak |
| `/login` | GET | Formularz logowania | Nie |
| `/login` | POST | Obsługa logowania (podaje `username` i `password`) | Nie |
| `/register` | GET | Formularz rejestracji nowego użytkownika | Nie |
| `/register` | POST | Obsługa rejestracji (tworzy konto i loguje użytkownika) | Nie |
| `/logout` | GET | Wylogowanie (niszczy sesję) | Tak |
| `/new` | GET | Formularz dodawania nowego przepisu | Tak |
| `/new` | POST | Tworzy nowy przepis powiązany z aktualnym użytkownikiem | Tak |
| `/show/:id` | GET | Wyświetla szczegóły przepisu o podanym `id` (tylko jeśli przepis należy do użytkownika) | Tak |
| `/edit/:id` | GET | Formularz edycji przepisu (tylko właściciel) | Tak |
| `/edit/:id` | POST | Zapisuje zmiany przepisu (tylko właściciel) | Tak |
| `/delete/:id` | POST | Usuwa przepis o podanym `id` (tylko właściciel) | Tak |

Uwaga:
- Statyczne pliki (CSS, JS, obrazki) są serwowane z katalogu `public` i dostępne pod ścieżką `/` (np. ` /css/main.css`).
- Wymaganie zalogowania jest realizowane przez middleware sprawdzające sesję (`express-session`).
