import DocumentTitle from "../components/DocumentTitle/DocumentTitle";
import Logo from "../components/Logo/Logo";
import SignUpForm from "../components/SignUpForm/SignUpForm";

export default function SignUpPage() {
  return (
    <div>
      <Logo text="AquaTrack" />
      <DocumentTitle>Sign Up</DocumentTitle>
      <SignUpForm />
    </div>
  );
}
