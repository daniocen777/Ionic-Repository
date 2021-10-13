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
    { icon: 'logo-apple-appstore', name: 'Alert', redirecTo: '/alert' },
    { icon: 'logo-octocat', name: 'Avatar', redirecTo: '/avatar' },
  ];

  constructor() { }

  ngOnInit() {
  }

}

