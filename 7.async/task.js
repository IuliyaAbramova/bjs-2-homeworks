class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if(!id) {
            throw new Error("text error");
        }

        if(this.alarmCollection.some(call => call.id === id)) {
            console.error("Идентификатор не уникален");
            return;
        }

        this.alarmCollection.push({time, callback, id});
    }

    removeClock(id) {
        const indexCallForDelete = this.alarmCollection.findIndex(call => call.id === id);

        if(indexCallForDelete === -1) {
        return false;
        }

        this.alarmCollection.splice(indexCallForDelete, 1);
        return true;

        /*const lengthBeforeFilter = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(call => call.id !== id);
        return this.alarmCollection.length !== lengthBeforeFilter;*/

    }

    getCurrentFormattedTime() {
        let time = new Date();
        let hour = time.getHours();
        let minute = time.getMinutes();
        let result = hour + ":" + minute;
        
         if(hour < 10) {
            result = "0" + hour;
        } else if(minute < 10) {
            result = "0" + minute;

        } return result;

    }

    start() {
        if(this.timerId) {
            return;
        }

        const checkClock = (alarm) => {
            if(alarm.time === this.getCurrentFormattedTime()) {
                alarm.callback();
            }
        }

        this.timerId = setInterval(() => {
            this.alarmCollection.forEach(checkClock);
        }, 1000);
    }

    stop() {
        if(this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

    printAlarms() {
        this.alarmCollection.forEach(function(id, time) { 
            console.log(id +", " + time);
        });
        
    }
}
