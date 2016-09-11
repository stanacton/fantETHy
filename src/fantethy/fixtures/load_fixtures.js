// var Web3 = require('web3');
// var web3 = new Web3('localhost:8545');
var playersData = [
  {
    "name": "Andre Gray",
    "position": "FW"
  },
  {
    "name": "Sam Vokes",
    "position": "FW"
  },
  {
    "name": "Danny Ings",
    "position": "FW"
  },
  {
    "name": "Scott Arfield",
    "position": "MF"
  },
  {
    "name": "George Boyd",
    "position": "MF"
  },
  {
    "name": "Ashley Barnes",
    "position": "FW"
  },
  {
    "name": "Michael Kightly",
    "position": "MF"
  },
  {
    "name": "Matthew Taylor",
    "position": "MF"
  },
  {
    "name": "Lukas Jutkiewicz",
    "position": "FW"
  },
  {
    "name": "Michael Keane",
    "position": "DF"
  },
  {
    "name": "Ben Mee",
    "position": "DF"
  },
  {
    "name": "Dean Marney",
    "position": "MF"
  },
  {
    "name": "Stephen Ward",
    "position": "DF"
  },
  {
    "name": "Joey Barton",
    "position": "MF"
  },
  {
    "name": "David Jones",
    "position": "MF"
  },
  {
    "name": "Marvin Sordell",
    "position": "FW"
  },
  {
    "name": "Ross Wallace",
    "position": "MF"
  },
  {
    "name": "Rouwen Hennings",
    "position": "FW"
  },
  {
    "name": "Matthew Lowton",
    "position": "DF"
  },
  {
    "name": "Michael Duff",
    "position": "DF"
  },
  {
    "name": "Jason Shackell",
    "position": "DF"
  },
  {
    "name": "Junior Stanislas",
    "position": "MF"
  },
  {
    "name": "Keith Treacy",
    "position": "MF"
  },
  {
    "name": "Tendayi Darikwa",
    "position": "DF"
  },
  {
    "name": "Josh Ginnelly",
    "position": "MF"
  },
  {
    "name": "Jelle Vossen",
    "position": "FW"
  },
  {
    "name": "Steven Defour",
    "position": "MF"
  },
  {
    "name": "Jamie Vardy",
    "position": "FW"
  },
  {
    "name": "Riyad Mahrez",
    "position": "MF"
  },
  {
    "name": "Leonardo Ulloa",
    "position": "FW"
  },
  {
    "name": "David Nugent",
    "position": "FW"
  },
  {
    "name": "Danny Drinkwater",
    "position": "MF"
  },
  {
    "name": "Wes Morgan",
    "position": "DF"
  },
  {
    "name": "Shinji Okazaki",
    "position": "FW"
  },
  {
    "name": "Jeff Schlupp",
    "position": "MF"
  },
  {
    "name": "Andy King",
    "position": "MF"
  },
  {
    "name": "Robert Huth",
    "position": "DF"
  },
  {
    "name": "Esteban Cambiasso",
    "position": "MF"
  },
  {
    "name": "Chris Wood",
    "position": "FW"
  },
  {
    "name": "Andrej Kramarić",
    "position": "FW"
  },
  {
    "name": "Joe Dodoo",
    "position": "FW"
  },
  {
    "name": "Marc Albrighton",
    "position": "MF"
  },
  {
    "name": "Ritchie De Laet",
    "position": "DF"
  },
  {
    "name": "Lloyd Dyer",
    "position": "MF"
  },
  {
    "name": "Marcin Wasilewski",
    "position": "DF"
  },
  {
    "name": "Ahmed Musa",
    "position": "FW"
  },
  {
    "name": "Gary Taylor-Fletcher",
    "position": "FW"
  },
  {
    "name": "Kevin Phillips",
    "position": "FW"
  },
  {
    "name": "Demarai Gray",
    "position": "MF"
  },
  {
    "name": "Nathan Dyer",
    "position": "MF"
  },
  {
    "name": "Paul Konchesky",
    "position": "DF"
  },
  {
    "name": "Dean Hammond",
    "position": "MF"
  },
  {
    "name": "Matty James",
    "position": "MF"
  },
  {
    "name": "Ignasi Miquel",
    "position": "DF"
  },
  {
    "name": "Anthony Knockaert",
    "position": "MF"
  },
  {
    "name": "N'Golo Kanté",
    "position": "MF"
  },
  {
    "name": "Wayne Rooney",
    "position": "FW"
  },
  {
    "name": "Juan Mata",
    "position": "MF"
  },
  {
    "name": "Robin van Persie",
    "position": "FW"
  },
  {
    "name": "Anthony Martial",
    "position": "FW"
  },
  {
    "name": "Ander Herrera",
    "position": "MF"
  },
  {
    "name": "Marouane Fellaini",
    "position": "MF"
  },
  {
    "name": "Danny Welbeck",
    "position": "FW"
  },
  {
    "name": "Marcus Rashford",
    "position": "FW"
  },
  {
    "name": "Jesse Lingard",
    "position": "MF"
  },
  {
    "name": "Javier Hernández",
    "position": "FW"
  },
  {
    "name": "Memphis Depay",
    "position": "FW"
  },
  {
    "name": "Chris Smalling",
    "position": "DF"
  },
  {
    "name": "Ashley Young",
    "position": "MF"
  },
  {
    "name": "Adnan Januzaj",
    "position": "MF"
  },
  {
    "name": "Zlatan Ibrahimović",
    "position": "FW"
  },
  {
    "name": "Antonio Valencia",
    "position": "MF"
  },
  {
    "name": "Ángel di María",
    "position": "MF"
  },
  {
    "name": "Radamel Falcao",
    "position": "FW"
  },
  {
    "name": "Daley Blind",
    "position": "DF"
  },
  {
    "name": "James Wilson",
    "position": "FW"
  },
  {
    "name": "Patrice Evra",
    "position": "DF"
  },
  {
    "name": "Phil Jones",
    "position": "DF"
  },
  {
    "name": "Andreas Pereira",
    "position": "MF"
  },
  {
    "name": "Jonny Evans",
    "position": "DF"
  },
  {
    "name": "Michael Carrick",
    "position": "MF"
  },
  {
    "name": "Nemanja Vidić",
    "position": "DF"
  },
  {
    "name": "Morgan Schneiderlin",
    "position": "MF"
  },
  {
    "name": "Matteo Darmian",
    "position": "DF"
  },
  {
    "name": "Nani",
    "position": "MF"
  },
  {
    "name": "Tom Cleverley",
    "position": "MF"
  },
  {
    "name": "Darren Fletcher",
    "position": "MF"
  },
  {
    "name": "Henrikh Mkhitaryan",
    "position": "MF"
  },
  {
    "name": "Marcos Rojo",
    "position": "DF"
  },
  {
    "name": "Bastian Schweinsteiger",
    "position": "MF"
  },
  {
    "name": "Will Keane",
    "position": "FW"
  },
  {
    "name": "Luke Shaw",
    "position": "DF"
  },
  {
    "name": "Troy Deeney",
    "position": "FW"
  },
  {
    "name": "Odion Ighalo",
    "position": "FW"
  },
  {
    "name": "Matěj Vydra",
    "position": "FW"
  },
  {
    "name": "Almen Abdi",
    "position": "MF"
  },
  {
    "name": "Fernando Forestieri",
    "position": "FW"
  },
  {
    "name": "Gabriele Angella",
    "position": "DF"
  },
  {
    "name": "Dániel Tőzsér",
    "position": "MF"
  },
  {
    "name": "Lewis McGugan",
    "position": "MF"
  },
  {
    "name": "Adlène Guedioura",
    "position": "MF"
  },
  {
    "name": "Craig Cathcart",
    "position": "DF"
  },
  {
    "name": "Étienne Capoue",
    "position": "MF"
  },
  {
    "name": "Mathias Ranégie",
    "position": "FW"
  },
  {
    "name": "Ikechi Anya",
    "position": "MF"
  },
  {
    "name": "Gianni Munari",
    "position": "MF"
  },
  {
    "name": "Lloyd Dyer",
    "position": "MF"
  },
  {
    "name": "Steven Berghuis",
    "position": "MF"
  },
  {
    "name": "Cristian Battocchio",
    "position": "MF"
  },
  {
    "name": "Sebastian Prödl",
    "position": "DF"
  },
  {
    "name": "Jerome Sinclair",
    "position": "FW"
  },
  {
    "name": "Nathan Aké",
    "position": "DF"
  },
  {
    "name": "Keith Andrews",
    "position": "MF"
  },
  {
    "name": "José Cholebas",
    "position": "DF"
  },
  {
    "name": "Miguel Layún",
    "position": "DF"
  },
  {
    "name": "Albert Riera",
    "position": "MF"
  },
  {
    "name": "Alexander Merkel",
    "position": "MF"
  },
  {
    "name": "Matthew Connolly",
    "position": "DF"
  },
  {
    "name": "Roberto Pereyra",
    "position": "MF"
  },
  {
    "name": "Joel Ekstrand",
    "position": "DF"
  },
  {
    "name": "Sean Murray",
    "position": "MF"
  },
  {
    "name": "Marco Faraoni",
    "position": "DF"
  },
  {
    "name": "Ben Watson",
    "position": "MF"
  },
  {
    "name": "Marco Cassetti",
    "position": "DF"
  },
  {
    "name": "Daniel Sturridge",
    "position": "FW"
  },
  {
    "name": "Luis Suárez",
    "position": "FW"
  },
  {
    "name": "Philippe Coutinho",
    "position": "MF"
  },
  {
    "name": "Steven Gerrard",
    "position": "MF"
  },
  {
    "name": "Raheem Sterling",
    "position": "MF"
  },
  {
    "name": "Adam Lallana",
    "position": "MF"
  },
  {
    "name": "Roberto Firmino",
    "position": "FW"
  },
  {
    "name": "Divock Origi",
    "position": "FW"
  },
  {
    "name": "Jordan Henderson",
    "position": "MF"
  },
  {
    "name": "Christian Benteke",
    "position": "FW"
  },
  {
    "name": "James Milner",
    "position": "MF"
  },
  {
    "name": "Martin Škrtel",
    "position": "DF"
  },
  {
    "name": "Danny Ings",
    "position": "FW"
  },
  {
    "name": "Jordon Ibe",
    "position": "MF"
  },
  {
    "name": "Joe Allen",
    "position": "MF"
  },
  {
    "name": "Mario Balotelli",
    "position": "FW"
  },
  {
    "name": "Mamadou Sakho",
    "position": "DF"
  },
  {
    "name": "Lazar Marković",
    "position": "FW"
  },
  {
    "name": "Alberto Moreno",
    "position": "DF"
  },
  {
    "name": "Sheyi Ojo",
    "position": "MF"
  },
  {
    "name": "Marko Grujić",
    "position": "MF"
  },
  {
    "name": "Rickie Lambert",
    "position": "FW"
  },
  {
    "name": "Emre Can",
    "position": "MF"
  },
  {
    "name": "Nathaniel Clyne",
    "position": "DF"
  },
  {
    "name": "Sadio Mané",
    "position": "FW"
  },
  {
    "name": "Victor Moses",
    "position": "MF"
  },
  {
    "name": "Dejan Lovren",
    "position": "DF"
  },
  {
    "name": "Daniel Agger",
    "position": "DF"
  },
  {
    "name": "Fabio Borini",
    "position": "FW"
  },
  {
    "name": "Jon Flanagan",
    "position": "DF"
  },
  {
    "name": "Jerome Sinclair",
    "position": "FW"
  },
  {
    "name": "Suso",
    "position": "FW"
  },
  {
    "name": "Ryan Kent",
    "position": "MF"
  },
  {
    "name": "Brad Smith",
    "position": "DF"
  },
  {
    "name": "Jordan Rossiter",
    "position": "MF"
  },
  {
    "name": "Jack Dunn",
    "position": "FW"
  },
  {
    "name": "João Carlos Teixeira",
    "position": "MF"
  },
  {
    "name": "Benjamin Woodburn",
    "position": ""
  },
  {
    "name": "Glen Johnson",
    "position": "DF"
  },
  {
    "name": "Kolo Touré",
    "position": "DF"
  },
  {
    "name": "Iago Aspas",
    "position": "FW"
  },
  {
    "name": "Lucas Leiva",
    "position": "MF"
  },
  {
    "name": "Martin Kelly",
    "position": "DF"
  },
  {
    "name": "Georginio Wijnaldum",
    "position": "MF"
  },
  {
    "name": "Graziano Pellè",
    "position": "FW"
  },
  {
    "name": "Sadio Mané",
    "position": "FW"
  },
  {
    "name": "Shane Long",
    "position": "FW"
  },
  {
    "name": "Jay Rodriguez",
    "position": "FW"
  },
  {
    "name": "Dušan Tadić",
    "position": "MF"
  },
  {
    "name": "Rickie Lambert",
    "position": "FW"
  },
  {
    "name": "Adam Lallana",
    "position": "MF"
  },
  {
    "name": "Morgan Schneiderlin",
    "position": "MF"
  },
  {
    "name": "Steven Davis",
    "position": "MF"
  },
  {
    "name": "José Fonte",
    "position": "DF"
  },
  {
    "name": "Maya Yoshida",
    "position": "DF"
  },
  {
    "name": "Virgil van Dijk",
    "position": "DF"
  },
  {
    "name": "Victor Wanyama",
    "position": "MF"
  },
  {
    "name": "James Ward-Prowse",
    "position": "MF"
  },
  {
    "name": "Charlie Austin",
    "position": "FW"
  },
  {
    "name": "Sam Gallagher",
    "position": "FW"
  },
  {
    "name": "Nathaniel Clyne",
    "position": "DF"
  },
  {
    "name": "Pablo Daniel Osvaldo",
    "position": "FW"
  },
  {
    "name": "Ryan Bertrand",
    "position": "DF"
  },
  {
    "name": "Jack Cork",
    "position": "MF"
  },
  {
    "name": "Nathan Redmond",
    "position": "MF"
  },
  {
    "name": "Juanmi",
    "position": "FW"
  },
  {
    "name": "Oriol Romeu",
    "position": "MF"
  },
  {
    "name": "Eljero Elia",
    "position": "FW"
  },
  {
    "name": "Dejan Lovren",
    "position": "DF"
  },
  {
    "name": "Cuco Martina",
    "position": "DF"
  },
  {
    "name": "Gastón Ramírez",
    "position": "MF"
  },
  {
    "name": "Cédric Soares",
    "position": "DF"
  },
  {
    "name": "Guly do Prado",
    "position": "FW"
  },
  {
    "name": "Toby Alderweireld",
    "position": "DF"
  },
  {
    "name": "Pierre Højbjerg",
    "position": "MF"
  },
  {
    "name": "Eden Hazard",
    "position": "MF"
  },
  {
    "name": "Diego Costa",
    "position": "FW"
  },
  {
    "name": "Oscar",
    "position": "MF"
  },
  {
    "name": "Willian",
    "position": "MF"
  },
  {
    "name": "Loïc Rémy",
    "position": "FW"
  },
  {
    "name": "André Schürrle",
    "position": "MF"
  },
  {
    "name": "John Terry",
    "position": "DF"
  },
  {
    "name": "Cesc Fàbregas",
    "position": "MF"
  },
  {
    "name": "Branislav Ivanović",
    "position": "DF"
  },
  {
    "name": "Gary Cahill",
    "position": "DF"
  },
  {
    "name": "Ramires",
    "position": "MF"
  },
  {
    "name": "Samuel Eto'o",
    "position": "FW"
  },
  {
    "name": "Pedro Rodríguez",
    "position": "MF"
  },
  {
    "name": "Fernando Torres",
    "position": "FW"
  },
  {
    "name": "Frank Lampard",
    "position": "MF"
  },
  {
    "name": "Demba Ba",
    "position": "FW"
  },
  {
    "name": "Didier Drogba",
    "position": "FW"
  },
  {
    "name": "Bertrand Traoré",
    "position": "FW"
  },
  {
    "name": "Nemanja Matić",
    "position": "MF"
  },
  {
    "name": "John Obi Mikel",
    "position": "MF"
  },
  {
    "name": "Kurt Zouma",
    "position": "DF"
  },
  {
    "name": "César Azpilicueta",
    "position": "DF"
  },
  {
    "name": "Mohamed Salah",
    "position": "FW"
  },
  {
    "name": "Ruben Loftus-Cheek",
    "position": "MF"
  },
  {
    "name": "Michy Batshuayi",
    "position": "FW"
  },
  {
    "name": "Victor Moses",
    "position": "MF"
  },
  {
    "name": "Kenedy",
    "position": "MF"
  },
  {
    "name": "Dominic Solanke",
    "position": "FW"
  },
  {
    "name": "Filipe Luís",
    "position": "DF"
  },
  {
    "name": "Nathaniel Chalobah",
    "position": "MF"
  },
  {
    "name": "Juan Mata",
    "position": "MF"
  },
  {
    "name": "Radamel Falcao",
    "position": "FW"
  },
  {
    "name": "Alexandre Pato",
    "position": "FW"
  },
  {
    "name": "Nathan Aké",
    "position": "DF"
  },
  {
    "name": "Baba Rahman",
    "position": "DF"
  },
  {
    "name": "Jonathan Walters",
    "position": "FW"
  },
  {
    "name": "Peter Crouch",
    "position": "FW"
  },
  {
    "name": "Mame Biram Diouf",
    "position": "FW"
  },
  {
    "name": "Marko Arnautović",
    "position": "FW"
  },
  {
    "name": "Charlie Adam",
    "position": "MF"
  },
  {
    "name": "Bojan Krkić",
    "position": "FW"
  },
  {
    "name": "Stephen Ireland",
    "position": "MF"
  },
  {
    "name": "Steven N'Zonzi",
    "position": "MF"
  },
  {
    "name": "Peter Odemwingie",
    "position": "FW"
  },
  {
    "name": "Joselu",
    "position": "FW"
  },
  {
    "name": "Xherdan Shaqiri",
    "position": "MF"
  },
  {
    "name": "Victor Moses",
    "position": "MF"
  },
  {
    "name": "Oussama Assaidi",
    "position": "MF"
  },
  {
    "name": "Ibrahim Afellay",
    "position": "MF"
  },
  {
    "name": "Ryan Shawcross",
    "position": "DF"
  },
  {
    "name": "Giannelli Imbula",
    "position": "MF"
  },
  {
    "name": "Phil Bardsley",
    "position": "DF"
  },
  {
    "name": "Marc Muniesa",
    "position": "DF"
  },
  {
    "name": "Geoff Cameron",
    "position": "DF"
  },
  {
    "name": "Steve Sidwell",
    "position": "MF"
  },
  {
    "name": "Jermaine Pennant",
    "position": "MF"
  },
  {
    "name": "Asmir Begović",
    "position": "GK"
  },
  {
    "name": "Erik Pieters",
    "position": "DF"
  },
  {
    "name": "Marco van Ginkel",
    "position": "MF"
  },
  {
    "name": "Joe Allen",
    "position": "MF"
  },
  {
    "name": "Albert Adomah",
    "position": "MF"
  },
  {
    "name": "Patrick Bamford",
    "position": "FW"
  },
  {
    "name": "Kike",
    "position": "FW"
  },
  {
    "name": "Grant Leadbitter",
    "position": "MF"
  },
  {
    "name": "Lee Tomlin",
    "position": "FW"
  },
  {
    "name": "Cristhian Stuani",
    "position": "FW"
  },
  {
    "name": "Jordan Rhodes",
    "position": "FW"
  },
  {
    "name": "David Nugent",
    "position": "FW"
  },
  {
    "name": "Jelle Vossen",
    "position": "FW"
  },
  {
    "name": "Gastón Ramírez",
    "position": "MF"
  },
  {
    "name": "Adam Reach",
    "position": "MF"
  },
  {
    "name": "Daniel Ayala",
    "position": "DF"
  },
  {
    "name": "Danny Graham",
    "position": "FW"
  },
  {
    "name": "Diego Fabbrini",
    "position": "MF"
  },
  {
    "name": "Emmanuel Ledesma",
    "position": "MF"
  },
  {
    "name": "Stewart Downing",
    "position": "MF"
  },
  {
    "name": "George Friend",
    "position": "DF"
  },
  {
    "name": "Mustapha Carayol",
    "position": "MF"
  },
  {
    "name": "Emilio Nsue",
    "position": "DF"
  },
  {
    "name": "Bradley Fewster",
    "position": "FW"
  },
  {
    "name": "Yanic Wildschut",
    "position": "MF"
  },
  {
    "name": "Álvaro Negredo",
    "position": "FW"
  },
  {
    "name": "Adam Forshaw",
    "position": "MF"
  },
  {
    "name": "Jacob Butterfield",
    "position": "MF"
  },
  {
    "name": "Luke Williams",
    "position": "FW"
  },
  {
    "name": "Ben Gibson",
    "position": "DF"
  },
  {
    "name": "Jonathan Woodgate",
    "position": "DF"
  },
  {
    "name": "Adam Clayton",
    "position": "MF"
  },
  {
    "name": "Nathaniel Chalobah",
    "position": "MF"
  },
  {
    "name": "Carlos de Pena",
    "position": "MF"
  },
  {
    "name": "Viktor Fischer",
    "position": "FW"
  },
  {
    "name": "Fernando Amorebieta",
    "position": "DF"
  },
  {
    "name": "Fábio",
    "position": "DF"
  },
  {
    "name": "Saido Berahino",
    "position": "FW"
  },
  {
    "name": "Salomón Rondón",
    "position": "FW"
  },
  {
    "name": "Victor Anichebe",
    "position": "FW"
  },
  {
    "name": "James Morrison",
    "position": "MF"
  },
  {
    "name": "Brown Ideye",
    "position": "FW"
  },
  {
    "name": "Craig Gardner",
    "position": "MF"
  },
  {
    "name": "Stéphane Sessègnon",
    "position": "MF"
  },
  {
    "name": "Chris Brunt",
    "position": "MF"
  },
  {
    "name": "Gareth McAuley",
    "position": "DF"
  },
  {
    "name": "Craig Dawson",
    "position": "DF"
  },
  {
    "name": "James McClean",
    "position": "MF"
  },
  {
    "name": "Darren Fletcher",
    "position": "MF"
  },
  {
    "name": "Morgan Amalfitano",
    "position": "MF"
  },
  {
    "name": "Matěj Vydra",
    "position": "FW"
  },
  {
    "name": "Shane Long",
    "position": "FW"
  },
  {
    "name": "Graham Dorrans",
    "position": "MF"
  },
  {
    "name": "Youssouf Mulumbu",
    "position": "MF"
  },
  {
    "name": "Jonas Olsson",
    "position": "DF"
  },
  {
    "name": "Thievy Bifouma",
    "position": "FW"
  },
  {
    "name": "Nicolas Anelka",
    "position": "FW"
  },
  {
    "name": "Callum McManaman",
    "position": "MF"
  },
  {
    "name": "Jonny Evans",
    "position": "DF"
  },
  {
    "name": "Matt Phillips",
    "position": "MF"
  },
  {
    "name": "Silvestre Varela",
    "position": "FW"
  },
  {
    "name": "Joleon Lescott",
    "position": "DF"
  },
  {
    "name": "Diego Lugano",
    "position": "DF"
  },
  {
    "name": "Claudio Yacob",
    "position": "MF"
  },
  {
    "name": "Liam Ridgewell",
    "position": "DF"
  },
  {
    "name": "Rickie Lambert",
    "position": "FW"
  },
  {
    "name": "Adil Nabi",
    "position": "FW"
  },
  {
    "name": "Jonathan Leko",
    "position": "FW"
  },
  {
    "name": "Romelu Lukaku",
    "position": "FW"
  },
  {
    "name": "Kevin Mirallas",
    "position": "MF"
  },
  {
    "name": "Ross Barkley",
    "position": "MF"
  },
  {
    "name": "Steven Naismith",
    "position": "FW"
  },
  {
    "name": "Séamus Coleman",
    "position": "DF"
  },
  {
    "name": "Leighton Baines",
    "position": "DF"
  },
  {
    "name": "Arouna Koné",
    "position": "FW"
  },
  {
    "name": "Gerard Deulofeu",
    "position": "MF"
  },
  {
    "name": "Aaron Lennon",
    "position": "MF"
  },
  {
    "name": "Leon Osman",
    "position": "MF"
  },
  {
    "name": "Phil Jagielka",
    "position": "DF"
  },
  {
    "name": "James McCarthy",
    "position": "MF"
  },
  {
    "name": "Ramiro Funes Mori",
    "position": "DF"
  },
  {
    "name": "Gareth Barry",
    "position": "MF"
  },
  {
    "name": "Samuel Eto'o",
    "position": "FW"
  },
  {
    "name": "Tom Cleverley",
    "position": "MF"
  },
  {
    "name": "Bryan Oviedo",
    "position": "DF"
  },
  {
    "name": "Aiden McGeady",
    "position": "MF"
  },
  {
    "name": "Muhamed Bešić",
    "position": "MF"
  },
  {
    "name": "John Heitinga",
    "position": "DF"
  },
  {
    "name": "Magaye Gueye",
    "position": "FW"
  },
  {
    "name": "Steven Pienaar",
    "position": "MF"
  },
  {
    "name": "John Stones",
    "position": "DF"
  },
  {
    "name": "Lacina Traoré",
    "position": "FW"
  },
  {
    "name": "Conor McAleny",
    "position": "FW"
  },
  {
    "name": "Brendan Galloway",
    "position": "DF"
  },
  {
    "name": "Tyias Browning",
    "position": "DF"
  },
  {
    "name": "Darron Gibson",
    "position": "MF"
  },
  {
    "name": "Mason Holgate",
    "position": "DF"
  },
  {
    "name": "Harry Kane",
    "position": "FW"
  },
  {
    "name": "Christian Eriksen",
    "position": "MF"
  },
  {
    "name": "Nacer Chadli",
    "position": "MF"
  },
  {
    "name": "Érik Lamela",
    "position": "MF"
  },
  {
    "name": "Emmanuel Adebayor",
    "position": "FW"
  },
  {
    "name": "Roberto Soldado",
    "position": "FW"
  },
  {
    "name": "Dele Alli",
    "position": "MF"
  },
  {
    "name": "Paulinho",
    "position": "MF"
  },
  {
    "name": "Heung-Min Son",
    "position": "MF"
  },
  {
    "name": "Danny Rose",
    "position": "DF"
  },
  {
    "name": "Mousa Dembélé",
    "position": "MF"
  },
  {
    "name": "Andros Townsend",
    "position": "MF"
  },
  {
    "name": "Eric Dier",
    "position": "MF"
  },
  {
    "name": "Gylfi Sigurðsson",
    "position": "MF"
  },
  {
    "name": "Toby Alderweireld",
    "position": "DF"
  },
  {
    "name": "Ryan Mason",
    "position": "MF"
  },
  {
    "name": "Jermain Defoe",
    "position": "FW"
  },
  {
    "name": "Tom Carroll",
    "position": "MF"
  },
  {
    "name": "Vlad Chiricheș",
    "position": "DF"
  },
  {
    "name": "Kyle Walker",
    "position": "DF"
  },
  {
    "name": "Étienne Capoue",
    "position": "MF"
  },
  {
    "name": "Jan Vertonghen",
    "position": "DF"
  },
  {
    "name": "Lewis Holtby",
    "position": "MF"
  },
  {
    "name": "Benjamin Stambouli",
    "position": "MF"
  },
  {
    "name": "Vincent Janssen",
    "position": "FW"
  },
  {
    "name": "Kieran Trippier",
    "position": "DF"
  },
  {
    "name": "Victor Wanyama",
    "position": "MF"
  },
  {
    "name": "Younès Kaboul",
    "position": "DF"
  },
  {
    "name": "Nabil Bentaleb",
    "position": "MF"
  },
  {
    "name": "Aaron Lennon",
    "position": "MF"
  },
  {
    "name": "Sandro",
    "position": "MF"
  },
  {
    "name": "Callum Wilson",
    "position": "FW"
  },
  {
    "name": "Yann Kermorgant",
    "position": "FW"
  },
  {
    "name": "Matt Ritchie",
    "position": "MF"
  },
  {
    "name": "Marc Pugh",
    "position": "MF"
  },
  {
    "name": "Lewis Grabban",
    "position": "FW"
  },
  {
    "name": "Brett Pitman",
    "position": "FW"
  },
  {
    "name": "Harry Arter",
    "position": "MF"
  },
  {
    "name": "Steve Cook",
    "position": "DF"
  },
  {
    "name": "Dan Gosling",
    "position": "MF"
  },
  {
    "name": "Joshua King",
    "position": "MF"
  },
  {
    "name": "Junior Stanislas",
    "position": "MF"
  },
  {
    "name": "Tokelo Rantie",
    "position": "FW"
  },
  {
    "name": "Benik Afobe",
    "position": "FW"
  },
  {
    "name": "Charlie Daniels",
    "position": "DF"
  },
  {
    "name": "Glenn Murray",
    "position": "FW"
  },
  {
    "name": "Tommy Elphick",
    "position": "DF"
  },
  {
    "name": "Ryan Fraser",
    "position": "MF"
  },
  {
    "name": "Adam Smith",
    "position": "DF"
  },
  {
    "name": "Andrew Surman",
    "position": "MF"
  },
  {
    "name": "Simon Francis",
    "position": "DF"
  },
  {
    "name": "Max Gradel",
    "position": "FW"
  },
  {
    "name": "Jordon Ibe",
    "position": "MF"
  },
  {
    "name": "Ian Harte",
    "position": "DF"
  },
  {
    "name": "Lewis Cook",
    "position": "MF"
  },
  {
    "name": "Lee Tomlin",
    "position": "FW"
  },
  {
    "name": "Shaun MacDonald",
    "position": "MF"
  },
  {
    "name": "Shaun MacDonald",
    "position": "GK"
  },
  {
    "name": "Marc Wilson",
    "position": "DF"
  },
  {
    "name": "Kenwyne Jones",
    "position": "FW"
  },
  {
    "name": "Eunan O'Kane",
    "position": "MF"
  },
  {
    "name": "Lys Mousset",
    "position": "FW"
  },
  {
    "name": "Wilfried Bony",
    "position": "FW"
  },
  {
    "name": "Gylfi Sigurðsson",
    "position": "MF"
  },
  {
    "name": "Bafétimbi Gomis",
    "position": "FW"
  },
  {
    "name": "André Ayew",
    "position": "FW"
  },
  {
    "name": "Wayne Routledge",
    "position": "MF"
  },
  {
    "name": "Nathan Dyer",
    "position": "MF"
  },
  {
    "name": "Ki Sung-Yueng",
    "position": "MF"
  },
  {
    "name": "Jonjo Shelvey",
    "position": "MF"
  },
  {
    "name": "Jonathan de Guzmán",
    "position": "MF"
  },
  {
    "name": "Marvin Emnes",
    "position": "FW"
  },
  {
    "name": "Modou Barrow",
    "position": "FW"
  },
  {
    "name": "Jay Fulton",
    "position": "MF"
  },
  {
    "name": "Jack Cork",
    "position": "MF"
  },
  {
    "name": "Leroy Fer",
    "position": "MF"
  },
  {
    "name": "Ashley Williams",
    "position": "DF"
  },
  {
    "name": "Michu",
    "position": "FW"
  },
  {
    "name": "Kyle Naughton",
    "position": "DF"
  },
  {
    "name": "Oliver McBurnie",
    "position": "FW"
  },
  {
    "name": "Ben Davies",
    "position": "DF"
  },
  {
    "name": "Roland Lamah",
    "position": "MF"
  },
  {
    "name": "Jefferson Montero",
    "position": "MF"
  },
  {
    "name": "Alberto Paloschi",
    "position": "FW"
  },
  {
    "name": "Matt Grimes",
    "position": "MF"
  },
  {
    "name": "Chico",
    "position": "DF"
  },
  {
    "name": "Pablo Hernández",
    "position": "MF"
  },
  {
    "name": "Stephen Kingsley",
    "position": "DF"
  },
  {
    "name": "Tom Carroll",
    "position": "MF"
  },
  {
    "name": "Kyle Bartley",
    "position": "DF"
  },
  {
    "name": "Rory Donnelly",
    "position": "FW"
  },
  {
    "name": "Federico Fernández",
    "position": "DF"
  },
  {
    "name": "Nélson Oliveira",
    "position": "FW"
  },
  {
    "name": "Kenji Gorre",
    "position": "FW"
  },
  {
    "name": "Jordi Amat",
    "position": "DF"
  },
  {
    "name": "Dwight Gayle",
    "position": "FW"
  },
  {
    "name": "Jason Puncheon",
    "position": "MF"
  },
  {
    "name": "Scott Dann",
    "position": "DF"
  },
  {
    "name": "Yannick Bolasie",
    "position": "MF"
  },
  {
    "name": "Wilfried Zaha",
    "position": "MF"
  },
  {
    "name": "Connor Wickham",
    "position": "FW"
  },
  {
    "name": "Marouane Chamakh",
    "position": "FW"
  },
  {
    "name": "Fraizer Campbell",
    "position": "FW"
  },
  {
    "name": "Glenn Murray",
    "position": "FW"
  },
  {
    "name": "Mile Jedinak",
    "position": "MF"
  },
  {
    "name": "Yohan Cabaye",
    "position": "MF"
  },
  {
    "name": "Joe Ledley",
    "position": "MF"
  },
  {
    "name": "James McArthur",
    "position": "MF"
  },
  {
    "name": "Joel Ward",
    "position": "DF"
  },
  {
    "name": "Damien Delaney",
    "position": "DF"
  },
  {
    "name": "Sullay Kaikai",
    "position": "MF"
  },
  {
    "name": "Patrick Bamford",
    "position": "FW"
  },
  {
    "name": "Brede Hangeland",
    "position": "DF"
  },
  {
    "name": "Cameron Jerome",
    "position": "FW"
  },
  {
    "name": "Lee Chung-Yong",
    "position": "MF"
  },
  {
    "name": "Bakary Sako",
    "position": "MF"
  },
  {
    "name": "Jordon Mutch",
    "position": "MF"
  },
  {
    "name": "Keshi Anderson",
    "position": "FW"
  },
  {
    "name": "Barry Bannan",
    "position": "MF"
  },
  {
    "name": "Adrian Mariappa",
    "position": "DF"
  },
  {
    "name": "Pape Souaré",
    "position": "DF"
  },
  {
    "name": "Yaya Sanogo",
    "position": "FW"
  },
  {
    "name": "Freddie Ladapo",
    "position": "FW"
  },
  {
    "name": "Tom Ince",
    "position": "MF"
  },
  {
    "name": "Stuart O'Keefe",
    "position": "MF"
  },
  {
    "name": "Kevin Doyle",
    "position": "FW"
  },
  {
    "name": "Aaron Wilbraham",
    "position": "FW"
  },
  {
    "name": "Danny Gabbidon",
    "position": "DF"
  },
  {
    "name": "Emmanuel Adebayor",
    "position": "FW"
  },
  {
    "name": "Martin Kelly",
    "position": "DF"
  },
  {
    "name": "Mandela Egbo",
    "position": ""
  },
  {
    "name": "Andros Townsend",
    "position": "MF"
  },
  {
    "name": "Luke Dreher",
    "position": "MF"
  },
  {
    "name": "Olivier Giroud",
    "position": "FW"
  },
  {
    "name": "Alexis Sánchez",
    "position": "FW"
  },
  {
    "name": "Aaron Ramsey",
    "position": "MF"
  },
  {
    "name": "Theo Walcott",
    "position": "FW"
  },
  {
    "name": "Mesut Özil",
    "position": "MF"
  },
  {
    "name": "Santi Cazorla",
    "position": "MF"
  },
  {
    "name": "Lukas Podolski",
    "position": "FW"
  },
  {
    "name": "Danny Welbeck",
    "position": "FW"
  },
  {
    "name": "Alex Oxlade-Chamberlain",
    "position": "MF"
  },
  {
    "name": "Laurent Koscielny",
    "position": "DF"
  },
  {
    "name": "Jack Wilshere",
    "position": "MF"
  },
  {
    "name": "Joel Campbell",
    "position": "FW"
  },
  {
    "name": "Alex Iwobi",
    "position": "FW"
  },
  {
    "name": "Chuba Akpom",
    "position": "FW"
  },
  {
    "name": "Tomáš Rosický",
    "position": "MF"
  },
  {
    "name": "Per Mertesacker",
    "position": "DF"
  },
  {
    "name": "Mathieu Flamini",
    "position": "MF"
  },
  {
    "name": "Mikel Arteta",
    "position": "MF"
  },
  {
    "name": "Héctor Bellerín",
    "position": "DF"
  },
  {
    "name": "Calum Chambers",
    "position": "DF"
  },
  {
    "name": "Kieran Gibbs",
    "position": "DF"
  },
  {
    "name": "Nicklas Bendtner",
    "position": "FW"
  },
  {
    "name": "Nacho Monreal",
    "position": "DF"
  },
  {
    "name": "Mohamed Elneny",
    "position": "MF"
  },
  {
    "name": "Gabriel Paulista",
    "position": "DF"
  },
  {
    "name": "Thomas Eisfeld",
    "position": "MF"
  },
  {
    "name": "Mathieu Debuchy",
    "position": "DF"
  },
  {
    "name": "Bacary Sagna",
    "position": "DF"
  },
  {
    "name": "Serge Gnabry",
    "position": "FW"
  },
  {
    "name": "Yaya Sanogo",
    "position": "FW"
  },
  {
    "name": "Carl Jenkinson",
    "position": "DF"
  },
  {
    "name": "Rob Holding",
    "position": "DF"
  },
  {
    "name": "Sergio Agüero",
    "position": "FW"
  },
  {
    "name": "Yaya Touré",
    "position": "MF"
  },
  {
    "name": "Edin Džeko",
    "position": "FW"
  },
  {
    "name": "David Silva",
    "position": "MF"
  },
  {
    "name": "Álvaro Negredo",
    "position": "FW"
  },
  {
    "name": "Kevin De Bruyne",
    "position": "MF"
  },
  {
    "name": "Kelechi Iheanacho",
    "position": "FW"
  },
  {
    "name": "Samir Nasri",
    "position": "MF"
  },
  {
    "name": "Fernandinho",
    "position": "MF"
  },
  {
    "name": "Raheem Sterling",
    "position": "MF"
  },
  {
    "name": "Stevan Jovetić",
    "position": "FW"
  },
  {
    "name": "James Milner",
    "position": "MF"
  },
  {
    "name": "Aleksandar Kolarov",
    "position": "DF"
  },
  {
    "name": "Wilfried Bony",
    "position": "FW"
  },
  {
    "name": "Jesús Navas",
    "position": "MF"
  },
  {
    "name": "Frank Lampard",
    "position": "MF"
  },
  {
    "name": "Vincent Kompany",
    "position": "DF"
  },
  {
    "name": "Fernando",
    "position": "MF"
  },
  {
    "name": "Nolito",
    "position": "FW"
  },
  {
    "name": "Pablo Zabaleta",
    "position": "DF"
  },
  {
    "name": "Martín Demichelis",
    "position": "DF"
  },
  {
    "name": "Fabian Delph",
    "position": "MF"
  },
  {
    "name": "Nicolás Otamendi",
    "position": "DF"
  },
  {
    "name": "Scott Sinclair",
    "position": "MF"
  },
  {
    "name": "Manual Garcia",
    "position": "MF"
  },
  {
    "name": "Gaël Clichy",
    "position": "DF"
  },
  {
    "name": "David Faupala",
    "position": "FW"
  },
  {
    "name": "Abel Hernández",
    "position": "FW"
  },
  {
    "name": "Nikica Jelavić",
    "position": "FW"
  },
  {
    "name": "Mohamed Diamé",
    "position": "MF"
  },
  {
    "name": "Adama Diomandé",
    "position": "FW"
  },
  {
    "name": "Jake Livermore",
    "position": "MF"
  },
  {
    "name": "Ahmed Elmohamady",
    "position": "MF"
  },
  {
    "name": "Robert Snodgrass",
    "position": "MF"
  },
  {
    "name": "David Meyler",
    "position": "MF"
  },
  {
    "name": "Curtis Davies",
    "position": "DF"
  },
  {
    "name": "Chuba Akpom",
    "position": "FW"
  },
  {
    "name": "Robbie Brady",
    "position": "MF"
  },
  {
    "name": "Matty Fryatt",
    "position": "FW"
  },
  {
    "name": "Sam Clucas",
    "position": "MF"
  },
  {
    "name": "Tom Huddlestone",
    "position": "MF"
  },
  {
    "name": "Sone Aluko",
    "position": "FW"
  },
  {
    "name": "Andrew Robertson",
    "position": "DF"
  },
  {
    "name": "Dame N'Doye",
    "position": "FW"
  },
  {
    "name": "James Chester",
    "position": "DF"
  },
  {
    "name": "Yannick Sagbo",
    "position": "FW"
  },
  {
    "name": "Shane Long",
    "position": "FW"
  },
  {
    "name": "Shaun Maloney",
    "position": "MF"
  },
  {
    "name": "Greg Luer",
    "position": "FW"
  },
  {
    "name": "Robert Koren",
    "position": "MF"
  },
  {
    "name": "Paul McShane",
    "position": "DF"
  },
  {
    "name": "Stephen Quinn",
    "position": "MF"
  },
  {
    "name": "George Boyd",
    "position": "MF"
  },
  {
    "name": "Michael Dawson",
    "position": "DF"
  },
  {
    "name": "Liam Rosenior",
    "position": "DF"
  },
  {
    "name": "Isaac Hayden",
    "position": "MF"
  },
  {
    "name": "Alex Bruce",
    "position": "DF"
  },
  {
    "name": "Danny Graham",
    "position": "FW"
  },
  {
    "name": "Gastón Ramírez",
    "position": "MF"
  },
  {
    "name": "Harry Maguire",
    "position": "DF"
  },
  {
    "name": "Tom Ince",
    "position": "MF"
  },
  {
    "name": "Jarrod Bowen",
    "position": "FW"
  },
  {
    "name": "Moses Odubajo",
    "position": "MF"
  },
  {
    "name": "Jermain Defoe",
    "position": "FW"
  },
  {
    "name": "Fabio Borini",
    "position": "FW"
  },
  {
    "name": "Adam Johnson",
    "position": "MF"
  },
  {
    "name": "Steven Fletcher",
    "position": "FW"
  },
  {
    "name": "Connor Wickham",
    "position": "FW"
  },
  {
    "name": "Patrick van Aanholt",
    "position": "DF"
  },
  {
    "name": "Jack Rodwell",
    "position": "MF"
  },
  {
    "name": "Jordi Gómez",
    "position": "MF"
  },
  {
    "name": "Emanuele Giaccherini",
    "position": "MF"
  },
  {
    "name": "Sebastian Larsson",
    "position": "MF"
  },
  {
    "name": "Ki Sung-Yueng",
    "position": "MF"
  },
  {
    "name": "Jeremain Lens",
    "position": "MF"
  },
  {
    "name": "Duncan Watmore",
    "position": "MF"
  },
  {
    "name": "Phil Bardsley",
    "position": "DF"
  },
  {
    "name": "Wahbi Khazri",
    "position": "MF"
  },
  {
    "name": "Lamine Koné",
    "position": "DF"
  },
  {
    "name": "Jack Colback",
    "position": "MF"
  },
  {
    "name": "Craig Gardner",
    "position": "MF"
  },
  {
    "name": "Danny Graham",
    "position": "FW"
  },
  {
    "name": "Lee Cattermole",
    "position": "MF"
  },
  {
    "name": "Jozy Altidore",
    "position": "FW"
  },
  {
    "name": "Yann M'Vila",
    "position": "MF"
  },
  {
    "name": "Charis Mavrias",
    "position": "MF"
  },
  {
    "name": "Ola Toivonen",
    "position": "FW"
  },
  {
    "name": "John O'Shea",
    "position": "DF"
  },
  {
    "name": "Marcos Alonso",
    "position": "DF"
  },
  {
    "name": "Billy Jones",
    "position": "DF"
  },
  {
    "name": "Ricky Álvarez",
    "position": "MF"
  },
  {
    "name": "Dame N'Doye",
    "position": "FW"
  },
  {
    "name": "Adnan Januzaj",
    "position": "MF"
  },
  {
    "name": "Diafra Sakho",
    "position": "FW"
  },
  {
    "name": "Andy Carroll",
    "position": "FW"
  },
  {
    "name": "Mark Noble",
    "position": "MF"
  },
  {
    "name": "Dimitri Payet",
    "position": "MF"
  },
  {
    "name": "Cheikhou Kouyaté",
    "position": "MF"
  },
  {
    "name": "Michail Antonio",
    "position": "MF"
  },
  {
    "name": "Enner Valencia",
    "position": "FW"
  },
  {
    "name": "Carlton Cole",
    "position": "FW"
  },
  {
    "name": "Kevin Nolan",
    "position": "MF"
  },
  {
    "name": "Manuel Lanzini",
    "position": "MF"
  },
  {
    "name": "Mauro Zárate",
    "position": "FW"
  },
  {
    "name": "Stewart Downing",
    "position": "MF"
  },
  {
    "name": "Aaron Cresswell",
    "position": "DF"
  },
  {
    "name": "James Tomkins",
    "position": "DF"
  },
  {
    "name": "Mohamed Diamé",
    "position": "MF"
  },
  {
    "name": "Winston Reid",
    "position": "DF"
  },
  {
    "name": "Matt Jarvis",
    "position": "MF"
  },
  {
    "name": "Modibo Maïga",
    "position": "FW"
  },
  {
    "name": "Ravel Morrison",
    "position": "MF"
  },
  {
    "name": "James Collins",
    "position": "DF"
  },
  {
    "name": "Morgan Amalfitano",
    "position": "MF"
  },
  {
    "name": "Joe Cole",
    "position": "MF"
  },
  {
    "name": "Elliot Lee",
    "position": "FW"
  },
  {
    "name": "Nikica Jelavić",
    "position": "FW"
  },
  {
    "name": "Ashley Fletcher",
    "position": "FW"
  },
  {
    "name": "Sofiane Feghouli",
    "position": "MF"
  },
  {
    "name": "Emmanuel Emenike",
    "position": "FW"
  },
  {
    "name": "Carl Jenkinson",
    "position": "DF"
  },
  {
    "name": "Victor Moses",
    "position": "MF"
  },
  {
    "name": "Ricardo Vaz Te",
    "position": "FW"
  },
  {
    "name": "Diego Poyet",
    "position": "MF"
  },
  {
    "name": "Angelo Ogbonna",
    "position": "DF"
  },
  {
    "name": "Matthew Taylor",
    "position": "MF"
  },
  {
    "name": "Guy Demel",
    "position": "DF"
  },
  {
    "name": "Gökhan Töre",
    "position": "MF"
  },
  {
    "name": "Arthur Masuaku",
    "position": "DF"
  }
]

var playersContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"x","type":"string"},{"name":"y","type":"string"}],"name":"stringsEqual","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"uid","type":"int256"},{"name":"fullName","type":"string"},{"name":"position","type":"string"}],"name":"addPlayer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"sealContract","outputs":[],"payable":false,"type":"function"},{"inputs":[],"type":"constructor"}]);
var players = playersContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '60606040525b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b6104f58061003f6000396000f360606040526000357c01000000000000000000000000000000000000000000000000000000009004806313d19950146100525780632d002cde1461010a57806368bd580e146101cb5761004d565b610002565b34610002576100f26004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509090919050506101df565b60405180821515815260200191505060405180910390f35b34610002576101b36004808035906020019091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505090909190505061026b565b60405180821515815260200191505060405180910390f35b34610002576101dd60048050506104f2565b005b600081604051808280519060200190808383829060006004602084601f0104600302600f01f15090500191505060405180910390206000191683604051808280519060200190808383829060006004602084601f0104600302600f01f1509050019150506040518091039020600019161461025b57600061025e565b60015b9050610265565b92915050565b600060006102b283604060405190810160405280600281526020017f474b0000000000000000000000000000000000000000000000000000000000008152602001506101df565b156102be576003905080505b61030183604060405190810160405280600281526020017f44460000000000000000000000000000000000000000000000000000000000008152602001506101df565b1561030d576002905080505b61035083604060405190810160405280600281526020017f4d460000000000000000000000000000000000000000000000000000000000008152602001506101df565b1561035c576001905080505b61039f83604060405190810160405280600281526020017f46570000000000000000000000000000000000000000000000000000000000008152602001506101df565b156103af576000905080506103b8565b600091506104ea565b606060405190810160405280868152602001858152602001828152602001506000600050600060005080549050815481101561000257906000526020600020906003020160005b50600082015181600001600050556020820151816001016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061046257805160ff1916838001178555610493565b82800160010185558215610493579182015b82811115610492578251826000505591602001919060010190610474565b5b5090506104be91906104a0565b808211156104ba57600081815060009055506001016104a0565b5090565b505060408201518160020160006101000a81548160ff02191690830217905550905050600191506104ea565b509392505050565b5b56', 
     gas: 4700000
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 });

var abi = [{"constant":false,"inputs":[{"name":"x","type":"string"},{"name":"y","type":"string"}],"name":"stringsEqual","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"uid","type":"int256"},{"name":"fullName","type":"string"},{"name":"position","type":"string"}],"name":"addPlayer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"sealContract","outputs":[],"payable":false,"type":"function"},{"inputs":[],"type":"constructor"}]

var deployedPlayerContract = web3.eth.contract(abi);

var meta = deployedPlayerContract.at("0x8b1fc031753bd450558c2b4b4e69be72deb0234b")
// multi.multiply.sendTransaction(6, {from: "0xc8cdcf08c3f6ae1861012aac8c7076022e3c42f7"})

for(var i=0; i<playersData.length; i++) {
  var playerData = playersData[i];
  var success = meta.addPlayer.call(i, playerData.name, playerData.position)
  if(success==false) {
    console.log("player could not be added to contract")
  }
  else if(success==true) {
    console.log("player added")
  }
  else {
    console.log("could not determine status of player add")
  };
}

for (var i=0; i<a.length; i++) {
    i // is the index
    a[i] // is the item
}