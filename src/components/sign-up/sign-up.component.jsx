import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-up.style.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password:'',
    confirmPassword:''
}

const SignUpForm  = () => {

    const [signUpForm, setSignUpForm] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = signUpForm;


    const resetFormFields = () => {
        setSignUpForm(defaultFormFields);
    };

    const handlerChange = (event) => {
        const { name, value } = event.target;
        setSignUpForm({ ...signUpForm, [name]: value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password!== confirmPassword) {
            alert("Password does not match! Check it :)");
            return;
        }
        if (password.length < 6) {
            alert("Password should be greater than six characters"); 
            return;
        }
        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();

        } catch (error) {
            if (error.code === 'auth/email-already-in-use'); {
                alert('Cannot create user as email is already in use');
            }
            console.log('Error while trying to create the user: ', error);
        }
        
    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account? </h2>
            <span>Sign up with your Email and Password</span>
            <form onSubmit={(handleSubmit)}>
                <FormInput  label='Display Name' type='text' required onChange={handlerChange} name='displayName' value={displayName}></FormInput>
                <FormInput label='Email' required name="email" onChange={handlerChange} value={email}></FormInput>
                <FormInput label='Password' type="password" required name="password" onChange={handlerChange} value={password}></FormInput>
                <FormInput label='Confirm Password' type="password" required name="confirmPassword" onChange={handlerChange} value={confirmPassword}></FormInput>
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUpForm;