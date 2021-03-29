
const App = new Vue (

  {

    el: "#root",

    data: {

      newTxt: "",
      selected: 0,
      utentMsg: [

      ],
      sender: 'utent-txt',


      rubrica:[

        {
          nome: "Mino",
          cognome: "Ciccini",
          avatar: "img/avatar_1.jpg",
          msg:[
          ],
        },
        {
          nome: "Larderello ",
          cognome: "Bohr",
          avatar: "img/avatar_2.jpg",
          msg:[
          ],

        },
        {
          nome: "Pigiamino",
          cognome: "Morbidozzi",
          avatar: "img/avatar_3.jpg",
          msg:[
          ],

        },
        {
          nome: "King",
          cognome: "Rum",
          avatar: "img/avatar_4.jpg",
          msg:[
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
