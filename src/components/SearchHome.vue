<template>
    <div class="body" style="overflow-x:auto;">
        <table id="tabla">
            <thead>
                <tr>
                    <th v-for="(col) in columns" :key="col" @click="sortTable(col)">{{ col }}
                        <span id="sort" 
                        class="material-icons" 
                        v-show="col == sortColumn" 
                        v-if="!this.ascending">arrow_drop_down</span>
                        <span id="sort" 
                        class="material-icons" 
                        v-show="col == sortColumn" 
                        v-else>arrow_drop_up</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in filteredRows.slice(0, 10)" :key="row">
                   <td v-for="col in columns" :key="col">{{ row[col] }}</td>
                </tr>
            </tbody>
        </table>
    <div>
        <span class="material-icons" id="filter">sort</span>
        <input type="text" placeholder="Filter by ..." v-model="filter" />
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            filter: '',
            currentPage: 1,
            elementsPerPage: 1,
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
            rows: [],
        }  
    },
    methods: {
        "sortTable": function sortTable(col) {
            if (this.sortColumn === col) {
                this.ascending = !this.ascending;
            } else {
                this.ascending = true;
                this.sortColumn = col;
            }

            var ascending = this.ascending;

            this.rows.sort(function(a, b) {
                if (a[col] > b[col]) {
                    return ascending ? 1 : -1
                } else if (a[col] < b[col]) {
                    return ascending ? -1 : 1
                }
            return 0;
            })
        }
    },
    computed: {
        filteredRows() {
            return this.rows.filter(row => {
            const request_id = row.request_id.toString().toLowerCase();
            const status_msg = row.status_msg.toLowerCase();
            const name = row.name.toLowerCase();
            const step = row.step.toLowerCase();
            const description = row.description.toLowerCase();
            const creation_date = row.creation_date.toLowerCase();
            const start_date = row.start_date.toLowerCase();
            const completion_date = row.completion_date.toLowerCase();
            const searchTerm = this.filter.toLowerCase();
            

            return status_msg.includes(searchTerm) || request_id.includes(searchTerm) || 
                name.includes(searchTerm) || step.includes(searchTerm) || description.includes(searchTerm) || 
                creation_date.includes(searchTerm) || start_date.includes(searchTerm) || completion_date.includes(searchTerm)
            });
        }
    },
    mounted() {
        axios.get("http://192.168.104.41:30448/request")
            .then(res => { 
                console.log(res)
            })
            .catch(err => console.log(err.message))
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
    font-weight: bold;
    margin-left: 15px;
    margin-right: 15px;
}

thead th {
    border:solid 3px var(--light);
    text-transform: uppercase;
    padding: 15px;
    text-align: center;

    &:hover {
        color: var(--primary);
        cursor: pointer;
    }
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
    overflow: hidden;
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
        margin-left: 17px;
        font-size: 1rem;
        margin-top: 30px;
    }

#sort {
    float: left;
    width: 12px;
    height: 15px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position-y: bottom;
}

#filter {
    float: left;
    width: 12px;
    height: 15px;
    margin-right: 30px;
    padding-left: 15px;
}

.number {
    margin-top: 20px;
    float: left;
    padding: 4px 10px;
    color: #FFF;
    border-radius: 4px;
    background: #44475C;
    margin: 0px 5px;
    cursor: pointer;
    font-size: 1rem;
}

.number:hover, .number.active {
  background: var(--primary);
  color: var(--dark)
}

.pagination {
  text-align: right;
  width: 750px;
  padding: 8px;
}

@media screen and (max-width: 900px) {
    table th:nth-child(1), table td:nth-child(1), table th:nth-child(2), table td:nth-child(2) {
        width: 20px;
    }

    table th:nth-child(4), table td:nth-child(4) {
        display: none;
    }

    table th:nth-child(6), table td:nth-child(6) {
        display: none;
    }

    table th:nth-child(7), table td:nth-child(7) {
        display: none;
    }

    table th:nth-child(8), table td:nth-child(8) {
        display: none;
    }

    table th:nth-child(9), table td:nth-child(9) {
        display: none;
    }
}
</style>