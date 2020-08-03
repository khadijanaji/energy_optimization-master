import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({"adapter": new Adapter()});

// eslint-disable-next-line no-console
console.error = (error) => {
  throw new Error(`[console.error detected] We made the test fail because of a console.error
  Here is the error:

  ${error}`);
};
