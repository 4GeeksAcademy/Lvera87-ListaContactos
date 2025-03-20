import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import Contact from "./component/Contact.jsx";
import Addcontact from "./component/Addcontact.jsx";
import EditContact from "./component/EditContact.jsx";

const Layout = () => {

	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Contact />} />
						<Route path="/addcontact" element={<Addcontact />} />
						<Route path="/EditContact" element={<EditContact />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);