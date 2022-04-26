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
            <select name="" id="" v-model="status">
                <option value="" hidden></option>
                <option value="acknowledged">ACKNOWLEDGED</option>
                <option value="progress">IN-PROGRESS</option>
                <option value="pending">PENDING</option>
                <option value="held">HELD</option>
                <option value="cancelled">CANCELLED</option>
                <option value="completed">COMPLETED</option>
                <option value="failed">FAILED</option>
                <option value="partial">PARTIAL</option>
                <option value="rejected">REJECTED</option>
            </select>
            <p class="info">string</p>
            
            <label for="">saga_name:</label>
            <select name="" id="" v-model="saga">
                <option value="" hidden></option>
                <option value="crear">CREAR_SEDE</option>
                <option value="borrar">BORRAR_SEDE</option>
            </select>
            <p class="info">string</p> 
        </div>

        <div class="right">
            <label for="">from_date:</label>
            <input type="date" name="" id="" v-model="from">
            <p class="info">string($date), YYYY-MM-DD</p>>

            <label for="">to_date:</label>
            <input type="date" name="" id="" v-model="to">
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
export default {
    data() {
        return {
            form: {
            complete: false,
            saga: '',
            status: '',
            from: '',
            to: ''
            }
        }
    },
    methods: {
        handleSubmit() {
            console.log('form submitted')
            console.log('complete: ', this.complete)
            console.log('saga: ', this.saga)
            console.log('status: ', this.status)
            console.log('from: ', this.from)
            console.log('to: ', this.to)
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