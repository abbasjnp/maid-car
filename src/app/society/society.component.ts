import {Component,ViewChild} from '@angular/core';
import{OnInit} from "@angular/core";
import { AdminService } from '../admin.service';
import{MatPaginator,MatTableDataSource} from '@angular/material';
import{Society} from './../society.interface'
import { compileNgModule } from '@angular/core/src/render3/jit/module';

export interface Food {
    id: string;
    name: string;
  }

@Component({
    selector :'app-society',
    templateUrl:'./society.component.html',
    styleUrls:['./society.component.css']
})

export class SocietyComponent{
    
    public society =[];
    public dataSource;
    // public data;
    public soc;


    constructor(private adminService:AdminService){  
        this.adminService.getSociety()
                     .subscribe(data =>{
           // console.log(data);
                          this.society=data;
          //  console.log(this.society);
            //this.dataSource=this.society;
                         this.dataSource = new MatTableDataSource<Society>(this.society);
                         this.dataSource.paginator = this.paginator; 
        
         //  console.log(this.soc);
        });   
     }
     ngOnInit(){
     }
    @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns: string[] = ['id', 'name', 'area', 'city','state','pincode','total_towers'];
    
    
    foods:Food[] = [
        {id:'1',name:'SocietyName'},
        {id:'2',name:'SectorArea'},
        {id:'3',name:'State'}
    ]

}