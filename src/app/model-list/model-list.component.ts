import { Component, OnInit } from '@angular/core';
import {Model} from '../model';
import {ModelService} from '../model.service';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit {
  models: Model;
  constructor(private modelservice: ModelService) { }

  getModels(): void {
    this.modelservice.getModels().subscribe(models => this.models = models);
  }
  ngOnInit(): void {
    this.getModels();
  }

}
