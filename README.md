# E121

**Aplikacja napisana w NodeJS służąca do zarządzania listą przepisów, w tym dodawania, edycji, usuwania przepisów. Przepisy są zapisywane do lokalnej bazy danych i przywracane po każdym zalogowaniu.**

## Funkcjonalności

- Tworzenie konta i logowanie
- Lista przepisów; przepisy przypisane do konkretnego użytkownika
- Dodawanie, edycja, i usuwanie przepisów
- Podgląd szczegółów przepisu, takich jak opis, instrukcje przygotowania
- Przepisy zapisywane do bazy danych w MongoDB

## Instrukcje uruchomenia

**1. Wymagane Oprogramowanie:**
- [NodeJS](https://nodejs.org/en)
- Docker Desktop
- Opcjonalnie dla podglądu danych, MongoDB Compass

**2. Wykorzystane technologie:**
- NodeJS, a w tym:
    - express
    - ejs
    - js
    - moduł dotenv
    - moduł express-session
    - moduł bcrypt
- mongodb

**3. Tworzenie i uruchamianie bazy danych:**
- [Instrukcje](docker.txt)

**4. Uruchamianie aplikacji:**
- Wciśnij Ctrl+R, a następnie wprowadź `cmd` w powstałym okienku i kliknij 'OK', aby otworzyć terminal
- Pobierz pliki projektu w formie `.zip` z repozytorium i zapisz je w dowolnej lokalizacji, następnie wypakuj (alternatywnie, jeśli git jest zainstalowany, użyj polecenia `git clone https://github.com/Marmag8/E121.git` w terminalu)
- W terminalu, przejdź do folderu aplikacji używając polecenia `cd [ścieżka folderu aplikacji]`
- Otwórz folder aplikacji w eksploratorze plików, a następnie utwórz w nim plik o nazwie `.env`
- Skopiuj do pliku `.env` zawartość pliku `.env.example`, i zamien `twoj_dowolny_klucz` na dowolny ciąg znaków, który służył będzie za klucz do sesji. **Nie używaj spacji ani polskich znaków przy tworzeniu klucza.**
- W terminalu wykonaj polecenie `npm i`
- A następnie `npm start`
- By wyłączyć aplikację, zamknij terminal lub wykonaj Ctrl+C w oknie terminalu, a następnie zatrzymaj kontener w Docker Desktop

__**Przy każdym następującym uruchomieniu wystarczy uruchomić kontener w Docker Desktop, otworzyć folder aplikacji w terminalu, a następnie wykonać polecenie `npm start`**__

## Lista Endpointów

| Ścieżka | Metoda | Cel | Wymaga zalogowania? |
|---|:---:|---|:---:|
| `/` | GET | Strona główna - pokazuje listę przepisów należących do zalogowanego użytkownika | Tak |
| `/login` | GET | Formularz logowania | Nie |
| `/login` | POST | Obsługa logowania | Nie |
| `/register` | GET | Formularz rejestracji nowego użytkownika | Nie |
| `/register` | POST | Obsługa rejestracji (tworzy konto i loguje użytkownika) | Nie |
| `/logout` | GET | Wylogowanie (niszczy sesję) | Tak |
| `/new` | GET | Formularz dodawania nowego przepisu | Tak |
| `/new` | POST | Tworzy nowy przepis przypisany do aktualnego użytkownikia | Tak |
| `/show/:id` | GET | Wyświetla szczegóły przepisu o podanym `id` | Tak |
| `/edit/:id` | GET | Formularz edycji przepisu | Tak |
| `/edit/:id` | POST | Zapisuje zmiany w przepisie | Tak |
| `/delete/:id` | POST | Usuwa przepis o podanym `id` | Tak |

Dodatkowo:
- Statyczne pliki (CSS) są dostępne pod ścieżką `/public/`
- Weryfikacja zalogowania wykonywana przez middleware (`/src/middleware/auth.js`), a dane użytkownika są zapisywane w sesji (`express-session`).

## Autor: Bartosz Warzecha 4e 2025
