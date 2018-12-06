import{Component,OnInit} from '@angular/core';

export class Food{
    id:number
    name:string
}

@Component({
    selector:'app-residents',
    templateUrl:'./residents.component.html',
    styleUrls:['/residents.component.css']
})

export class ResidentsComponent{

    foods:Food[]=[
        {id:1,name:'Full Name'},
        {id:2,name:'Mobile Number'},
        {id:3,name:'Total Family Member'}
    ]
    ngOnInit() {

        
    }

}