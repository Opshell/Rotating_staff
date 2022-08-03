/* Common - JS */
// function templateLoader(url) {
//     url = 'asset/vueTemplateHTML/' + url;
//     var xhttp = new XMLHttpRequest();
//     xhttp.open("GET", url, false);
//     xhttp.send();
//     if(xhttp.readyState == 4 && xhttp.status == 200){
//         return xhttp.responseText;
//     }
//     return '<p style="color:red;">Template URL Error.</p>';
// }
/** 補字 - 輸出成字串
 * @param {*} str // 輸入字
 * @param {Int} length // 最終長度
 * @param {String} padStr // 要補字
 * @param {String} type // 左補或右補 ('left' or 'right')
 * @returns {String} result
 */
function strPad(input, length, padStr = '0', type = 'left') {
    const oriText = input.toString();
    const inpLen = oriText.length;
    let addText = '';

    if (inpLen < length) {
        for (let i = inpLen; i < length; i++) {
            addText += padStr;
        }
    }

    result = (type == 'left')? addText + oriText : oriText + addText ;
    return result;
}
/** 解深拷貝 */
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/** 判斷是否是物件
 * @param {*} obj
 * @returns
 */
function isObj(obj) {
    return obj != null && typeof obj === 'object';
}
/** 判斷物件是否為空 */
function isObjEmpty(obj) {
    return Object.keys(obj).length === 0;
}
/** 判斷兩個物件Key、value是否相等
 * @param {Object} obj1
 * @param {Object} obj2
 * @returns {Boolean}
 */
function isObjEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let index = 0; index < keys1.length; index++) {
        const val1 = obj1[keys1[index]];
        const val2 = obj2[keys2[index]];
        const areObjects = isObj(val1) && isObj(val2);
        if (areObjects && !isObjEqual(val1, val2) ||
            !areObjects && val1 !== val2) {
            return false;
        }
    }

    return true;
}
/** Object.prototype.hasOwnProperty.call
 * @param {Object} obj
 * @param {String} key
 * @returns {Boolean}
 */
function objHOP(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}

/** 浮點數相加
 * @param {*} float1
 * @param {*} float2
 * @returns
 */
function floatAddUp(float1, float2) {
    return parseFloat(float1) + parseFloat(float2);
}




// /* Common Components */
// Vue.component('vue-input', {
//     template: templateLoader('vue-input.html'),
//     props: {
//         value: {
//             type: Number,
//             default: 0
//         },
//         type: {
//             type: String,
//             default: 'text'
//         }
//     },
//     data() {
//         return { };
//     },
//     mounted() {},
//     watch: {
//         value: function (val, oVal) {
//             if (val != oVal) {
//                 this.$emit('input', val);
//             }
//         }
//     }
// });
// Vue.component('vue-select', {
//     template: templateLoader('vue-select.html'),
//     props: {
//         value: {
//             type: String,
//             default: ''
//         },
//         list: {
//             type: Array,
//             default: () => []
//         }
//     },
//     data() {
//         return {
//             select: ''
//         };
//     },
//     mounted() {
//         this.select = this.value || '';
//     },
//     methods: {
//         onChange: function() {
//             let result = this.list.filter(item => item.unique_id == this.select);
//             this.$emit('input', result[0].unique_id.toString());
//         }
//     }
// });

// /* Special Components */
// Vue.component('ops-notify', {
//     template: templateLoader('ops-notify.html'),
//     props: {
//         list: {
//             type: Array,
//             default: () => []
//         }
//     },
//     data() {
//         return {
//             notifyList: [],
//         };
//     },
//     mounted() {
//         this.notifyList = this.list || [];
//     },
//     methods: {
//         removeNotify: function (i) {
//             // this.notifyList.splice(i, 1);
//             this.$emit('remove-notify', this.notifyList[i].uid);
//         },
//     },
//     computed: {
//         compList: function () {
//             return deepCopy(this.list); // 深拷貝切開  才能判斷物件的nV && oV的變化
//         }
//     },
//     watch: {
//         compList: {
//             handler: function (nV, oV) {
//                 if (!isObjEqual(nV, oV)) {
//                     this.notifyList = nV;
//                 }
//             },
//             deep: true,
//         }
//     }
// });
// Vue.component('year-select', {
//     template: templateLoader('year-select.html'),
//     props: {
//         value: {
//             type: Number,
//             default: 0
//         }
//     },
//     data() {
//         return {
//             yearList: [],
//             select: ''
//         };
//     },
//     mounted() {
//         // 年份列表處理
//         let yearNow = new Date().getFullYear();
//         for (let i = yearNow; i >= 1900; i--) {
//             this.yearList.push(i);
//         }

