import {Component, inject} from '@angular/core';
import {IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {ModalController} from '@ionic/angular';


@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton
  ]
})
export class TestModalComponent {

  private modalCtrl = inject(ModalController);

  protected dismiss() {
    this.modalCtrl.dismiss().then();
  }
}
