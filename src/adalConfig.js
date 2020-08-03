/* eslint-disable no-process-env, no-undef, quote-props, comma-dangle*/
import {AuthenticationContext, withAdalLogin} from "reactjs-adal-adfs";

const CLIENT_ID =
  process.env.REACT_APP_ADFS_CLIENT_ID ||
  "58230c80-9add-44f3-ab09-b2fc2e602c22";
const INSTANCE =
  process.env.REACT_APP_ADFS_INSTANCE || "https://sts.ocpgroup.ma/";
const POST_URI =
  process.env.REACT_APP_ADFS_POST_URI || "http://localhost:9000/";
const REDIRECT_URI =
  process.env.REACT_APP_ADFS_REDIRECT_URI || "http://localhost:9000/";

export const adalConfig = {
  tenant: "adfs",
  clientId: CLIENT_ID,
  endpoints: {api: CLIENT_ID},
  instance: INSTANCE,
  postLogoutRedirectUri: POST_URI,
  redirectUri: REDIRECT_URI,
  cacheLocation: "localStorage",
  isFormPostResponseMode: false,
};

export const authContext = new AuthenticationContext(adalConfig);

export const withAdalLoginApi = withAdalLogin(
  authContext,
  adalConfig.endpoints.api,
);

export const logout = () => authContext.logOut();

const user = authContext.getCachedUser();
let name = "";
if (user) {
  const email = user.userName.split(".").join(" ");
  name = email.substr(0, email.indexOf("@")).toUpperCase();
}

export const userName = name;
