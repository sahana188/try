import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { EncrDecrService } from '../services/enc-dec.service';

@Component({
  selector: 'pizza',
  styleUrls: ['pizza.component.css'],
  templateUrl: 'pizza.component.html',
})
export class PizzaComponent implements OnInit {
  pColumns: string[] = ['id', 'name', 'item','total', 'status'];
  dataSource : any;
  EncryptedId:any;
  DecryptedId:any;
  id:any;
  constructor(private cc:CommonService,
              private router:Router,
              private EncrDecr: EncrDecrService){}
   
    ngOnInit()
     {
       //get pizza details from db and rendering to html
        this.cc.setUrl('/pizza');
        this.cc.get()
               .subscribe((res:any)=>{
                this.dataSource = res.pList; 
        });
     }
       //click on row show pizza details
    show(e)
    {
      this.id  = e.target.id;
      this.id = this.EncrDecr.set('123456$#@$^@1ERF',this.id);
      this.router.navigate(['pizza-details/'+this.id]);
    }
}


  

 
