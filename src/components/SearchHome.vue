<template>
    <div class="body">
        <table>
            <thead>
                <th>request id</th>
                <th>status msg</th>
                <th>name</th>
                <th>step</th>
                <th>description</th>
                <th>creation date</th>
                <th>start date</th>
                <th>completion date</th>
                <th>data</th>
            </thead>
            <tbody>
                <tr >
                    <th></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
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

tbody th {
    text-align: left;
    border: solid 1px var(--light-alt);
    color: var(--primary);
    padding: 6px;    
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