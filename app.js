var app = new Vue({
    template: 
    `
    <div>
 
        <p>How long do you wanna work?</p>
        <input type="number" v-model="worktimeValueInputHours">
        <input type="number" v-model="worktimeValueInputMinutes">
        <p>Timestamp in</p>
        <input type="number" v-model="timestampValueInputHours">
        <input type="number" v-model="timestampValueInputMinutes">
        <p>Lunchtime</p>
        <input type="number" v-model="lunchtimeValueInput">

        <p>{{youCanGoAt}}</p>

    </div>
    `,
    el: '#app',
    data() {
        return {
            worktimeValueInputHours: 0,
            worktimeValueInputMinutes: 0,
            timestampValueInputHours: 0,
            timestampValueInputMinutes: 0,
            lunchtimeValueInput: 30,
        }
    },
    computed: {
        youCanGoAt(){

            const worktimeTimeCalc = this.worktimeValueInputHours * 3600000 + this.worktimeValueInputMinutes * 60000
            const timestampTimeCalc = this.timestampValueInputHours * 3600000 + this.timestampValueInputMinutes * 60000
            const lunchtimeValueInputCalc = this.lunchtimeValueInput * 60000

            return new Date(worktimeTimeCalc + timestampTimeCalc + lunchtimeValueInputCalc).toLocaleTimeString();
        }
    }

}) 