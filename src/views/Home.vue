<template>
  <div class="home">
    <button  class="btn btn-danger" @click="logout">logout</button><br>
    <div class="container table-responsive">
      <DataTable :value="contacts" class="table-bordered table-hover">
        <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
      </DataTable>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import UserService from "../service/user.service.js";
import ContactService from "../service/contact.service.js"
import { messageService } from '../service/message.service';

export default {
  name: "home",
  components: {
    // HelloWorld
    DataTable,
    Column
  },
  data: function() {
    return {
      users: [],
      contacts:[],
      columns: []
    };
  },
  userService: null,
  contactService:null,
  created() {
    this.userService = new UserService();
    this.contactService=new ContactService();
    this.columns = [
      { field: "firstname", header: "Firstname" },
      { field: "lastname", header: "Lastname" },
      { field: "email", header: "Email" },
      { field: "phone", header: "Phone" },
      { header: "Actions" }
      

    ];
  },
  async mounted() {
    try {
      // let user = await this.userService.getUsersById(1);
      // this.users.push(user);

      // this.users= await this.userService.getUsers();

      this.contacts= await this.contactService.getContacts();

    } catch (error) {
      console.log(error);  
    }
  },
  methods: {
    async logout(){
      try {
        this.users = await this.userService.logout();
        messageService.clearMessages();
        this.$router.push('/login')
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
  .tabel{
    width:60%;
    margin-left:22%;
    margin-top: 2%;
    border: 1px solid black;
  }
</style>