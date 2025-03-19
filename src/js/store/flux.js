const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

		},
		actions: {
			// Use getActions to call a function within a fuction

			addData: async (nuevoContacto) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Lvera/contacts", {

						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(nuevoContacto)
					})
					console.log(response);

				} catch (error) {
					console.log(error);

				}


			},

		}
	};
};

export default getState;
