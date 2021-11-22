/* Vue-email-list 

Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email
e stamparli in pagina all’interno di una lista. (sempre untilizzando Vue)

BONUS:
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

*/

/*

--DONE  1. Creo l'istanza di Vue => new Vue()
--DONE  2. Creo una proprietà a cui gli assegno un array vuoto => x: []
--DONE  3 Creo un ciclo for che verrà eseguito 10 volte all'interno di mounted() => for (let i = 0; i < 10; i++)
    --DONE  3.1 Creo una variabile all'interno di mounted(), a cui assegno il valore di this => const self = this;
    --DONE  3.2 All'interno del ciclo creo la richiesta che dovrà effettuare => axios .get .then
        --DONE  3.2.1 Utilizzo l'endpoint apposito per generare l'email nel .get => https://flynn.boolean.careers/exercises/api/random/mail
        --DONE  3.2.2 All'interno di .then pusho all'interno dell'array vuoto che avevo creato inizialmente il valore che mi restituirà la richiesta effettuata => self.emails.push(argomento.data.x)

BONUS 

--DONE  1. Inserisco un v-if nel tag "<ul>" in modo che le stampi tutte insieme => v-if="emails.length === 10"

*/

var app = new Vue({
    el: '#app',
    data: {
        emails: []
    },
    mounted() {
        const self = this;

        for (let i = 0; i < 10; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(element) {
                self.emails.push(element.data.response);
            });
        }
    }
});