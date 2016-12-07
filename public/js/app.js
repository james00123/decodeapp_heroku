"use strict";


class App{
	constructor(){
		this.media = [
			{
				"img" : "http://media.buzzle.com/media/images-en/gallery/recipes/french-food/900-119624610-french-croissants.jpg",
				"alignment" : "left-align",
				"caption": "Delicous Meal",
				"slogan": "Completes your day."
			},
			{
				"img" : "http://2.bp.blogspot.com/-0jz-bTP0i8s/Ui8NeRhHaxI/AAAAAAAAEAw/e1e2UBs_6m4/s1600/simitsimit.jpg",
				"alignment" : "right-align",
				"caption": "Amazing Breakfast",
				"slogan": "Removes your Negativities"
			},
			{
				"img" : "http://johansensdev3.wpengine.com/wp-content/uploads/2014/05/Pastel-de-Belem-1.jpg",
				"alignment" : "center-align",
				"caption": "Right Selection",
				"slogan": "Enhances your Personality"
			},
			{
				"img" : "http://www.travelbook.ph/blog/cms/wp-content/uploads/old-site/inline/1742_pizza_300.jpg",
				"alignment" : "center-align",
				"caption": "Remedy Cafe",
				"slogan": "Enlightens your Day."
			}
		];

		this.b = [

				{
				"title": "JAMS",
				"content": "Delicous Meal",	
				"img" : "img/UBE.jpg",
				},
				{
				"title": "CUP CAKES",
				"content": "Amazing Meal.",
				"img" : "img/cake.jpg",
				},
				{
				"title": "FRAPPES",	
				"content": "Delicous Meal",
				"img" : "img/frappe.jpg",
				},
				{
				"title": "COFFEES",	
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
}

class Component extends App{
	constructor(){

		super();
	}

	cafeLayout(){
		let html = `
			 <nav>
			    <div class="nav-wrapper">
			      <a href="#" class="brand-logo center"><img src="img/logo3.jpg"></img></a>
			      <ul id="nav-mobile" class="left hide-on-med-and-down">
			        <li id="pos"><a class="waves-effect waves-teal btn-small" href="#"><b id="color">Order</b></a></li>
			        <li><a class="waves-effect waves-yellow btn-small" href="#"><b id="color">Review</b></a></li>
			        <li><a class="waves-effect waves-green btn-small" href="#"><b id="color">Submit</b></a></li>        
			      </ul>
			    </div>
			  </nav>

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

			 html += `

					</ul>
				  </div>
		  
		`;

				for(let i=0;i<this.b.length;i++){
				 html += `
						 <div class="row">
							        
			  		      <div class="col s12">
          						<div class="card">
          				  <div class="card-image">
				              <img src="${this.b[i].img}">
				              <span class="card-title"><b id="colors">${this.b[i].title}</b></span>
				            </div>
				            <div class="card-content">
				              <ul class="collapsible" data-collapsible="accordion">
							    <li>
							      <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
							      <div class="collapsible-body"><p>${this.b[i].content}</p></div>
							    </li>
							    </ul>
				            </div>
				          </div>
				        </div>
				      </div>
		            
				`;}

				html +=`

							<div class="row">
						      <div class="col s12">
						        <div class="card-panel teal">
						          <span class="white-text">
						          JAMES M. VARQUEZ
						          </span>
						        </div>
						      </div>
						    </div>



				`;





		this.reRender(`
			${html}
			`,document.getElementById("app"));
	}

}

let component = new Component();
component.cafeLayout();



