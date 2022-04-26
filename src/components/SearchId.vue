<template>
  <form @submit.prevent="handleSubmit">
    <h4>SENDS A REQUEST TO REQUESTHANDLER TO GET REQUEST DATA</h4>

    <div>
        <label for="">request_id</label>
        <input type="number" required v-model="request_id">
        <p class="info">integer, required*</p>
    </div>
    
    <div class="complete">
        <input type="checkbox" v-model="complete">
        <label for="">complete</label>  
        <p class="info">boolean, default:false</p>
    </div>

    <div class="buttons">
        <div class="reset">
            <button type="reset">Reset</button>
        </div>

        <div class="submit">
            <button>Submit</button>
        </div>
    </div>

  </form>
</template>

<script>
export default {
    data() {
        return {
            form: {
            request_id: '',
            complete: false
            }
        }
    },
    methods: {
        handleSubmit() {
            console.log('form submitted')
            console.log('request_id: ', this.request_id)
            console.log('complete: ', this.complete)
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

    .left {
        display: inline-block;
        width:120px;
        height:120px;
        margin-right: 190px;   
    }

    .right {
        display: inline-block;
        width:120px;
        height:120px;
    }
    
    p {
        width: 200px;
    }

    h4 {
        color: var(--light);
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.8em;
        text-transform: uppercase;
        letter-spacing: 1px;
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
        margin-bottom: 10px;
        padding-bottom: 5px;
    }

    input[type="checkbox"] {
        display: inline-block;
        width: 16px;
        margin: 0 16px 0 0;
        position: relative;
        top: 2px;
        transform: scale(1.5);
    }

    .buttons {
        padding-top: 30px;
    }

    button {
        background: #053174;
        padding: 10px 20px;
        margin-top: 20px;
        color: #fff;
        border-radius: 20px; 
        text-transform: uppercase;  
        font-size: 1rem;
        font-weight: bold;  
        
        &:hover {
            border: solid 1px #fff;
        }
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
        margin-top: -1px;
        margin-bottom: 10px;
        font-size: 0.7em;
        font-weight: bold;
    }
</style>