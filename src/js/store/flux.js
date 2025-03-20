const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            slug:"",
         
        },
        actions: {
            // primera tarea Función para agregar un nuevo contacto
            addData: async (nuevoContacto,slug) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(nuevoContacto)
                    });
                    if (response.ok) {
                        console.log("Contacto agregado exitosamente.");
                        getActions().getList(slug); // Actualiza la lista de contactos
                    } else {
                        console.error("Error al agregar el contacto:", response.status);
                    }
                } catch (error) {
                    console.log("Error en la solicitud:", error);
                }
            },

            // segunda tarea Función para obtener los contactos desde la API
            getList: async (slug) => {
          
                
                try {                           //https://playground.4geeks.com/contact/agendas/Lvera
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`);                    
                    if (response.status === 404){
                        getActions().createAgenda(slug);
                        return;
                    }
                    if (response.ok) {
                        const data = await response.json();
                        console.log("Datos recibidos de la API:", data); // Verificar datos obtenidos
                        setStore({...getStore(), contacts: data.contacts, slug:slug }); // Guarda los contactos en el store
                    } else {
                        console.error("Error al obtener los contactos:", response.status);
                    }
                } catch (error) {
                    console.log("Error en la solicitud:", error);
                }
            },
            
            // tercer tarea funcion para crear usuarios / una nueva agenda 
            createAgenda: async (slug) => {

                try {                           //https://playground.4geeks.com/contact/agendas/Andate
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
 
                    });                    
                        
                        if (response.status === 201) {
                            setStore({slug:slug});
                            return;
                        }
                       
                } catch (error) {
                    console.log("Error en la solicitud:", error);
                }
            },
            // cuarta tarea funcion para eliminar contatos
            deleteContact: async (id, slug) => {
                                                //https://playground.4geeks.com/contact/agendas/Lvera/contacts/1
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`, {
                        method: "DELETE"
                    });
                    if (response.ok) {
                        console.log("Contacto eliminado exitosamente.");
                        getActions().getList(slug); // Actualiza la lista de contactos
                    } else {
                        console.error("Error al eliminar el contacto:", response.status);
                    }
                } catch (error) {
                    console.log("Error en la solicitud:", error);
                }
            },
            // quinta tarea funcion para editar contactos
        }
    };
};

export default getState;
