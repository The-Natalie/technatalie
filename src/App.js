import React from "react";
import Header from "./Header"
import Portfolio from "./Portfolio"
import Skills from "./Skills"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import $ from "jquery";

class App extends React.Component {
	
 componentDidMount() {

 		//Smooth scroll effect
	  $("a").on('click', function(event) {
	    if (this.hash !== "") {
	      event.preventDefault();
	      var hash = this.hash;
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 800, function(){
	   
	        window.location.hash = hash;
	      });
	    } 
	  });

		//to top button:
		let toTopButton = document.getElementById("toTop");

		// When the user scrolls down 20px from the top of the document, show the button
		window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
		  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		    toTopButton.style.display = "block";
		  } else {
		    toTopButton.style.display = "none";
		  }
		}

 		//Picture Overlay
    let $overlay = $('<div id="overlay"></div>');
		let $image = $("<img>");
		let $caption = $("<p></p>");


		//Add caption to overlay
		$overlay.append($caption);

		//Add image to overlay
		$overlay.append($image);


		//Add overlay
		$("body").append($overlay);

		//Capture the click event on a link to an image
		$("#gallery a:not(.ext-link)").click(function(event) {
			event.preventDefault();
			let imageLocation = $(this).attr("href");
			$image.attr("src", imageLocation);

			//Show the overlay
			$overlay.show();


			// //Get child's alt attribute and set caption
			let captionText = $(this).children("img").attr("alt");
			$caption.text(captionText);
		});

		//Hide overlay when clicked
		$overlay.click(function(){
			$overlay.hide();
		})

		//Trying to fix the scroll on the overlay, it's not covering the whole page
		$("body").on("scroll", function() {
		  let scrollTop = $(this).scrollTop();
		  $("#overlay").css("top", scrollTop);
		  $("#overlay").css("bottom", -scrollTop);
		});


		//Skill buttons:
		$(".most-button").click(function() {
			$(".most-skill").css({"opacity": 1, "text-decoration": "underline"});
			$(".less-skill").css({"opacity": 0.15, "text-decoration": "none"});
			$(".none-skill").css({"opacity": 0.15, "text-decoration": "none"});
			$(".other-skill").css({"opacity": 0.15});
		});

		$(".less-button").click(function() {
			$(".most-skill").css({"opacity": 0.15, "text-decoration": "none"});
			$(".less-skill").css({"opacity": 1, "text-decoration": "underline"});
			$(".none-skill").css({"opacity": 0.15, "text-decoration": "none"});
			$(".other-skill").css({"opacity": 0.15});
		});

		$(".none-button").click(function() {
			$(".most-skill").css({"opacity": 0.1, "text-decoration": "none"});
			$(".less-skill").css({"opacity": 0.1, "text-decoration": "none"});
			$(".none-skill").css({"opacity": 1, "text-decoration": "underline"});
			$(".other-skill").css({"opacity": 0.1});
		});

		$(".other-button").click(function() {
			$(".most-skill").css({"opacity": 0.15, "text-decoration": "none"});
			$(".less-skill").css({"opacity": 0.15, "text-decoration": "none"});
			$(".none-skill").css({"opacity": 0.15, "text-decoration": "none"});
			$(".other-skill").css({"opacity": 1});
		});

		$(".all-button").click(function() {
			$(".most-skill").css({"opacity": 1, "text-decoration": "none"});
			$(".less-skill").css({"opacity": 1, "text-decoration": "none"});
			$(".none-skill").css({"opacity": 0.7, "text-decoration": "none"});
			$(".other-skill").css({"opacity": 0.6});
		});
  }
  render () {
		return (
			<div>
	  		<div id="header">
					<Header />
				</div>
				<div className="gradient"></div>
				<section className="wave-container">
			  	<div className="wave" style={{height: "150px", overflow: "hidden"}}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path d="M-0.85,143.58 C150.00,150.00 271.49,-50.00 501.40,142.58 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill: "#0c0c26"}}></path></svg>
			  	</div>
				</section>
				<button id="toTop" title="Go to top"><a href="#header"><i class="fas fa-arrow-circle-up"></i></a></button> 
				<Portfolio />	
				<div id="subpage">
					<Skills />
					<About />
					<Contact />
					<Footer />
				</div>
			</div>
		)
	}
}

export default App;