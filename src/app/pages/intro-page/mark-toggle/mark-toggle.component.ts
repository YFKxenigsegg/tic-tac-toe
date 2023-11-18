import { Component, OnInit } from '@angular/core';
import { MarkDefinitions } from 'src/app/models/constants/mark-definitions';
import { Mark } from "../../../models/enums/mark.enum";
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-mark-toggle',
  templateUrl: './mark-toggle.component.html',
  styleUrls: ['./mark-toggle.component.css']
})
export class MarkToggleComponent implements OnInit {
  mark = MarkDefinitions[Mark.NOUGHT];

  constructor(private localService: LocalService) { }

  ngOnInit() {
    this.localService.mark = this.mark;
  }

  onClick() {
    this.localService.mark = !this.mark;
  }
}
