<template>
    <form @submit.prevent="hundleSubmit">
        <h3>LOGIN</h3>
        <div class="form-group">
            <label>Phone Number</label>
            <input type="text" class="form-control" placeholder="Phone number" />
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" placeholder="Password" />
        </div>

        <button class="btn btn-primary btn-block">Login</button>
    </form>
</template>

<script>
    export default {
        name: 'L-o-g-i-n',
        methods: {
            handleSubmit(){
                console.log('submited');
            }
        }
    }
</script>