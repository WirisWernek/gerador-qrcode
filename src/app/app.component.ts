import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gerador';
  texto: string = '';
  public qrCodeDownloadLink: SafeUrl = "";

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
}
