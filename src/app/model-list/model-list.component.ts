import { Component, OnInit } from '@angular/core';
import {Model, Shape} from '../model';
import {ModelService} from '../model.service';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit {
  models: Model;
  selectedShape: Shape;
  constructor(private modelservice: ModelService) { }

  getModels(): void {
    this.modelservice.getModels().subscribe(models => this.models = models);
  }
  ngOnInit(): void {
    this.getModels();
  }

  onSelectSphere(shape: Shape): void{
    this.selectedShape = shape;
  }

}
