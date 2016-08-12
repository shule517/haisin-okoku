'use strict';

import Person from './modules/person';

const jake = new Person('Jake');
const non = new Person();

jake.speak();
non.speak();

console.log('test');

class Test {
    sleep(msec, val) {
        console.log('sleep(' + val + ')');
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, msec, val);
        });
    }

    async main() {
        console.log('----- start ----');
        let result1 = await this.sleep(3000, 'a1');
        console.log('result1 = ' + result1);
        let result2 = await this.sleep(3000, 'a2');
        console.log('result2 = ' + result2);
        console.log('----- end -----');
    }
}
var test = new Test();
test.main();
