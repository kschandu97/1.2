import {Component, Input, EventEmitter, Output} from '@angular/core';


@Component({
    selector:'add-comp',
    templateUrl:'app.addemployee.html'
})
export class AddEmployeeComponent{

    empId:any;
    empName:string;
    empSalary:any;
    empDep:string;
    
   
    empAll:any[]=[

    ];
    
    addEmployee():any{
      
        this.empAll.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDep:this.empDep})
        alert(" "+this.empId+" "+this.empName+" "+this.empSalary+" "+this.empDep)
        console.log("Employee Added...."+this.empAll);
        this.empId="";
        this.empName="";
        this.empSalary="";
        this.empDep="";
        
    }
    
}