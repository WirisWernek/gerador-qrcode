import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { QRCodeErrorCorrectionLevel } from 'qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  texto = '';
  tam = 400;
  qualidade!: QRCodeErrorCorrectionLevel;
  public qrCodeDownloadLink: SafeUrl = '';

  onChangeURL(url: SafeUrl) {
    this.tam = screen.width >= 450 ? 400 : 330;
    this.qrCodeDownloadLink = url;
  }
}
