<template>
    <form  @submit.prevent="hundleSubmit">
        <h3>SIGN UP</h3>
        <div class="form-group">
            <label>First Name</label>
            <input type="text" class="form-control" v-model ="first_name" placeholder="FIRST NAME" />
        </div>
        <div class="form-group">
            <label>Second Name</label>
            <input type="text" class="form-control" v-model="second_name" placeholder="SECOND NAME" />
        </div>
        <div class="form-group">
            <label>Phone Number</label>
            <input type="text" class="form-control" v-model="phone_number" placeholder="Phone number" />
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password" />
        </div>

        <input class="btn btn-primary btn-block" type="submit" placeholder="Sign Up" />
    </form>
    <p>first_name : {{first_name}}</p>
    <P>second_name : {{second_name}}</P>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'S-I-G-N',
        data(){
            return {
                first_name : '',
                second_name: '',
                phone_number: '',
                password: ''
            }
        },
        methods: {
            async handleSubmit(){
                
                const response = await axios.post('signup', {
                    first_name: this.first_name,
                    second_name: this.second_name,
                    phone_number: this.phone_number,
                    password: this.password
                });
                console.log(response);
            }
        }
    }
    
</script>
