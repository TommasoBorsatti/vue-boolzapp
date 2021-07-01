
const App = new Vue (

  {

    el: "#root",

    data: {

      rubrica:[
        {
          nome: "Mino Ciccini",
          avatar: "img/avatar_1.jpg",
          accessTime: "09:20",
          visible: true,
          selected: false,
          active: false,
          msg:[
            {
              date: "10/01/21",
              time: "15:30",
              text: 'Hai portato a spasso il cane?',
              status: 'sent',
              active: false
            },
            {
              date: '10/01/21',
              time: '15:50',
              text: 'Ricordati di dargli da mangiare',
              status: 'sent',
              active: false
            },
            {
              date: '10/01/21',
              time: '16:15',
              text: 'Tutto fatto!',
              status: 'received',
              active: false
            },
          ],
        },
        {
          nome: "Roberto Esperto",
          avatar: "img/avatar_2.jpg",
          accessTime: "10:40",
          visible: true,
          selected: false,
          active: false,
          msg:[
            {
              date: '20/03/21',
              time: '16:30',
              text: 'Ciao come stai?',
              status: 'sent',
              active: false
            },
            {
              date: '20/03/21',
              time: '16:32',
              text: 'Bene grazie! Stasera ci vediamo?',
              status: 'received',
              active: false
            },
            {
              date: '20/03/21',
              time: '16:39',
              text: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent',
              active: false
            },
          ],
        },
        {
          nome: "Pino Tomino",
          avatar: "img/avatar_3.jpg",
          accessTime: "04:20",
          visible: true,
          selected: false,
          active: false,
          msg:[
            {
              date: '28/03/21',
              time: '10:10',
              text: 'La Marianna va in campagna',
              status: 'received',
              active: false
            },
            {
              date: '28/03/21',
              time: '10:20',
              text: 'Sicuro di non aver sbagliato chat?',
              status: 'sent',
              active: false
            },
            {
              date: '28/03/21',
              time: '16:15',
              text: 'Ah scusa!',
              status: 'received',
              active: false
            },
          ],
        },
        {
          nome: "Bruno Pruno",
          avatar: "img/avatar_4.jpg",
          accessTime: "11:10",
          visible: true,
          selected: false,
          active: false,
          msg:[
            {
              date: '10/01/21',
              time: '15:30',
              text: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent',
              active: false
            },
            {
              date: '10/01/21',
              time: '15:50',
              text: 'Si, ma preferirei andare al cinema',
              status: 'received',
              active: false
            },
          ],
        },
        {
          nome: "Fiona Campiona",
          avatar: "img/avatar_6.jpg",
          accessTime: "17:10",
          visible: true,
          selected: false,
          active: false,
          msg:[
            {
              date: '10/01/21',
              time: '15:30',
              text: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent',
              active: false
            },
            {
              date: '10/01/21',
              time: '15:50',
              text: 'Si, ma preferirei andare al cinema',
              status: 'received',
              active: false
            },
          ],
        },
        {
          nome: "Lapo il Capo",
          avatar: "img/avatar_5.jpg",
          accessTime: "17:10",
          visible: true,
          selected: false,
          active: false,
          msg:[
            {
              date: '10/01/21',
              time: '15:30',
              text: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent',
              active: false
            },
            {
              date: '10/01/21',
              time: '15:50',
              text: 'Si, ma preferirei andare al cinema',
              status: 'received',
              active: false
            },
          ],
        },
      ],

      newTxt: [],
      searchTxt: "",
      contactIndex: 0,
      contactActionIndex: 0,
      messageIndex:0,
      bubbleColor: 'sent',
      

    },

    methods:{

      chooseContact: function(i){

        this.rubrica[this.contactIndex].msg.forEach(message => {
          return message.active = false;
        });

        this.rubrica.forEach(contact => {
          contact.selected = false;
        });

        this.contactIndex = i;
        this.rubrica[this.contactIndex].selected = !this.selected;
        
      },

      addMsg: function(){
        if (this.newTxt != "") {
          this.rubrica[this.contactIndex].msg.push({
            date: dayjs().format('DD/MM/YY'),
            time: dayjs().format('HH:mm'),
            text: this.newTxt,
            status: "sent",
            active: false
          });
        }
        this.newTxt = "";
        // trigger per timer integrato al click!
        setTimeout(this.autoreply, 3000);
      },

      autoreply: function(){
        this.rubrica[this.contactIndex].msg.push({
          date: dayjs().format('DD/MM/YY'),
          time: dayjs().format('HH:mm'),
          text: "Ok! A dopo..",
          status: "received",
          active: false
        });

      },

      // METODO CON FUNZIONE
      searchId: function(){

        if (this.searchTxt != "") {

          for (let i = 0; i < this.rubrica.length; i++) {
            if (!this.rubrica[i].nome.toLowerCase().includes(this.searchTxt.toLowerCase())) {
              this.rubrica[i].visible = false;
            } else {
              this.rubrica[i].visible = true;
            }
          }

        } else {
            for (let i = 0; i < this.rubrica.length; i++) {
              this.rubrica[i].visible = true;
            }
          }
      },

      callToContact: function(i){
        this.contactActionIndex = i; 

        if (this.rubrica[this.contactActionIndex].active == false){
          this.rubrica.forEach(contact => {
            return contact.active = false;
          });
          return this.rubrica[this.contactActionIndex].active = true;
        } else {
          this.rubrica.forEach(contact => {
            return contact.active = false;
          });
        }
      
      },

      callToMsg: function(i){
        this.messageIndex = i; 

        if (this.rubrica[this.contactIndex].msg[this.messageIndex].active == false){
          this.rubrica[this.contactIndex].msg.forEach(message => {
            return message.active = false;
          });
          return this.rubrica[this.contactIndex].msg[this.messageIndex].active = true;
        } else {
          this.rubrica[this.contactIndex].msg.forEach(message => {
            return message.active = false;
          });
        }
      
      },

      deleteMessage: function(i){
        this.rubrica[this.contactIndex].msg[this.messageIndex].active = false;
        console.log(this.rubrica[this.contactIndex].msg[this.messageIndex].active);
        this.rubrica[this.contactIndex].msg.splice(this.messageIndex, 1);
    
        
      }

    },

  }   
);
