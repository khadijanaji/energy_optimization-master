/* eslint-disable no-invalid-this, no-undef, no-unused-vars */
/* globals describe it expect */

import {shallow, mount} from "enzyme";
import React from "react";
import EmailField, {onTextChange, getTextWidth, constructEvent} from "../EmailField";
import {JSDOM} from "jsdom";

const dom = new JSDOM();
global.document = dom.window.document;


const props = {
  "input": {
    "onChange": jest.fn(),
    "value": ""
  },
  "name": "login-email",
  "meta": {
    "active": true,
    "asyncValidating": false,
    "autofilled": false,
    "dirty": false,
    "dispatch": jest.fn(),
    "error": undefined,
    "form": "loginForm",
    "initial": undefined,
    "invalid": false,
    "pristine": true,
    "submitFailed": false,
    "submitting": false,
    "touched": true,
    "valid": true,
    "visited": true,
    "warning": undefined
  }
};

describe("Component", () => {
  describe("EmailField Render", () => {
    it("Initial state", () => {
      const wrapper = shallow(<EmailField {...props} />);
      expect(wrapper).toMatchSnapshot();
    });

    it("mount EmailField", () => {
      const wrapper = mount(<EmailField {...props} />);

      wrapper.setProps({
        "input": {
          "onChange": jest.fn(),
          "value": "newValue"
        }
      });
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe("TextChange Behavior", () => {
    const event = {"target": {"value": "initial-text"}};
    beforeAll(() => {
      const mockPlaceHolder = {"style": {"left": 0}};
      const getElementByIdMock = jest.fn((id) => mockPlaceHolder);
      global.document.getElementById = getElementByIdMock;
    });
    it("Should update placeholder left margin", () => {
      const eventHandler = jest.fn();
      onTextChange(event, eventHandler);
      expect(eventHandler.mock.calls[0][0]).toEqual(event);
    });
    it("Should return 0px is no ruler", () => {
      global.document.getElementById = jest.fn((id) => null);
      const spacing = getTextWidth("text");
      expect(spacing).toEqual("0px");
    });

    it("Should have empty space if text is empty", () => {
      const result = constructEvent("");
      const expected = {"target": {"value": "*********"}};
      expect(result).toEqual(expected);
    });

    it("Should return 0px is no ruler", () => {
      const result = constructEvent("text");
      const expected = {"target": {"value": "text"}};
      expect(result).toEqual(expected);
    });
  });
});
