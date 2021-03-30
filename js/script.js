
const App = new Vue (

  {

    el: "#root",

    data: {

      newTxt: "",
      utentMsg: [

      ],
      sender: 'utent-txt',
      rubrica:[
        {
          nome: "Mino",
          cognome: "Ciccini",
          avatar: "img/avatar_1.jpg",
          visible: true,
          msg:[
            {
              date: "10/01/2020 15:30:55",
              text: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              text: 'Ricordati di dargli da mangiare',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:15:22',
              text: 'Tutto fatto!',
              status: 'received'
            },
          ],
        },
        {
          nome: "Larderello ",
          cognome: "Bohr",
          avatar: "img/avatar_2.jpg",
          visible: false,
          msg:[
            {
              date: '20/03/2020 16:30:00',
              text: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020 16:30:55',
              text: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35:00',
              text: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            },
          ],
        },
        {
          nome: "Pigiamino",
          cognome: "Morbidozzi",
          avatar: "img/avatar_3.jpg",
          visible: false,
          msg:[
            {
              date: '28/03/2020 10:10:40',
              text: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '28/03/2020 10:20:10',
              text: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '28/03/2020 16:15:22',
              text: 'Ah scusa!',
              status: 'received'
            },
          ],
        },
        {
          nome: "King",
          cognome: "Rum",
          avatar: "img/avatar_4.jpg",
          visible: false,
          msg:[
            {
              date: '10/01/2020 15:30:55',
              text: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              text: 'Si, ma preferirei andare al cinema',
              status: 'received'
            },
          ],
        },
      ],

    },

    methods:{

      addMsg: function(){
        if (this.newTxt != "") {
          this.utentMsg.push(this.newTxt);
        }
        this.newTxt = "";
      },


    },

  }
);
