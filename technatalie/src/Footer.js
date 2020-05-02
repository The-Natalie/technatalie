import React from "react";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
	    <p>&copy; {currentYear} Natalie Hall</p>
	  </footer>
  )
}

export default Footer
