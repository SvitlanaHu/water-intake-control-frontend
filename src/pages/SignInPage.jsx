import DocumentTitle from "../components/DocumentTitle/DocumentTitle";
import Logo from "../components/Logo/Logo";

import SignInForm from "../components/SignInForm/SignInForm";

export default function SignInPage() {
  return (
    <div>
      <Logo text="AquaTrack" />
      <DocumentTitle>Sign In</DocumentTitle>
      <SignInForm />
    </div>
  );
}
