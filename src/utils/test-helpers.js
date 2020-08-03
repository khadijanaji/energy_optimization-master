import React from "react";
import {addLocaleData, IntlProvider, intlShape} from "react-intl";
import {mount, shallow} from "enzyme";
import fr from "react-intl/locale-data/fr";


addLocaleData(fr);
// Create the IntlProvider to retrieve context for wrapping around.

const intlProvider = new IntlProvider({"locale": "fr"}, {});

const {intl} = intlProvider.getChildContext();

export const nodeWithIntlProp = (node) => React.cloneElement(node, {intl});

export const shallowWithIntl = (node) => shallow(nodeWithIntlProp(node), {"context": {intl}});

export const mountWithIntl = (node) => mount(nodeWithIntlProp(node), {
  "context": {intl},
  "childContextTypes": {"intl": intlShape}
});

export const fakeStoreMaker = (state) => ({
  "default": jest.fn(),
  "subscribe": jest.fn(),
  "dispatch": jest.fn(),
  "getState": jest.fn(() => (state))
});
