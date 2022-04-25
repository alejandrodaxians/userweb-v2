<template>
    <div class="body">
        <table id="tabla">
            <thead>
                <tr>
                    <th v-for="col in columns" :key="col">{{ col }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in rows" :key="row">
                   <td v-for="col in columns" :key="col">{{ row[col] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            columns: [
                "request_id",
                "status_msg",
                "name",
                "step",
                "description",
                "creation_date",
                "start_date",
                "completion_date",
                "data"
            ],
            rows: [
            {
                "request_id": 1234,
                "status_msg": "IN_PROGRESS",
                "name": "Request name",
                "step": "Request step",
                "description": "string",
                "creation_date": "2022-04-25T09:39:29.765Z",
                "start_date": "2022-04-25T09:39:29.765Z",
                "completion_date": "2022-04-25T09:39:29.765Z",
                "data": {}
            },
            {
                "request_id": 5678,
                "status_msg": "ACKNOWLEDGED",
                "name": "Request name 2",
                "step": "Request step 2",
                "description": "string1",
                "creation_date": "2022-04-26T09:39:29.765Z",
                "start_date": "2022-04-26T09:39:29.765Z",
                "completion_date": "2022-04-27T09:39:29.765Z",
                "data": {}
            },
            {
                "request_id": 2460,
                "status_msg": "COMPLETED",
                "name": "Request name 3",
                "step": "Request step 3",
                "description": "string2",
                "creation_date": "2022-03-15T09:39:29.765Z",
                "start_date": "2022-03-15T09:39:29.765Z",
                "completion_date": "2022-03-18T09:39:29.765Z",
                "data": {}
            },
            {
                "request_id": 6398,
                "status_msg": "HELD",
                "name": "Request name 4",
                "step": "Request step 5",
                "description": "string3",
                "creation_date": "2022-03-15T09:39:29.765Z",
                "start_date": "2022-03-15T09:39:29.765Z",
                "completion_date": "2022-03-18T09:39:29.765Z",
                "data": {}
            },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

.body {
    margin-left: 35px;
    padding: 20px;
    background-color: var(--dark);
    color: var(--light);
    min-height: 100vh;
    width: min-content;
    overflow: hidden;
}

table {
    width: 1200px;
    font-weight: bold;
}

thead th {
    border:solid 3px var(--light);
    text-transform: uppercase;
    padding: 6px;
}

tr {
    text-align: left;
    border: solid 1px var(--light-alt);
    padding: 6px;    
}

.th {
    color: var(--primary);
}

td {
    border: solid 1px var(--light-alt);
    height: 40px;
    padding: 6px;
} 

tr:nth-child(even) {
    background: var(--dark-alt)
}

input {
        display: block;
        padding: 10px;
        width: 200px;
        box-sizing: border-box;
        border: none;
        color: #555;
        margin-bottom: 20px;
        margin-left: 2px;
        font-size: 1rem;
    }
</style>