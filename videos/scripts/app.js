const chatlist = document.querySelector('.chat-list')
const form = document.querySelector('form')

const sent = document.querySelector('.update-msg')
var data = localStorage.getItem('Name');
console.log(data);

form.addEventListener('submit',e=>{
    e.preventDefault()
     let input = document.querySelector('#message').value.trim()
    if (input) {
        chatroom.addchata(input,data).then(()=>{form.reset()

           
          
            
            
            }).catch((err)=>{console.log(err);})  
    }
else{
    alert('fill the message box')
}
         
        })
const videos = document.querySelector('.Video-list')
const chatroom = new Chatroom('smith','chatroom')
const chatui = new ChatUi(chatlist)
const listen =document.querySelectorAll(" .vid ")
 const main = document.querySelector('.main-play ')
 const h3 = document.querySelector("h3")

window.onload = function() {
    chatroom.updateRoom("Enforce victory")
    chatroom.getData (
        (data)=>{

        chatui.render(data,"Enforce victory")
        
    })
}
listen.forEach((video)=>{
    video.onclick=(e)=>{ listen.forEach(element => { 
  
      element.classList.remove('active')
    video.classList.add('active')
  
  
  
    })
     if (video.classList.contains('active')) {
    
      let src = video.children[0].getAttribute('src');
      main.src=src
    
      h3.innerHTML= video.children[1].innerHTML
      chatlist.innerHTML=''
      chatroom.updateRoom(video.children[1].innerHTML)
      chatroom.getData (
        (data)=>{
        chatui.render(data,video.children[1].innerHTML)
        
    })
        
    
     }
    }
       
    
    
  })
  // Retrieve data


    


// videos.addEventListener('click',e=>{

//     if (e.target.tagName === "H3") {
    
//      chatlist.innerHTML=''
//   chatroom.updateRoom(e.target.innerHTML)
//   chatroom.getData (
//     (data)=>{
//     chatui.render(data,e.target.innerHTML)
    
// })



//     }
//   })