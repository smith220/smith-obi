




const firebaseConfig = {
  apiKey: "AIzaSyCXfg2hRWQgG-VHAGZkirrW84v0JEBUxzM",
  authDomain: "video-chat-23aec.firebaseapp.com",
  databaseURL: "https://video-chat-23aec-default-rtdb.firebaseio.com",
  projectId: "video-chat-23aec",
  storageBucket: "video-chat-23aec.appspot.com",
  messagingSenderId: "999013313047",
  appId: "1:999013313047:web:c354e5ce9c70f27e1e8a52",
  measurementId: "G-3GN1LF8C6X"
};

firebase.initializeApp(firebaseConfig);
var contactFormDB = firebase.database().ref("contactForm");

class Chatroom{
  constructor(username,room ){
this.room=   room
 this.username=  username
this.unsub

  }
  async addchata(message,username){
      var newContactForm = contactFormDB.push();
      
const now = new Date;
newContactForm.set({
  message,
 room:this.room,
  username:username,
  created_at:firebase.firestore.Timestamp.fromDate(now)
});

  }

  async getData( callback){
      contactFormDB.on("value", (snapshot) => {
    ;
      
          // handle the snapshot data here
          callback(snapshot.val(),this.room)
        });


        }

        updateUser(username){
          this.username = username;

        }
        updateRoom(room){
     this.room = room  
console.log(room);
   
        }
  

  } 


  class ChatUi{
      constructor(list){
          this.list =list
      }
    
      render(data,room){
        this.list.innerHTML=''
const trip = Object.values(data)
var Timestamp =trip.created_at
let time = new Date(Timestamp)
const first = room === undefined ? 'Enforce victory':room

   const filtered = trip.filter(data=>{

  return   data.room  === first
   })

const mapped= filtered.map((element)=>{

const html =    ` <li class="list-group-item">
<span class="username">${element.username}</span>
<span class="message">${element.message}</span>
<div class="time">${time}</span>
</li>`
this.list.innerHTML += html   
})

  
         
}

  
      
      clear(){
         this.list.innerHTML=''
      }
  }



//   const html = `<li class='list-group style=color:'red'>
  //   <span class='username'> ${when}<span>
  //   <span class='username'> ${data.message}<span>
  //   </li>`
  //       trip.forEach(data=>{
//    const when = dateFns.distanceInWordsToNow(
//     time,{addSuffix:true}

//    )
    
//    this.list.innerHTML += html
//  })
