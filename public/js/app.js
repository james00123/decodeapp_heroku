"use strict";

class App{
  constructor(){
    this.media = [
    {
      "img" : "http://media.buzzle.com/media/images-en/gallery/recipes/french-food/900-119624610-french-croissants.jpg",
      "alignment" : "left-align",
      "caption": "Delicous Meal",
      "slogan": "Completes your day.",
    },
    {
      "img" : "http://2.bp.blogspot.com/-0jz-bTP0i8s/Ui8NeRhHaxI/AAAAAAAAEAw/e1e2UBs_6m4/s1600/simitsimit.jpg",
      "alignment" : "right-align",
      "caption": "Amazing Breakfast",
      "slogan": "Removes your Negativities",
    },
    {
      "img" : "http://johansensdev3.wpengine.com/wp-content/uploads/2014/05/Pastel-de-Belem-1.jpg",
      "alignment" : "center-align",
      "caption": "Right Selection",
      "slogan": "Enhances your Personality",
    },
    {
      "img" : "http://www.travelbook.ph/blog/cms/wp-content/uploads/old-site/inline/1742_pizza_300.jpg",
      "alignment" : "center-align",
      "caption": "Remedy Cafe",
      "slogan": "Enlightens your Day.",
    }
    ];

    this.b = [

    {
       "coffeeid": 1,
      "titles": "JAMS",
      "content": "Delicous Meal", 
      "img" : "img/UBE.jpg",
    },
    {
      "coffeeid": 2,
      "titles": "CUP CAKES",
      "content": "Amazing Meal.",
      "img" : "img/cake.jpg",
    },
    {
      "coffeeid": 3,
      "titles": "FRAPPES", 
      "content": "Delicous Meal",
      "img" : "img/frappe.jpg",
    },
    {
      "coffeeid": 4,
      "titles": "coffee", 
      "content": "Delicous Meal",
      "img" : "img/coffe.jpg",
    }

    ];

   

  }
  render(html, component){

    component.innerHTML += html;
  }

  reRender(html, component){

    component.innerHTML = html;
  }


  cafeDesign(){
    let coffeeid = document.getElementById('MusicnAme');
    let title = document.getElementById('mUsic');
    let content = document.getElementById('mUSICdesc');
    let img = document.getElementById('musicPic');
  

    let b = {      
      "coffeeid": coffeeid.value,
      "title": title.value,
      "content": content.value,
      "img": img.value,
    
     
    };


    this.b.push(b);

    
    coffeeid.value = title.value = content.value = img.value = ''; 
  } 

  


}

class Component extends App{
  constructor(){
    
    super();
  }

  cafeDesign(){
    let html = `
     

<nav>
    <div class="nav-wrapper">
    <a href="#"onclick="component.cafeList()" class="brand-logo center"><img src="img/logo3.jpg"></img></a>
    <ul id="nav-mobile" class="left hide-on-med-and-down">
    <li><a onclick="onclick="component.Home()" class="waves-effect waves-red btn-small" href="#"><b id="color">Home</b></a></li>
    <li><a onclick=" onclick="component.addCoffees()" class="waves-effect waves-teal btn-small" href="#"><b id="color">Order</b></a></li>
    <li><a onclick="onclick="component.cafeList()" class="waves-effect waves-yellow btn-small" href="#"><b id="color">Review</b></a></li>        
    </ul>
    </div>
    </nav>





        

       
      </ul>

     
    </div>
    </nav>


</div>
 
  <div class="slider">
    <ul class="slides">

  
    `;

    for(let i=0;i<this.media.length;i++){
      html += `
      <li>
      <img src="${this.media[i].img}">
      <div class="caption ${this.media[i].alignment}">
      <h3>${this.media[i].caption}</h3>
      <h4 class="light grey-text text-lighten-3">${this.media[i].slogan}</h4>
      </div>
      </li>

      `;
    }
 html+=`
      
          

         <div id="Home"></div>
        <div id="recent"></div>
        <div id="cafeView"></div>
        <div id="cafeList"></div>
        <div id="addCoffees"></div>
     
        
  
                  <footer class="page-footer  blue accent-4">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Music App</h5>
                <p class="grey-text text-lighten-4">Alright Reserved</p>
              </div>
          
                
             
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
           
            </div>
          </div>
        </footer>

    `;

    this.reRender(`
      ${html}

      `,document.getElementById("app"));
    this.recent();    
  }

