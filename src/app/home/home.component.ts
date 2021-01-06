import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public api: ApiService,
    public modal: NgbModal
  ) { }

  page: number = 1;
  apiData: any = null;
  searchText = '';

  idContact: number = 0;
  titleContact: string = "";
  completedContact: boolean;


  // Funcion que llama los datos del api 
  getServiceData() {

    this.api.getData().subscribe(data => {
      this.apiData = data;
      console.log("ApiData: ", this.apiData);
    });

  }

  openModal(id: number,title:string, completed:boolean, content:any){
    this.modal.open(content);
    this.idContact = id;
    this.titleContact = title;
    this.completedContact = completed;
  }
  
  ngOnInit() {
    this.getServiceData();
  }

}
