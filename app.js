var app = new Vue({
    template: 
    `
    <div>
 
        <div class="app-header">
            <h1>Can I Go Now?</h1>
        </div>

        <div class="app-body">
            
            <div class="app-body-element">
                <div class="app-body-element-description">
                    <p>How long do you wanna work?</p>
                </div>
                <div class="app-body-element-input">
                    <input type="number" v-model="worktimeValueInputHours" min="0" max="10">
                    <span>:</span>
                    <input type="number" v-model="worktimeValueInputMinutes" min="0" max="60">
                </div>
            </div>

            <div class="app-body-element">
                <div class="app-body-element-description">
                    <p>Timestamp in</p>
                </div>
                <div class="app-body-element-input">
                    <input type="number" v-model="timestampValueInputHours" min="6" max="17">
                    <span>:</span>
                    <input type="number" v-model="timestampValueInputMinutes" min="0" max="60">
                </div>
            </div>
            
            <div class="app-body-element">
                <div class="app-body-element-description">
                    <p>Lunchtime</p>
                </div>
                <div class="app-body-element-input">
                    <input type="number" v-model="lunchtimeValueInputHours" min="0" max="10">
                    <span>:</span>
                    <input type="number" v-model="lunchtimeValueInputMinutes" min="0" max="60">
                </div>
            </div>

            <div class="app-body-element">
                <div class="app-body-element-description">
                    <p>You Can Go At</p>
                </div>
                <div class="app-body-element-input">
                    <p>{{youCanGoAt}}</p>
                </div>
            </div>
        </div>

    </div>
    `,
    el: '#app',
    data() {
        return {
            worktimeValueInputHours: 0,
            worktimeValueInputMinutes: 0,
            timestampValueInputHours: 6,
            timestampValueInputMinutes: 0,
            lunchtimeValueInputHours: 0,
            lunchtimeValueInputMinutes: 30,
        }
    },
    computed: {
        youCanGoAt(){

            const worktimeTimeInMilliseconds = this.worktimeValueInputHours * 3600000 + this.worktimeValueInputMinutes * 60000
            const timestampTimeInMilliseconds = this.timestampValueInputHours * 3600000 + this.timestampValueInputMinutes * 60000
            const lunchtimeValueInputInMilliseconds = this.lunchtimeValueInputHours * 3600000 + this.lunchtimeValueInputMinutes * 60000

            return new Date(worktimeTimeInMilliseconds + timestampTimeInMilliseconds + lunchtimeValueInputInMilliseconds - 3600000).toLocaleTimeString(navigator.language, {hour: '2-digit',minute:'2-digit'});
        }
    }
}) 