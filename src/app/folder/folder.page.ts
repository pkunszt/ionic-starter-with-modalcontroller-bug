import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TestModalComponent} from './test-modal/test-modal.component';
import {ModalController} from '@ionic/angular';
import {IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonModal, IonTitle, IonToolbar} from '@ionic/angular/standalone';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonButton,
    IonModal,
    TestModalComponent
  ]
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  private modalCtrl = inject(ModalController);
  protected openModal = false;

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  protected async openUsingController() {
    const modal = await this.modalCtrl.create({
      component: TestModalComponent
    });
    await modal.present();
  }
}
