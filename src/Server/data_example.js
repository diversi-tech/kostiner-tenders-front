import { action, computed, makeObservable, observable, runInAction } from 'mobx';


class Data {
    list = [];
   
    constructor() {
        makeObservable(this, {
            list: observable,
            init: action,
            getService: computed
           
        }),
            this.init();
    }

    async init() {
        try {
            // json שרת דמו של 
            const res = await fetch('https://jsonplaceholder.typicode.com/todos').then()
            const data = await res.json();
            // fetch('https://jsonplaceholder.typicode.com/todos')
            // .then(response => response.json())
            // .then(this.list=response)


            runInAction(() => {
                //const _ = require('lodash');

               
                //this.list= JSON.parse(JSON.stringify(data));
                //for(var i=0;i<data.length;i++)
                this.list = [...data]
                        //_.cloneDeep(originalArray);

                        // newArray[0].a = 99;
                        // console.log(originalArray[0].a); // 1, האובייקט המקורי לא השתנה

                        //  = [...data]; 
                        
                        //this.list={...this.list} 
                console.log("data", data);  
                console.log("list",this.list);        
            });
           
        }
        catch (err) {
            console.error(err)
        }

    }

    get getService() {
        return this.list
    }


}
const singleton = new Data();
export default singleton;

