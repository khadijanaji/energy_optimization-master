import appSelector from "../";

const stateUserConnected = {"login": {"infoUser": {"token": "FakeToken"}}};
const stateUserNotConnected = {"login": {"infoUser": {"token": ""}}};

describe("Selector", () => {
  describe("App selector", () => {
    it("User is connected", () => {
      expect(appSelector(stateUserConnected)).toMatchSnapshot();
    });

    it("User is not connected", () => {
      expect(appSelector(stateUserNotConnected)).toMatchSnapshot();
    });
  });
});
