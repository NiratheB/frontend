import {Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import * as THREE from 'three';
import {Shape} from '../model';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  @Input() shape: Shape;
  renderer = new THREE.WebGLRenderer();
  scene = null;
  camera = null;
  object = null;
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    this.renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    this.renderer.domElement.style.display = 'block';
    this.renderer.domElement.style.margin = 'auto';
    document.body.firstElementChild.before(this.renderer.domElement);
    this.camera.position.z = 5;

    const geometry = this.get_shape(this.shape);
    const material = this.get_material(this.shape);
    this.object = new THREE.Mesh(geometry, material);
    this.scene.add(this.object);
    this.animate();
    }

  ngOnInit(): void {
  }

  get_shape(shape: Shape): THREE.SphereGeometry {
    // tslint:disable-next-line:triple-equals
    if (shape != undefined) {
      // tslint:disable-next-line:triple-equals
      if (shape.type == 1) {
        return new THREE.SphereGeometry(shape.attributes.radius, 8, 8);
      } else {
        return new THREE.SphereGeometry(1, 8, 8);
      }
    }
    return new THREE.SphereGeometry(1, 8, 8);
  }
  get_material(shape: Shape): THREE.MeshBasicMaterial{
    // tslint:disable-next-line:triple-equals
    let color = 'ffffff';
    if (shape !== undefined) {
      color = shape.color;
    }
    else{
      console.log('Shape not there');
    }
    return new THREE.MeshBasicMaterial({color: parseInt(color, 16)});
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes');
    console.log(this.shape.attributes.radius);
    this.scene = new THREE.Scene();
    const geometry = this.get_shape(this.shape);
    const material = this.get_material(this.shape);
    this.object = new THREE.Mesh(geometry, material);
    this.scene.add(this.object);
  }

  private animate() {
    window.requestAnimationFrame(() => this.animate());
    this.object.rotation.x += 0.05;
    this.object.rotation.y += 0.05;
    this.renderer.render(this.scene, this.camera);
  }
}

