import { Component, OnInit } from '@angular/core';
import { SrviceService } from '../../services/srvice.service';
import { log } from 'util';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {
  public myJsonData = [];
  keysArr = [];

  constructor(private jasnDataServic: SrviceService) {
    // this.keys()
  }

  ngOnInit(): void {
    this.jasnDataServic.getJsonData().subscribe((data) => {
      this.myJsonData = data;
      this.keysArr = Object.keys(this.myJsonData[0]);
    });
  }
}
