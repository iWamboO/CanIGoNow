var app = new Vue({
    template: 
    `
    <div>
 
        <p>How long do you wanna work?</p>
        <input type="number" v-model="worktimeValueInputHours" min="0" max="10">
        <input type="number" v-model="worktimeValueInputMinutes" min="0" max="60">
        <p>Timestamp in</p>
        <input type="number" v-model="timestampValueInputHours" min="6" max="17">
        <input type="number" v-model="timestampValueInputMinutes" min="0" max="60">
        <p>Lunchtime</p>
        <input type="number" v-model="lunchtimeValueInput" min="0" max="60">

        <p>{{youCanGoAt}}</p>

    </div>
    `,
    el: '#app',
    data() {
        return {
            worktimeValueInputHours: 0,
            worktimeValueInputMinutes: 0,
            timestampValueInputHours: 6,
            timestampValueInputMinutes: 0,
            lunchtimeValueInput: 30,
        }
    },
    computed: {
        youCanGoAt(){

            const worktimeTimeInMilliseconds = this.worktimeValueInputHours * 3600000 + this.worktimeValueInputMinutes * 60000
            const timestampTimeInMilliseconds = this.timestampValueInputHours * 3600000 + this.timestampValueInputMinutes * 60000
            const lunchtimeValueInputInMilliseconds = this.lunchtimeValueInput * 60000

            return new Date(worktimeTimeInMilliseconds + timestampTimeInMilliseconds + lunchtimeValueInputInMilliseconds - 3600000).toLocaleTimeString(navigator.language, {hour: '2-digit',minute:'2-digit'});
        }
    }
}) 