<template>
  <form @submit.prevent="handleSubmit">
    <h4>Delete a VNF, VNFD and UCPE</h4>

    <div>
        <label for="">vnf_id</label>
        <input type="number" required v-model="vnf_id">
        <p class="info">integer, required*</p>
    </div>

    <div>
        <label for="">vnfd_id</label>
        <input type="number" required v-model="vnfd_id">
        <p class="info">integer, required*</p>
    </div>

    <div>
        <label for="">ucpe_id</label>
        <input type="number" required v-model="ucpe_id">
        <p class="info">integer, required*</p>
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
            vnf_id: '',
            vnfd_id: '',
            ucpe_id: ''
        }
    },
    methods: {
        handleSubmit() {
            let formData = {
                vnf_id: this.vnf_id,
                cnfd_id: this.vnfd_id,
                ucpe_id: this.ucpe_id
            }
            axios.delete('http://192.168.104.41:30448/sede/', formData)
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