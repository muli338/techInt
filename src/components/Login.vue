<template>
    <form @submit.prevent="handleSubmit">
        <h3>LOGIN</h3>
        <div class="form-group">
            <label>Phone Number</label>
            <input type="text" class="form-control" v-model="phone_number" placeholder="Phone number" />
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password" />
        </div>

        <button class="btn btn-primary btn-block">Login</button>
    </form>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'L-o-g-i-n',
        data() {
            return{
                phone_number: '',
                password: ''
            }
        },
        methods: {
            async handleSubmit(){
                const response =await axios.post('login', {
                    phone_number: this.phone_number,
                    password: this.password
                });

                console.log(response); 
            }
        }
    }
</script>