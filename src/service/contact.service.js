import axios from "axios";

export default class contactService {
    async getContacts() {
        return await axios.get('http://localhost:3000/contacts').then(res => res.data);
    }

    async getContactByUserId(id) {
        return await axios.get('http://localhost:3000/contacts').then(res => res.data);
    }
}