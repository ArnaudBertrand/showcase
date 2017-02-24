import {NgModule} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthenticationApi} from '../../../src/services/xhr/authentication.xhr';
import {ViewDirective} from './showcase/directive/view.directive';
import {ShowCase} from './showcase/container/showcase.cont';
import {UiAutocomplete} from './showcase/autocomplete/autocomplete.ui';
import {UiButton} from '../../../src/modules/shared/ui/button/button.ui.common';
import {UiButtonLink} from '../../../src/modules/shared/ui/button-link/button-link.ui';
import {UiButtonSmile} from '../../../src/modules/shared/ui/button/button.ui.smile';
import {UiCaptcha} from '../../../src/modules/shared/components/captcha/captcha.component';
import {UiCheckbox} from '../../../src/modules/shared/ui/checkbox/checkbox.ui.common';
import {UiIcon} from '../../../src/modules/shared/ui/icon/icon.ui';
import {UiInfoIcon} from '../../../src/modules/shared/components/info-icon/info-icon.component';
import {UiInputCard} from '../../../src/modules/shared/components/input-card/input-card.component';
import {UiInputCommon} from '../../../src/modules/shared/ui/input/input.ui.common';
import {UiInputForm} from '../../../src/modules/shared/ui/input-form/input-form.ui';
import {UiInputSmile} from '../../../src/modules/shared/ui/input/input.ui.smile';
import {UiLink} from '../../../src/modules/shared/ui/link/link.ui.common';
import {UiLinkSmile} from '../../../src/modules/shared/ui/link/link.ui.smile';
import {UiMarkdown} from '../../../src/modules/shared/components/markdown/markdown.component';
import {UiSelectSmile} from '../../../src/modules/shared/ui/select/select.ui.smile';
import {UiShortLoading} from '../../../src/modules/shared/components/short-loading/short-loading.component';
import {UiTipPopover} from '../../../src/modules/shared/components/tip-popover/tip-popover.component.common';
import {DescribedByDirective} from '../../../src/modules/shared/directives/described-by/described-by.directive';
import {FocusDirective} from '../../../src/modules/shared/directives/focus/focus';
import {WcagClickDirective} from '../../../src/modules/shared/directives/wcag-click/wcag-click';
import {PresLbConfirmSimple} from '../../../src/modules/lightbox-presenters/presenters/lb-confirm-simple/lb-confirm-simple.component';
import {PresLbContainer} from '../../../src/modules/lightbox-presenters/presenters/lb-container/lb-container.component';
import {PresDropdownLinkList} from '../../../src/modules/shared/presenters/dropdown-link-list/dropdown-link-list.component';
import {PresFootnotes} from '../../../src/modules/shared/presenters/footnotes/footnotes.component';
import {PresHorizontalTabs} from '../../../src/modules/shared/presenters/horizontal-tabs/horizontal-tabs.component';
import {PresLinkList} from '../../../src/modules/shared/presenters/link-list/link-list.component';
import {UiWrapperCheckboxCommon} from '../../../src/modules/shared/ui-wrapper/checkbox/checkbox.ui.common';
import {RangePipe} from '../../../src/modules/shared/pipes/range/range';
import {AppPanelLightbox} from '../mock-apps/panels/lightbox.app';
import {PanelLightbox} from '../../../src/modules/lightbox/containers/lightbox/lightbox.component';
import {LbDatepicker} from '../../../src/modules/datepicker-v2/lightbox/containers/datepicker/datepicker.lb';
import {LbLocationPicker} from '../../../src/modules/location-picker-lightbox/containers/location-picker/location-picker.component';
import {LbLogin} from '../../../src/modules/login-lightbox/containers/login/login.component';
import {LbTimeoutSession} from '../../../src/modules/timeout-lightbox/containers/timeout-session/timeout-session.component';
import {LbTimeoutWarning} from '../../../src/modules/timeout-lightbox/containers/timeout-warning/timeout-warning.component';
import {PresCalendar} from '../../../src/modules/datepicker-v2/lightbox/presenters/calendar/calendar.component';
import {PresMessages} from '../../../src/modules/messages/presenters/messages/messages.component.common';
import {AirportDirectoryListboxComponent} from '../../../src/modules/location-picker-lightbox/presenters/ad-listbox/ad-listbox.component';
import {PresLoginTabMam} from '../../../src/modules/login-lightbox/presenters/login-tab-mam/login-tab-mam.component';
import {PresLoginTabUsername} from '../../../src/modules/login-lightbox/presenters/login-tab-username/login-tab-username.component';
import {PresLoginTabLid} from '../../../src/modules/login-lightbox/presenters/login-tab-lid/login-tab-lid.component';
import {PresCalendarDay} from '../../../src/modules/datepicker-v2/lightbox/presenters/calendar-day/calendar-day.component';
import {PresMessage} from '../../../src/modules/messages/presenters/message/message.component.common';
import {LbBookingClasses} from '../../../src/modules/booking-classes-lightbox/containers/booking-classes.cont';
import {PresBookingClasses} from '../../../src/modules/booking-classes-lightbox/presenters/booking-classes.pres';
import {ContAvailCalendarInfoLightbox} from '../../../src/modules/avail-calendar-info-lightbox/containers/avail-calendar-info-lightbox.cont';
import {PresCashAndMiles} from '../../../src/modules/cash-and-miles-lightbox/presenters/cash-and-miles.pres';

window.clientSideData = require('../../csd/ffpp.json');
(<any>window).csdSource = window.clientSideData;

import '../utils/styles';
import '../utils/state';

const directives = [
  DescribedByDirective,
  FocusDirective,
  WcagClickDirective,
];

const components = [
  AppPanelLightbox,
  AirportDirectoryListboxComponent,
  ContAvailCalendarInfoLightbox,
  LbBookingClasses,
  LbDatepicker,
  LbLocationPicker,
  LbLogin,
  LbTimeoutSession,
  LbTimeoutWarning,
  PanelLightbox,
  PresBookingClasses,
  PresCalendar,
  PresCalendarDay,
  PresCashAndMiles,
  PresDropdownLinkList,
  PresFootnotes,
  PresHorizontalTabs,
  PresLbConfirmSimple,
  PresLbContainer,
  PresLinkList,
  PresLoginTabLid,
  PresLoginTabMam,
  PresLoginTabUsername,
  PresMessage,
  PresMessages,
];

const ui = [
  UiButton,
  UiButtonLink,
  UiButtonSmile,
  UiCaptcha,
  UiCheckbox,
  UiIcon,
  UiInfoIcon,
  UiInputCard,
  UiInputCommon,
  UiInputForm,
  UiInputSmile,
  UiLink,
  UiLinkSmile,
  UiMarkdown,
  UiSelectSmile,
  UiShortLoading,
  UiTipPopover,
];

const uiWrappers = [
  UiWrapperCheckboxCommon,
];

const pipes = [
  RangePipe,
];

const providers = [
  AuthenticationApi,
];

const mock = [
];

const declarations = [
    ...directives,
    ...components,
    ...ui,
    ...uiWrappers,
    ...pipes,
    ...mock,
];

const entryComponents = [
  AppPanelLightbox,
  LbTimeoutSession,
  LbTimeoutWarning,
  PresCashAndMiles,
  UiButton,
  UiLink,
];

@NgModule({
  bootstrap: [ShowCase],
  entryComponents: entryComponents,
  declarations: [
    UiAutocomplete,
    ViewDirective,
    ShowCase,
    ...declarations,
  ],
  imports: [BrowserModule, CommonModule, FormsModule],
  providers: providers,
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
