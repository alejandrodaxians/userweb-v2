<template>
  <form @submit.prevent="handleSubmit">
    <h4>RETURNS A LIST OF REQUESTS FILTERED BY THE GIVEN PARAMETERS</h4>
    <div class="complete">
        <input type="checkbox" v-model="complete">
        <label for="">complete</label>  
        <p class="info">boolean, default:false</p>  
    </div>

    <div class="wrapper">
        <div class="left">
            <label for="">status:</label>
            <select name="" id="" v-model="state">
                <option value="ACKNOWLEDGED">ACKNOWLEDGED</option>
                <option value="IN_PROGRESS">IN_PROGRESS</option>
                <option value="PENDING">PENDING</option>
                <option value="HELD">HELD</option>
                <option value="CANCELLED">CANCELLED</option>
                <option value="COMPLETED">COMPLETED</option>
                <option value="FAILED">FAILED</option>
                <option value="PARTIAL">PARTIAL</option>
                <option value="REJECTED">REJECTED</option>
            </select>
            <p class="info">string</p>
            
            <label for="">saga_name:</label>
            <select name="" id="" v-model="name">
                <option value="crear_sede">crear_sede</option>
                <option value="borrar_sede">borrar_sede</option>
            </select>
            <p class="info">string</p> 
        </div>

        <div class="right">
            <label for="">from_date:</label>
            <input type="text" name="" id="" v-model="from">
            <p class="info">string($date), YYYY-MM-DD</p>>

            <label for="">to_date:</label>
            <input type="text" name="" id="" v-model="to">
            <p class="info">string($date), YYYY-MM-DD</p>
        </div>
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
import axios from 'axios'

export default {
    data() {
        return {
            complete: false,
            name: null,
            state: null,
            from: null,
            to: null
        }
    },
    
    methods: {
        handleSubmit() {
             axios.get("http://192.168.104.41:30448/request", {
                 params: {
                     complete: this.complete,
                     state: this.state,
                     saga_name: this.name,
                     from_date: this.from,
                     to_date: this.to
                 }
             })
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err.message))
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