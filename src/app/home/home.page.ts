import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewItemPage } from '../add-new-item/add-new-item.page';
import { UpdateItemPage } from '../update-item/update-item.page';
//import Task from '';

type Task = {
  name?: string,
  date?: Date,
  category?: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  today: number = Date.now();
  tasks: Array<Task> = [];
  //tasks: Task[] = [];

  constructor(public modalCtrl: ModalController) { }

  ngOnInit(): void {
    this.tasks = [
      {
        name: "Naziv zadatka",
        date: new Date(),
        category: 'Low'
      },
      {
        name: "Naziv zadatka 2",
        date: new Date(),
        category: 'High'
      }
    ]
  }

  async goToAddPage() {
    const modal = await this.modalCtrl.create({
      component: AddNewItemPage
    })
    return await modal.present();
  }

  async goToUpdatePage(task: Task) {
    const modal = await this.modalCtrl.create({
      component: UpdateItemPage,
      componentProps: task
    })
    return await modal.present();
  }

}
