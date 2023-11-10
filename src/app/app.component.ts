import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  texto = '';
  public qrCodeDownloadLink: SafeUrl = '';

  tam = 400;

  onChangeURL(url: SafeUrl) {
    this.tam = screen.width >= 450 ? 400 : 330;
    this.qrCodeDownloadLink = url;
  }
}
