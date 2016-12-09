"use strict";

class App{
  constructor(){
    this.room = [

  {
        "id": 1,
        "name": "Honey Moon Room",
        "details": "A good room to spend the whole night for a newly Wed's.",
        "image": "img/room1.jpg", 
      },
      {
        "id": 2,
        "name": "Perfect Rest Room",
        "details": "A Perferct place to rest and forget all the problems.",
        "image": "img/room2.jpg",
       
      },
      {
        "id": 3,
        "name": "Family Room",
        "details": "A great Room for a Family and have time to each Family member.",
        "image": "img/room3.jpg",
      },
      {
        "id": 4,
        "name": "Single Deluxe Room",
        "details": "A special Room made for a single person that caters all he/she needs.",
        "image": "img/room4.jpg",
       
      },
      {
        "id": 5,
        "name": "Beach Out Room",
        "details": "A great way to relax while in the beach.A cozy and comfortable room.",
        "image": "img/room5.jpg",
      }
    ];
      
  
  }

  render(html, component){

    component.innerHTML += html;
  }

  reRender(html, component){

    component.innerHTML = html;
  }

roomDesign1(){
    
    
    let name = document.getElementById('room2');
    let details = document.getElementById('room3');
    let image = document.getElementById('room5');
  

    let room = {      
    
      "name": name.value,
      "details": details.value,
      "image": image.value,
      };

    name.value = details.value = image.value = '';
    this.room.push(room);

    
    
  } 

  roomDelete(key){
    let r = this.room;
    for(let i=0;i<r.length;i++){
      if(r[i].id == key){
        this.room.splice(i,1);
        break;
      }
    }   
    this.roomList();
  }

  updateRoom(id){

    let qwe = {
      "id" :  id,
      "name" : $('#asd').val(),
      "description" : $('#zxc').val()
    }

    let r = this.room;
    for(let i=0;i<r.length;i++){
      if(r[i].id == id){
        r[i] = qwe;
        break;
      }
    }

    this.roomList();

}
  SearchRoomById(id){
    let r = this.room;
    for(let i=0;i<r.length;i++){
      if(id==r[i].id){
        return r[i];
      }
    }
  } 

 

  SearchRoom(name){
    let objects = [];
    let r = this.room;
    for(let i=0;i<r.length;i++){
      let expr = (r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
      if(expr){
        objects.push(r[i]);
      }
    }
    return objects;
  }
}


class Component extends App{
  constructor(){
    
    super();
  }

roomDesignLayout(){
  let html = `

<nav>
  <div class="nav-wrapper #30C1FF blue">
    <a href="#!" onclick="component.Home()" class="brand-logo">Room App</a>
    <ul class="right hide-on-med-and-down">
      <li><a href="#" onclick="component.Home()">Home</a></li>
      <li><a href="#" onclick="component.roomList()">Make your Room</a></li>
      
      <li><a onclick="component.latestRoom()">Create</a></li>
    </ul>
  </div>
</nav>

<div class="slider" >
    <ul class="slides">
      <li>
        <img src="img/marco.jpg"> <!-- random image -->
        <div class="caption left-align">
        <h5>Fell at Home.</h5> 
        </div>
      </li>
      <li>
        <img src="img/mandaya.jpg"> <!-- random image -->
        <div class="caption right-align">
          <h3>Limited Editions</h3>
        </div>
      </li>
      <li>
        <img src="img/apo.jpg"> <!-- random image -->
        <div class="caption left-align">
          <h5 class="light grey-text text-lighten-3">Makes you feel comfortable</h5>
        </div>
      </li>
      <li>
        <img src="img/water.jpg"> <!-- random image -->
        <div class="caption right-align">
          <h3>Another way to Relax!</h3>
          
        </div>
      </li>
    </ul>
  </div>

</div>


         <div id="Home"></div>
        <div id="roomRecent"></div>
        <div id="Room"></div>
        <div id="roomList"></div>
        <div id="latestRoom"></div>
        
  
        <footer class="page-footer #30C1FF blue">
          <div class="container">
            <div class="row">
              <div class="col l6 ">
                <h2 class="white-text">Room App</h2>
                <p class="grey-text text-lighten-4">Make a Room instantly.</p>
              </div>
            </div>
          </div>
          <div class="footer-copyright  #30C1FF blue">
            <div class="container">
            <img src="img/ccc.png" width="50px">
            © 2016 Copyright 
            </div>
          </div>
        </footer>
            


`;

    this.reRender(`
      ${html}

      `,document.getElementById("app"));
    this.roomRecent();    
  }

Room(id){
    let r = this.SearchRoomById(id);

    let html = `

    <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
        <img src="${r.image}">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>${r.details}</p>
        </div>
        <div class="card-action">
          <span onclick="component.roomDelete(${r.id})" class="new badge small" data-badge-caption="">Remove</span>
               <span onclick="component.roomList()" class="new badge small" data-badge-caption="">Back</span>
               <span onclick="component.updateRoom()" class="new badge small" data-badge-caption="">Update</span>
        </div>
      </div>
    </div>
  </div>
            

    `;

    this.reRender(`   
      ${html}     
      `,document.getElementById("Room"));
    $('#Room').show();
    $('#roomRecent').hide();
    $('#roomList').hide();
    $('#latestRoom').hide();
    $('#buyList').show();
    $('#Home').hide();
  }


