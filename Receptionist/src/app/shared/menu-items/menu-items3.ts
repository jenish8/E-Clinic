import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS3 = [
  {
    label: 'IOT Menus',
    main: [
      {
        state: 'dashboard',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'adminMyteam',
        name: 'Summary Data',
        type: 'link',
        icon: 'fa fa-calendar'
      },
      {
        state: 'products',
        name: 'Historical',
        type: 'link',
        icon: 'ti-user'
      },
    ],
  },
];

@Injectable()
export class MenuItems3 {
  getAll(): Menu[] {
    return MENUITEMS3;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