  recent(){
    
    let html = `

   <div class="carousel carousel-slider">
    <a class="carousel-item" href="#one!"><img src="https://akosimacoy.files.wordpress.com/2015/04/make-your-own-kind-of-music.jpg"></a>
    <a class="carousel-item" href="#two!"><img src="img/Music.jpg"></a>
    <a class="carousel-item" href="#three!"><img src="http://pre05.deviantart.net/7df4/th/pre/f/2012/207/6/0/music_is_life_by_kelseysparrow67-d58ph0q.jpg"></a>
    <a class="carousel-item" href="#four!"><img src="img/My.jpg"></a>
  </div>
             <div class="row">
    `;

    let r = this.b;
    let count = 0;
    for(let i=(r.length-1);i>=0;i--){
      if(count++ === 4)break;
      html+= `
   <div class="col s8 m6">
          <div class="card large hoverable">
            <div class="card-image">
              <img src="${r[i].img}">
              <span class="card-title">${r[i].titles}</span>
            </div>
            <div class="card-content">
              <p>${r[i].content}</p>
              
            </div>
            <div class="card-action">
              <a href="#" onclick="component.cafeView(${r[i].coffeeid})">Details</a>
            </div>
          </div>
        </div>
      `;
    }

    html += `</div>`;

    this.render(`   
      ${html}
      `,document.getElementById("recent"));
  }

  cafeView(coffeeid){
    let r = this.coffeesearchId(coffeeid);

    let html = `
      <h5 class="center-align">${r.titles}</h5>
      <div class="row">       
        <div class="col s12 m12">
          <div class="card horizontal small">
            <div class="card-image">
              <img src="${r.img}">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>${r.content}</p>
                
              </div>
            <div class="card-action small">               
                <span onclick="component.deleteCoffees(${r.coffeeid})" class="new badge small red" data-badge-caption="">Delete</span>
               <span onclick="component.cafeList()" class="new badge small" data-badge-caption="">Back to Cafe</span>
              </div>            
            </div>     
          </div>   
          
        </div>      
      </div>
    `;

    this.reRender(`   
      ${html}     
      `,document.getElementById("cafeView"));
    $('#cafeView').show();
    $('#recent').hide();
    $('#cafeList').hide();
    $('#addCoffees').hide();
      $('#Home').hide();
  }

  cafeList(){
    let html = `

 

      <br/>
        <nav>
          <div class="nav-wrapper white">
          <form>
            <div class="input-field">       
              <input onkeyup="component.cafeItem(this.value)" id="search" type="search" placeholder="Search" required>
              <label for="search"><i class="material-icons">search</i></label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      <br/>

    `;

    html += `
      <div class="row" id="cafeItem">
    `;
    let r = this.b;
    for(let i=0;i<r.length;i++){
      html+= `
        <div class="col s6 m6">
          <div class="card large hoverable">
            <div class="card-image">
              <img src="${r[i].img}">
              <span class="card-title">${r[i].titles}</span>
            </div>
            <div class="card-content">
              <p>${r[i].content}</p>
               
            </div>
            <div class="card-action">
              <a href="#" onclick="component.cafeView(${r[i].coffeeid})">Details</a>
            </div>
          </div>
        </div>
      `;
    }

    html += `</div>`;

    this.reRender(`
      ${html}
      `,document.getElementById("cafeList"));
    $('#cafeList').show();
    $('#cafeView').hide();
    $('#recent').hide();
    $('#addCoffees').hide();       
         $('#Home').hide();
  }

  cafeItem(titles){
    let html = ``;
    let r = this.searchCoffee(titles);
    for(let i=0;i<r.length;i++){
      html+= `
        <div class="col s12 m4">
          <div class="card small hoverable">
            <div class="card-image">
              <img src="${r[i].img}">
              <span class="card-title">${r[i].titles}</span>
            </div>
            <div class="card-content">
              <p>${r[i].content}</p>
               
            </div>
            <div class="card-action">
              <a href="#" onclick="component.cafeView(${r[i].coffeeid})">More</a>
            </div>
          </div>
        </div>
      `;
    }   
    this.reRender(`
      ${html}
      `,document.getElementById("cafeItem"));
    $('#cafeList').show();
    $('#cafeView').hide();
    $('#recent').hide();  
    $('#addCoffees').hide();  
        $('#Home').hide();    
  }

  addCoffees(){
    let html = `

 



    

         
        
      

    `;

    this.reRender(`
      ${html}
      `,document.getElementById("addCoffees"));
    $('#addCoffees').show();
    $('#MusicList').hide();
    $('#cafeView').hide();
    $('#recent').hide();  
    $('#Home').hide();    
  }

  

deleteCoffees(key){
    let r = this.b;
    for(let i=0;i<r.length;i++){
      if(r[i].coffeeid == key){
        this.b.splice(i,1);
        break;
      }
    }   
    this.MusicList();
  }

  coffeesearchId(coffeeid){
    let r = this.b;
    for(let i=0;i<r.length;i++){
      if(coffeeid==r[i].coffeeid){
        return r[i];
      }
    }
  } 

  searchCoffee(titles){
    let objects = [];
    let r = this.b;
    for(let i=0;i<r.length;i++){
      let expr = (r[i].titles.toUpperCase().indexOf(titles.toUpperCase()) > -1);
      if(expr){
        objects.push(r[i]);
      }
    }
    return objects;
  }


Home(){
  let html=`


  `;
   this.reRender(`
      ${html}
      `,document.getElementById("addCoffees"));
    $('#addCoffees').hide();
    $('#cafeList').hide();
    $('#cafeView').hide();
    $('#recent').show(); 
     $('#Home').hide();  
   
   

}


} 
let component = new Component();
component.cafeDesign();
