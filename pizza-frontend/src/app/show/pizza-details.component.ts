import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EncrDecrService } from '../services/enc-dec.service';

@Component({
  selector: 'pizza-details',
  templateUrl: 'pizza-details.component.html',
})
export class PizzaDetailsComponent implements OnInit {
  resData:any;
  sts : any;
  id : any;
  data:any;
  constructor(private cc:CommonService,
                private http:HttpClient,
                private activRoute:ActivatedRoute,
                private router:Router,
                private EncrDecr: EncrDecrService){}
  ngOnInit()
     {
        this.id = this.activRoute.snapshot.paramMap.get('id');
        this.id = this.EncrDecr.get('123456$#@$^@1ERF', this.id);
        this.cc.setUrl('/pizza/'+this.id);
        this.cc.get()
        .subscribe((res:any)=>{
            this.resData = res.pListDetails;             
        });
     }
  updateStatus(e,rdata)
     {       
         if(rdata['status'] == 'Received') 
         {
           rdata['status'] = 'Preparing';
         }
        else
         {
           rdata['status'] = 'Ready';
         }
         this.cc.setUrl("/pizza/update");
         this.cc.update(this.id,rdata)
         .subscribe((res:any)=>{
          //  console.log(res);
         });
     }
}


  

 
