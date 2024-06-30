import { Component, OnInit } from '@angular/core';
import { Lightbox, IAlbum } from 'ngx-lightbox';

@Component({
  selector: 'sa-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

    public results: string = "Web";
    public show_div = true;
    private _albums: Array<IAlbum> = new Array<IAlbum>();

    constructor(private lightbox: Lightbox) {
        for (let i = 1; i <= 15; i++) {
            const src = 'assets/images/image-gallery/' + i + '.jpg';
            const thumb = 'assets/images/image-gallery/' + i + '.jpg';
            const album = {
                src: src,
                thumb: thumb,
                centerVertically:true
            };
            this._albums.push(album);
        }
    }

    ngOnInit() {
    }

    open(album: Array<IAlbum>,index: number): void {
        this.lightbox.open(album, index);
    }

    close(): void {
        this.lightbox.close();
    }

    toggleResults(selection: string) {
        this.results = selection;
        if(selection == 'Images' && this.show_div == false){
            this.show_div = !this.show_div;
        }
    }
    hideDiv() {
        this.show_div = !this.show_div;
    }

}