  roomList(){
    let html = `


      <br/>
        <nav>
          <div class="nav-wrapper #30C1FF blue">
          <form>
            <div class="input-field">       
              <input onkeyup="component.roomItems(this.value)" id="search" type="search" placeholder="Search" required>
              <label for="search"><i class="material-icons">search</i></label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      <br/>

    `;

    html += `
      <div class="row" id="roomItems">
    `;

    let r = this.room;
    for(let i=0;i<r.length;i++){
      html+= `
      <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="${r[i].image}">
              <span class="card-title">${r[i].name}</span>
            </div>
            <div class="card-content">
              <p>${r[i].details}</p>
            </div>
            <div class="card-action">
              <a href="#" onclick="component.Room(${r[i].id})">Details</a>
            </div>
          </div>
        </div>
      `;
    }

    html += `</div>`;

    this.reRender(`
      ${html}
      `,document.getElementById("roomList"));
    $('#roomList').show();
    $('#Room').hide();
    $('#roomRecent').hide();
    $('#latestRoom').hide();  
    $('#buyList').show();  
    $('#Home').hide();
  }

roomItems(name){
    let html = ``;
    let r = this.SearchRoom(name);
    for(let i=0;i<r.length;i++){
      html+= `
        <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="${r[i].image}">
              <span class="card-title">${r[i].name}</span>
            </div>
            <div class="card-content">
              <p>${r[i].details}</p>
            </div>
            <div class="card-action">
              <a href="#" onclick="component.Room(${r[i].id})">More</a>
            </div>
          </div>
        </div>
      `;
    }   

    this.reRender(`
      ${html}
      `,document.getElementById("roomItems"));
    $('#roomList').show();
    $('#Room').hide();
    $('#roomRecent').hide();  
    $('#latestRoom').hide();
    $('#buyList').show();
    $('#Home').hide();    
  }

  updateExFeeling(id){
    
    let html = `
      <div class="row">
        <div class="input-field col s6">
          <input id="asd" type="text" class="validate" value="${this.room[id].name}">          
        </div>
        <div class="input-field col s6">
          <input id="zxc" type="text" class="validate" value="${this.room[id].details}">
        </div>
      </div>
      <span onclick="component.buyList()" class="new badge small" data-badge-caption="">Update</span>
      <hr/>
    `;  
    this.reRender(`
      ${html}
      `,document.getElementById("roomItems"));
    $('#roomList').show();
    $('#Room').hide();
    $('#roomRecent').hide();  
    $('#latestRoom').hide();
    $('#buyList').show();
    $('#Home').hide();    
  }

  roomRecent(){
    
    let html = `



      <div class="row">
    `;

    let r = this.room;
    let count = 0;
    for(let i=(r.length-1);i>=0;i--){
      if(count++ === 6)break;
      html+= `
     <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="${r[i].image}">
              <span class="card-title">${r[i].name}</span>
            </div>
            <div class="card-content">
              <p>${r[i].details}</p>
            </div>
            <div class="card-action">
              <a href="#" onclick="component.Room(${r[i].id})">Details</a>
            </div>
          </div>
        </div>

      `;
    }

    html += `</div>`;

    this.render(`   
      ${html}
      `,document.getElementById("roomRecent"));
  }

  latestRoom(){
    let html = `

   
     
          
       <div class="row">

            <div class="input-field col s6 ">
            <h3>Your Room</h3>
              <input disabled value="${this.room.length+1}" id="room" type="text"class=" validate" >
            </div>
              <div class="row">
          <div class="input-field col s6 ">
              <input id="room2" type="text" class=" vintage">
              <label for="room2">Room Name</label>
            </div>
          </div>
          
          <div class="row">
            <div class="input-field col s6 ">
              <input id="room3" type="text" class="vintage">
             <label for="room3">Room Details</label>
            </div>

            <div class="row">
            <div class="input-field col s6 ">
              <input id="room5" type="text" class="vintage">
              <label for="room5">Enter Link Address Picture</label>
            </div>
       
        <div align="left">
       
       <button onclick="component.roomList()" class="btn #ffa726 orange lighten-1">Back</button>
       <button onclick="component.roomDesign1()" class="btn #ffa726 orange lighten-1">Save</button> 
         </div>
        
      

    `;

    this.reRender(`
      ${html}
      `,document.getElementById("latestRoom"));
    $('#latestRoom').show();
    $('#roomList').hide();
    $('#Room').hide();
    $('#roomRecent').hide(); 
    $('#buyList').show();
    $('#Home').hide();    
  }

  // buyList(){

  // }
     

  Home(){
  let html=`

  `;


   this.reRender(`
      ${html}
      `,document.getElementById("latestRoom"));
    $('#latestRoom').hide();
    $('#roomList').hide();
    $('#Room').hide();
    $('#roomRecent').show(); 
    $('#buyList').show(); 
    $('#Home').hide();  

}

} 
let component = new Component();
component.roomDesignLayout();