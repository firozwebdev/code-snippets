<template>
    <div>
        <a  href="/users/create" class="btn btn-success">Create User</a>
        <table class="table table-bordered table-striped">
           <tr>
               <th>Id</th>
               <th>Name</th>
               <th>Email</th>
               <th>Image</th>
               <th>Action</th>
           </tr>
           <tr v-for="(user,index) in users">
               <td>{{ user.id }}</td>
               <td>{{ user.name }}</td>
               <td>{{ user.email }}</td>
               <td><img style="width: 100px;height:80px;" :src="'/img/'+user.image" alt=""></td>
               <td>
                   <a :href="'/users/'+user.id+'/edit'" class= "btn btn-primary">Edit</a>
                   <a  class= "btn btn-danger" @click.prevent="deleteUser(user.id, index)">Delete</a>
               </td>
            </tr> 
          
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                 users: [],
                 user: {
                     id: '',
                     name: '',
                     email: ''
                 }
            }
        },
        mounted() {
           this.getUsers();
        },
        methods: {
            getUsers(){
                axios.get('/api/users').then( response => {
                    this.users = response.data;
                }).catch( error => {
                    console.log(error);
                });
            },
            deleteUser(id, index){
                axios.delete('/api/users/'+id).then( response => {
                    this.users.splice(index,1);
                }).catch( error => {
                    console.log(error);
                });
            }
        }
    }
</script>