const config = {
    blocks: 16,
    defaultGames: 5,
    maxGames: 10,
}

export {
    config
};

/*
Napisz prostą grę w zapamiętywanie wzorowaną na jednej z minigier `Among Us`. 
Aplikacja ma składać się z:
 dwóch boxów złożonych z 16 pól każdy (4 x 4)
 select z możliwością wyboru liczby kroków, które należy wykonać, aby wygrać  1-10 (domyślnie 5)
przycisk Start, oraz Resetuj

Po wyborze z selecta liczby kroków do wygranej, 
a następnie kliknięciu w Start w pierwszym boxie zostanie wylosowane jedno z pól, 
które zostanie podświetlone na 500ms, następnie użytkownik musi na drugim boxie kliknąć w pole z tą samą pozycją, 
jeśli jego wybór jest niepoprawny na lewym boxie wyświetlimy ostatnią poprawną kombinację, 
jeśli użytkownik wybierze poprawnie, na lewym boxie wyświetlimy dotychczasową kombinację  + nowy wylosowany. 
Użytkownik musi kopiować wylosowaną kombinację, gra kończy się gdy użytkownik zaznaczy poprawnie wszystkie boxy, 
(ilość wybiera w selecie). 
Wylosowane pola mogą się powtarzać. 
Resetowanie czyści oba boksy.
*/