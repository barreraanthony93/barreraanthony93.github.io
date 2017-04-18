import { Component } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public modalCtrl: ModalController) { }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

    slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];
}

@Component({
  templateUrl: 'modal-content.html'
})
export class ModalContentPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Bienvenido',
        quote: 'Gracias por visitar nuestra página. Esperamos que mientras esté aquí usted entienda un poco sobre quiénes somos, lo que hacemos y como involucrarse. El objetivo de la Iglesia de Cristo en Elgin es simple - queremos honrar y glorificar a Dios en todo lo que hacemos, así como dejar que la luz de Jesús brille a través de nosotros al vivir el evangelio. Le invitamos a estudiar, aprender y crecer junto con nosotros al glorificar a Dios en todas las cosas. ¡Dios siempre es Bueno!',
        image: 'assets/img/avatar-gollum.jpg'
      },
      {
        name: 'Acerca',
        quote: 'Aquellos de nosotros que componemos la familia de la Iglesia de Cristo hacemos todo lo posible para hacer más como el Señor Jesús Cristo. Queremos reflejar Su luz a nuestra comunidad y el mundo. Somos cometidos a Su Palabra para que nos diriga en todo que hacemos incluso nuestra adoración, nuestras relaciones y como vivimos nuestras vidas cada día. Nuestro objetivo es vivir lo que creemos, la iglesia no se trata de nosotros, sino de Él.',
        image: 'assets/img/avatar-frodo.jpg'
      },
      {
        name: 'Ministro',
        quote: 'El objetivo de nuestro predicador es asegurarnos de que la Palabra de Dios sea enseñada consistentemente en nuestras clases bíblicas así como en nuestros tiempos de adoración. Pasa tiempo asegurandose que el cuerpo de Cristo llegue a su potencial maximo para sequir mejorando para el Padre celestial. Tiene una profunda pasión en enseñar la Palabra de Dios y fortalecer a nuestros miembros. Esta listo para servir en cualquier momento necesario. ',
        image: 'assets/img/avatar-samwise.jpg'
      },
      {
        name: 'Educacion',
        quote: 'La educación es de gran importancia en la Iglesia de Cristo en Elgin, Queremos saber lo que El quiere que sepamos en cuanto a Su Voluntad, sus caminos y pensamientos. ¡Así, procuramos saber Su Palabra! Venga y sea parte de las clases de todas las edades donde el Señor le ayudará a crecer y encaminarlo en un camino espiritual con Dios.',
        image: 'assets/img/avatar-samwise.jpg'
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

 

  dismiss() {
    this.viewCtrl.dismiss();
  }
}