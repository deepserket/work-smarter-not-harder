// list of clients that want a neutral box
// TODO: the list should be updatable from a server
clients = ["000177",
           "100321",
           "100839",
           "100041",
           "100731",
           "100881",
           "100753",
           "100589",
           "001269",
           "100238",
           "100876",
           "100582",
           "100755",
           "001438"
          ]

for (row of document.getElementsByClassName("small nomarg")){
    if (clients.includes(row.innerHTML)) {
        row.innerHTML = "<mark>" + row.innerHTML + "</mark>"
    }
}
