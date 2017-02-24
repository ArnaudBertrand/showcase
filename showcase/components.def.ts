import {Component} from '@angular/core';
import {UiButton} from '../../../../src/modules/shared/ui/button/button.ui.common';
import {UiLink} from '../../../../src/modules/shared/ui/link/link.ui.common';
import {AppPanelLightbox} from '../../mock-apps/panels/lightbox.app';
import {LbTimeoutSession} from '../../../../src/modules/timeout-lightbox/containers/timeout-session/timeout-session.component';
import {LbTimeoutWarning} from '../../../../src/modules/timeout-lightbox/containers/timeout-warning/timeout-warning.component';
import {PresCashAndMiles} from '../../../../src/modules/cash-and-miles-lightbox/presenters/cash-and-miles.pres';


export interface IComponent {
  id: string;
  description: string;
  component: Component;
  params: (string | any)[][];
}

export const components = [
  {
    id: 'Button',
    description: 'This is a common button',
    component: UiButton,
    params: [
      ['disabled', false],
      ['icon', 'booking'],
      ['iconPosition', 'right'],
      ['isIconfont', true],
      ['isSmileIcon', true],
      ['label', 'This is a button'],
      ['id', ''],
    ],
  },
  {
    id: 'PresCashAndMiles',
    description: 'Cash and miles popup message',
    component: PresCashAndMiles,
    params: [],
  },
  {
    id: 'Link',
    description: 'This is a common link',
    component: UiLink,
    params: [
      ['ariaLabel', ''],
      ['disabled', false],
      ['focusAfterInit', false],
      ['icon', 'booking'],
      ['iconPosition', 'left'],
      ['isIconfont', true],
      ['isSmileIcon', true],
      ['openNewTab', false],
      ['label', 'This is a link'],
      ['url', ''],
      ['id', ''],
    ],
  },
  {
    id: 'Login lightbox',
    description: 'By clicking on the button you will display the login lightbox',
    component: AppPanelLightbox,
    params: [],
  },
  {
    id: 'Session timeout message lightbox',
    description: 'Session timeout message popup',
    component: LbTimeoutSession,
    params: [],
  },
  {
    id: 'Session timeout warning lightbox',
    description: 'Session timeout warning message popup',
    component: LbTimeoutWarning,
    params: [],
  },
];
