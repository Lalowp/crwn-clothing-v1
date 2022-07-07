import SignUpForm from "../../components/sign-up/sign-up.component";
import SignInForm from "../../components/sign-in/sign-in.component";
import './authentication.styles.scss';

const Authentication = () => {
    return (
    <div className="authentication-container">
        <SignInForm></SignInForm>
        <SignUpForm></SignUpForm>
    </div>  
    ); 
};

export default Authentication;