//         this.select = this.value || yearNow;
//     },
//     methods: {
//         onChange: function() {
//             let result = this.yearList.filter(item => item == this.select);
//             this.$emit('input', result[0]);
//         }
//     }
// });
// Vue.component('month-select', {
//     template: templateLoader('month-select.html'),
//     props: {
//         value: {
//             type: Number,
//             default: 0
//         }
//     },
//     data() {
//         return {
//             monthList: [],
//             select: ''
//         };
//     },
//     mounted() {
//         // 月份列表處理
//         for (let i = 1; i <= 12; i++) {
//             this.monthList.push(i);
//         }
//         let monthNow = new Date().getMonth() + 1;

//         this.select = this.value || monthNow;
//     },
//     methods: {
//         onChange: function() {
//             let result = this.monthList.filter(item => item == this.select);
//             this.$emit('input', result[0]);
//         }
//     }
// });
// Vue.component('time-picker', {
//     template: templateLoader('time-picker.html'),
//     props: {
//         value: {
//             type: String,
//             default: ''
//         },
//         format: {
//             type: String,
//             default: 'hh:mm:ss'
//         },
//         clas: {
//             type: String,
//             default: ''
//         },
//         hIntval: {
//             type: Number,
//             default: 1
//         },
//         mIntval: {
//             type: Number,
//             default: 10
//         },
//         sIntval: {
//             type: Number,
//             default: 30
//         },
//         disabled: {
//             type: Boolean,
//             default: false
//         }
//     },
//     data() {
//         return {
//             time: '',
//             hourList: [],
//             minuteList: [],
//             secondList: [],
//             hh: '',
//             mm: '',
//             ss: '',
//             picker: 0
//         };
//     },
//     mounted() {
//         let nowTime = new Date();
//         let hh = nowTime.getHours();
//         let mm = nowTime.getMinutes();
//         let ss = nowTime.getSeconds();

//         // 時間列表處理
//         for (let i = 0; i <= 23; i+=this.hIntval) {
//             this.hourList.push(strPad(i, 2));
//         }
//         for (let i = 0; i <= 59; i+=this.mIntval) {
//             this.minuteList.push(strPad(i, 2));
//         }
//         for (let i = 0; i <= 59; i+=this.sIntval) {
//             this.secondList.push(strPad(i, 2));
//         }

//         // 紀錄現在時間
//         this.format.split(':').map((e) => {
//             if (e == 'hh') {
//                 this.hh = hh;
//             } else if (e == 'mm') {
//                 this.mm = mm;
//             } else if (e == 'ss') {
//                 this.ss = ss;
//             }
//         });

//         // value 格式化
//         if (this.value != '') {
//             let tmpTime = [];
//             this.value.split(':').map((e, i) => {
//                 if (i == 0 && this.hh !== '') { // hh
//                     tmpTime.push(e);
//                 } else if (i == 1 && this.mm !== '') { // mm
//                     tmpTime.push(e);
//                 } else if (i == 2 && this.ss !== '') { // ss
//                     tmpTime.push(ss);
//                 }
//             });

//             this.time = tmpTime.join(':');
//         }
//     },
//     methods: {
//         triggerPick: function(flag) {
//             this.picker = flag;
//         },
//         pick: function () {
//             let tmpTime = [];
//             // 紀錄現在時間
//             this.format.split(':').map((e) => {
//                 if (e == 'hh') {
//                     tmpTime.push(strPad(this.hh, 2));
//                 } else if (e == 'mm') {
//                     tmpTime.push(strPad(this.mm, 2));
//                 } else if (e == 'ss') {
//                     tmpTime.push(strPad(this.ss, 2));
//                 }
//             });

//             this.time = tmpTime.join(':');
//             this.picker = 0;

//             this.$emit('input', this.time);
//         }
//     }
// });

// /* Case Unique Components */
// Vue.component('comp-add-project', {
//     template: templateLoader('comp-add-project.html'),
//     props: {
//         a2pInfo: {
//             type: Object,
//             default: () => ({})
//         },
//         days: {
//             type: Object,
//             default: () => ({})
//         },
//         projectList: {
//             type: Array,
//             default: () => []
//         },
//     },
//     data() {
//         return {
//             show: false,
//             projects: [],
//             addTemp: {
//                 'trigger': false,
//                 'project': "",
//                 'days': {},
//                 'schedule': []
//             },
//         };
//     },
//     mounted() {
//         this.projects = deepCopy(this.projectList);
//         this.presetAddTemp();
//     },
//     methods: {
//         adda2p: function() {
//             this.addTemp.trigger = true;
//         },
//         creata2p: function() {
//             const addProject = this.projects.filter(item => item.unique_id == this.addTemp.project)[0];

