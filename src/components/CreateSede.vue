<template>
  <form @submit.prevent="handleSubmit">
    <h4>SENDS A REQUEST TO REQUESTHANDLER TO DEPLOY A VNF, VNFD, AND UCPE</h4>

    <div class="wrapper">
        <div class="left">
            <div>
                <label for="">template_id</label>
                <input type="number" required v-model="template_id">
                <p class="info">integer, required*</p>
            </div>

            <div>
                <label for="">license_pack_id</label>
                <input type="number" required v-model="license_id">
                <p class="info">integer, required*</p>
            </div>

            <div>
                <label for="">vnfd_name</label>
                <input type="text" required v-model="vnfd_name">
                <p class="info">string, required*</p>
            </div>
        </div>

        <div class="center">
            <div>
                <label for="">vnfd_desc</label>
                <input type="text" required v-model="vnfd_desc">
                <p class="info">string, required*</p>
            </div>

            <div>
                <label for="">vnf_name</label>
                <input type="text" required v-model="vnf_name">
                <p class="info">string, required*</p>
            </div>

            <div>
                <label for="">vnfd_desc</label>
                <input type="text" required v-model="vnf_desc">
                <p class="info">string, required*</p>
            </div>
        </div>
        
        <div class="right">
            <div class="files">
                <label for="">raw_json</label>
                <input type="file" ref="myFiles" @change="readFile()">
                <p class="info">string($binary), required*</p>
            </div>

            <div class="files">
                <label for="">tosca_file</label>
                <input type="file" ref="myFiles" @change="readFile()">
                <p class="info">string($binary), required*</p>
            </div>

            <div class="files">
                <label for="">params_file</label>
                <input type="file" ref="myFiles" @change="readFile()">
                <p class="info">string($binary), required*</p>
            </div>     
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
            template_id: '',
            license_id: '',
            vnfd_name: '',
            vnfd_desc: '',
            vnf_name: '',
            vnf_desc: '',
            json: [],
            tosca: [],
            params: []
        }
    },
    methods: {
        handleSubmit() {
            console.log('form submitted')
            console.log('license_id: ', this.license_id)
            console.log('vnfd_name: ', this.vnfd_name)
            console.log('vnfd_desc: ', this.vnfd_desc)
            console.log('vnf_name: ', this.vnf_name)
            console.log('vnf_desc: ', this.vnf_desc)
            console.log('raw_json: ', this.json)
            console.log('tosca_file: ', this.tosca)
            console.log('params_file: ', this.params)
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
        width: 940px;
    }

    .left {
        display: inline-block;
        width:120px;
        height:120px;
        margin-right: 190px;   
    }

    .center {
        display: inline-block;
        width:120px;
        height:120px;
        margin-right: 170px; 
    }

    .right {
        display: inline-block;
        width:120px;
        height:120px;
        top: 500px;
    }
    
    .files p {
        margin-top: -10px;
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

    input[type="file"] {
        width: 250px;
        margin-left: -7px;
        position: relative;
        top: -5px;
        font-size: 1rem;
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