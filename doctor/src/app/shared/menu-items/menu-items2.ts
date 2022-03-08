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

const MENUITEMS2 = [
  {
    label: 'Item Menus',
    main: [
      {
        state: 'dashboard',
        name: 'Dashboard',
        type: 'sub',
        icon: 'ti-home'
      },
    
      {
        state: 'register',
        name: 'Register',
        type: 'link',
        icon: 'fa fa-plus-circle'
      },
      {
        state: 'patient',
        name: 'Patient',
        type: 'link',
        icon: 'fa fa-plus-circle'
      },
      
      // {
      //   state: 'products',
      //   name: 'Historical',
      //   type: 'link',
      //   icon: 'ti-user'
      // },
      // {
      //   state: 'adminMaster',
      //   name: 'UnRegister Device',
      //   type: 'link',
      //   icon: 'ti-wheelchair'
      // },
    ],
  },
];

@Injectable()
export class MenuItems2 {
  getAll(): Menu[] {
    return MENUITEMS2;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
