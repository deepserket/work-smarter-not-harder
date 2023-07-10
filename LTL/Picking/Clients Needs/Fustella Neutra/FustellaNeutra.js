// list of clients that want a neutral box
// TODO: the list should be updatable from a server
clients = ['000177',
           '001269',
           '001421',
           '001438',
           '100041',
           '100238',
           '100321',
           '100582',
           '100589',
           '100731',
           '100753',
           '100755',
           '100839',
           '100876',
           '100881'
          ]


// list of clients displayed on the webpage
readClients = document.getElementsByClassName("small nomarg")

for (i in readClients){
    if (clients.includes(readClients[i].innerHTML)) {
        document.getElementsByClassName("big2bold")[i].innerHTML = "<mark>" + (++i) + "</mark>" // the number of bays starts from 1, that's why there is a "++i"
    }
}
