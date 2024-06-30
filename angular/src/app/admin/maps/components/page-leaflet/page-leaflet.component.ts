import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';

@Component({
    selector: 'sa-page-leaflet',
    templateUrl: './page-leaflet.component.html',
    styleUrls: ['./page-leaflet.component.css']
})
export class PageLeafletComponent implements OnInit {

    options = {
        layers: [
            L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
        ],
        zoom: 5,
        center: L.latLng({ lat: 38.991709, lng: -76.886109 }),
    };
    
    constructor() { }

    ngOnInit() {
    }

}
