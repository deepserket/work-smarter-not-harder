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

for (row of document.getElementsByClassName("small nomarg")){
    if (clients.includes(row.innerHTML)) {
        row.innerHTML = "<mark>" + row.innerHTML + "</mark>"
    }
}
