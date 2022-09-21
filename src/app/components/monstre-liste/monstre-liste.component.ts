import { Component, Input, OnInit } from '@angular/core';
import { Monstre } from 'src/app/models/monstre';
import { MonstreService } from 'src/app/services/monstre.service';

@Component({
  selector: 'app-monstre-liste',
  templateUrl: './monstre-liste.component.html',
  styleUrls: ['./monstre-liste.component.css']
})
export class MonstreListeComponent implements OnInit {

  @Input('zoneId') zoneId: number = 0;
  monstres: Monstre[] = [];
  constructor(private monsteService: MonstreService) { }

  ngOnInit(): void {
    this.monstres = this.monsteService.getMonstresByZoneId(this.zoneId);
  }

}