import { Component, OnInit } from '@angular/core';

interface CustomComponent {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})


export class InicioPage implements OnInit {
  components: CustomComponent[] = [
    { icon: 'american-football', name: 'Action Sheet', redirecTo: '/action-sheet' },
    { icon: 'apps', name: 'Alert', redirecTo: '/alert' },
  ];

  constructor() { }

  ngOnInit() {
  }

}

