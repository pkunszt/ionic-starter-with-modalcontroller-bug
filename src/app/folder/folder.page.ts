import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonModal, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {archive, heart, mail, paperPlane, trash, warning} from 'ionicons/icons';
import {ModalController} from '@ionic/angular';
import {TestModalComponent} from './test-modal/test-modal.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonButton,
    IonContent,
    IonModal,
    TestModalComponent
  ]
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  private modalCtrl = inject(ModalController);
  protected openModal = false;
  constructor() {
    addIcons({mail, paperPlane, heart, archive, trash, warning});
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  protected async openController() {
    const modal = await this.modalCtrl.create({
      component: TestModalComponent
    });
    await modal.present();
  }
}
