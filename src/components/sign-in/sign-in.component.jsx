import { useState } from "react";
import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils';
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import './sign-in.style.scss';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm  = () => {

    const [signInForm, setSignInForm] = useState(defaultFormFields);
    const { email, password } = signInForm;


    const resetFormFields = () => {
        setSignInForm(defaultFormFields);
    };

    const signInWithGoogle = async() => {
        await signInWithGooglePopup();
    };

    const handlerChange = (event) => {
        const { name, value } = event.target;
        setSignInForm({ ...signInForm, [name]: value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {

            switch(error.code) {
                case 'auth/wrong-password':
                    alert("Incorrect password for email");
                break;
                
                case 'auth/user-not-found':
                    alert("User is not registered");
                break;

                default:
                    console.log(error);
            }
        }
    };

    return (
        <div className="sign-up-container">
            <h2>Already have an account? </h2>
            <span>Sign in with your Email and Password</span>
            <form onSubmit={(handleSubmit)}>
                <FormInput label='Email' required name="email" onChange={handlerChange} value={email}></FormInput>
                <FormInput label='Password' type="password" required name="password" onChange={handlerChange} value={password}></FormInput>
                <div className="buttons-container">
                    <Button type='submit'>Sign In</Button>
                    <Button buttonType={BUTTON_TYPES_CLASSES.google} onClick={signInWithGoogle} type='button' >Google Sign In</Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;