//             let days = Object.values(this.addTemp.days);
//             let workTotal = 0,
//                 overTotal = 0;

//             days.forEach(item => {
//                 workTotal += item.rely_time ? Number(item.rely_time) : 0;
//                 overTotal += item.over_time_total ? Number(item.over_time_total) : 0;
//             });

//             // 資料彙整
//             let temp = {
//                 year: this.a2pInfo.year,
//                 month: this.a2pInfo.month,
//                 ten_days: this.a2pInfo.ten_days,
//                 days: deepCopy(this.addTemp.days),
//                 project: addProject,
//                 schedule: [],
//                 work_total: workTotal,
//                 over_total: overTotal,
//             };

//             // 設為預設值
//             this.presetAddTemp();

//             if (workTotal != 0 || overTotal != 0) {
//                 // 把新增的案件從可加入案件中移除
//                 this.projects = this.projects.filter(item => item !== addProject);

//                 // 資料新增
//                 this.$emit('adda2p', temp, this.projects);
//             }
//         },
//         presetAddTemp: function () {
//             // 設為預設值
//             this.addTemp = {
//                 'trigger': false,
//                 'project': '',
//                 'days': deepCopy(this.days),
//                 'schedule': []
//             };
//             if (this.addTemp.days.total) {
//                 delete this.addTemp.days.total;
//             }
//         },
//     },
//     watch: {
//         projectList: function (v, oldv) {
//             if (v != oldv) {
//                 this.projects = deepCopy(v);
//             }
//         }
//     }
// });
// Vue.component('comp-add-leave', {
//     template: templateLoader('comp-add-leave.html'),
//     props: {
//         a2pInfo: {
//             type: Object,
//             default: () => ({})
//         },
//         days: {
//             type: Object,
//             default: () => ({})
//         },
//         leaveList: { // 已用假
//             type: Array,
//             default: () => []
//         },
//         holidayList: { // 可用假期
//             type: Array,
//             default: () => []
//         },
//     },
//     data() {
//         return {
//             show: false,
//             holidays: [],
//             addTemp: {
//                 'trigger': false,
//                 'holiday': "",
//                 'days': {},
//             },
//         };
//     },
//     mounted() {
//         this.holidays = deepCopy(this.holidayList);
//         this.presetAddTemp();
//     },
//     methods: {
//         addLeave: function() {
//             this.addTemp.trigger = true;
//         },
//         creatLeave: function() {
//             const addHoliday = this.holidays.filter(item => item.unique_id == this.addTemp.holiday)[0];

//             let days = Object.values(this.addTemp.days);
//             let total = 0;

//             // 時數加總
//             days.forEach(item => {
//                 total += item.whours ? Number(item.whours) : 0;
//             });

//             // 資料彙整
//             let temp = {
//                 data: addHoliday.data,
//                 days: deepCopy(this.addTemp.days),
//                 year: (addHoliday.data.is_universal)? 0 : addHoliday.year,
//                 remain: (addHoliday.data.is_universal)? 0 : addHoliday.remain,
//                 total: total,
//             };

//             // 把新增的案件從可加入案件中移除
//             this.holidays = this.holidays.filter(item => item !== addHoliday);

//             // 設為預設值
//             this.presetAddTemp();

//             // 資料新增
//             this.$emit('add-leave', temp, this.holidays);
//         },
//         presetAddTemp: function() {
//             // 設為預設值
//             this.addTemp = {
//                 'trigger': false,
//                 'holiday': '',
//                 'days': deepCopy(this.days),
//             };
//             delete this.addTemp.days.total;
//         },
//     },
//     watch: {
//         holidaytList: function (v, oldv) {
//             if (v != oldv) {
//                 this.holidays = deepCopy(v);
//             }
//         }
//     }
// });
// Vue.component('comp-over-list', {
//     template: templateLoader('comp-over-list.html'),
//     props: {
//         a2pInfo: {
//             type: Object,
//             default: () => ({})
//         },
//         a2pList: {
//             type: Array,
//             default: () => []
//         },
//         mtList: {
//             type: Array,
//             default: () => []
//         },
//         overList: {
//             type: Array,
//             default: () => []
//         },
//     },
//     data() { return {}; },
//     computed: {}
// });
// Vue.component('comp-a2p-list', {
//     template: templateLoader('comp-a2p-list.html'),
//     props: {
//         a2pInfo: {
//             type: Object,
//             default: () => ({})
//         },
//         a2pList: {
//             type: Array,
//             default: () => []
//         }
//     },
//     data() { return {}; },
//     mounted: function () {
//         console.log(this.a2pList);
//     },
//     computed: {}
// });
