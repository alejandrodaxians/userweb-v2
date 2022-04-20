<template>
  <form @submit.prevent="handleSubmit">
    <label for="">Email:</label>
    <input type="email" required v-model="email">
    <div class="info">Info test</div>

    <label for="">Password:</label>
    <input type="password" required v-model="password">

    <label for="">Role:</label>
    <select name="" id="" required v-model="role">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
    </select>

    <div class="terms">
        <input type="checkbox" required v-model="terms">
        <label for="">Accept terms and conditions</label>    
    </div>

    <div class="reset">
        <button type="reset">Reset</button>
    </div>

    <div class="submit">
        <button>Submit</button>
    </div>

  </form>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            terms: false,
        }
    },
    methods: {
        handleSubmit() {
            console.log('form submitted')
            console.log('email: ', this.email)
            console.log('password: ', this.password)
            console.log('role: ', this.role)
            console.log('terms: ', this.terms)
        }
    }
}
</script>

<style lang="scss" scoped>
    form {
        min-width: 500px;
        min-height: 100vh;
        margin-left: 35px;
        background: var(--dark);
        text-align: left;
        padding: 40px;
        flex-direction: column;
    }

    label {
        color: var(--light);
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }

    option {
        color: var(--dark);
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 1rem;
        letter-spacing: 1px;
        font-weight: bold;
    }

    input, select {
        display: block;
        padding: 10px 6px;
        width: 200px;
        box-sizing: border-box;
        border: none;
        color: #555;
        margin-bottom: 15px;
        padding-bottom: 10px;
    }

    input[type="checkbox"] {
        display: inline-block;
        width: 16px;
        margin: 0 16px 0 0;
        position: relative;
        top: 2px;
    }

    button {
        background: #0b6dff;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color: #fff;
        border-radius: 20px; 
        text-transform: uppercase;  
        font-size: 1rem; 
        
    }

    .submit, .reset {
            text-align: center;
            margin-top: 15px;
        }

    .reset button {
        background: #03506c;
    }

    .info {
        color: #ff87b5;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 0.8em;
        font-weight: bold;
    }
</style>