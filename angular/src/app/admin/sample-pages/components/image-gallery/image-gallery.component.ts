import { Component, OnInit } from '@angular/core';
import { Lightbox, IAlbum } from 'ngx-lightbox';

@Component({
    selector: 'sa-image-gallery',
    templateUrl: './image-gallery.component.html',
    styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

    public _albums: Array<IAlbum> = new Array<IAlbum>();

    constructor(private lightbox: Lightbox) {
        for (let i = 1; i <= 15; i++) {
            const src = 'assets/images/image-gallery/' + i + '.jpg';
            const thumb = 'assets/images/image-gallery/' + i + '.jpg';
            const album = {
                src: src,
                thumb: thumb,
                centerVertically: true
            };
            this._albums.push(album);
        }
    }

    ngOnInit() {
    }
    open(album: Array<IAlbum>, index: number): void {
        // open lightbox
        this.lightbox.open(album, index);
    }

    close(): void {
        // close lightbox programmatically
        this.lightbox.close();
    }
}
