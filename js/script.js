
const App = new Vue (

  {

    el: "#root",

    data: {

      newTxt: [],
      searchTxt: "",
      contactIndex: 0,
      bubbleColor: 'sent',
      rubrica:[
        {
          nome: "Mino Ciccini",
          avatar: "img/avatar_1.jpg",
          accessTime: "09:20",
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
          nome: "Larderello Bohr",
          avatar: "img/avatar_2.jpg",
          accessTime: "10:40",
          visible: true,
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
          nome: "Pigiamino Morbidozzi",
          avatar: "img/avatar_3.jpg",
          accessTime: "04:20",
          visible: true,
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
          nome: "King Rum",
          avatar: "img/avatar_4.jpg",
          accessTime: "11:10",
          visible: true,
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

      chooseContact: function(i){
        this.contactIndex = i;
      },

      addMsg: function(){
        if (this.newTxt != "") {
          this.rubrica[this.contactIndex].msg.push({
            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
            text: this.newTxt,
            status: "sent",
          });
        }
        this.newTxt = "";
        // trigger per timer integrato al click!
        setTimeout(this.autoreply, 3000);
      },

      autoreply: function(){
        this.rubrica[this.contactIndex].msg.push({
          date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
          text: "Oooohhh bada chie...",
          status: "received",
        });

      },

      searchId: function(index){

        if (this.searchTxt != "") {

          for (let i = 0; i < this.rubrica.length; i++) {
            if (!this.rubrica[i].nome.toLowerCase().includes(this.searchTxt.toLowerCase())) {
              this.rubrica[i].visible = false;
            }
          }
          this.searchTxt = "";
        } else {
            for (let i = 0; i < this.rubrica.length; i++) {
              this.rubrica[i].visible = true;
            }
          }
      },

    },

  }
);
