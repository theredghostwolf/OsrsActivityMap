export class sortableList  {

    list = new Array();
    sortedField = "";
    direction = 'desc';

    constructor (list: Array<any>) {
        this.list = list || new Array();
    }

    setSortedField(field: string) : void {
        this.sortedField = field;
        if (this.direction == "desc") {
            this.direction = "asc";
        } else {
            this.direction = "desc";
        }
        this.sort(); 
    }

    setList(l: Array<any>): void {
        this.list = l;
    }

    sort(): void {
        console.log("sortinglist");
        this.list.sort((a,b) => {
            if (this.sortedField || this.sortedField != "") {
                if (a[this.sortedField] > b[this.sortedField]) {
                    if (this.direction == 'desc') {
                        return 1;
                    } else {
                        return -1;
                    }
                }
                
                if (a[this.sortedField] < b[this.sortedField]) {
                    if (this.direction == 'desc') {
                        return -1;
                    } else {
                        return 1;
                    }
                }
            }
            
            return 0;
        })
    }

    

}