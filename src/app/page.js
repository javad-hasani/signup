"use client";
import { useForm } from '../hooks/useForm';
import FormContainer from '../components/FormContainer';
import DividerWithText from '../components/DividerWithText';
import GoogleButton from '../components/GoogleButton';
import FormFields from '../components/FormFields';
import SubmitButton from '../components/SubmitButton';
import HaveAccountLink from '../components/HaveAccountLink';
import formFields from '../constants/formFields';
import validateForm from '../constants/validateForm';
import { signInWithGoogle } from '../utils/auth';
import { FcGoogle } from 'react-icons/fc';

export default function Home() {
  const {
    formData,
    errors,
    message,
    handleChange,
    handleSubmit
  } = useForm(
    { name: '', email: '', password: '', confirmPassword: '' },
    validateForm
  );

  return (
    <>
      <div dir="rtl" className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900 px-2 sm:px-4">
        <FormContainer title="سامانه ثبت نام" subtitle="حساب خود را ایجاد کنید">
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormFields fields={formFields} values={formData} errors={errors} onChange={handleChange} />
            <SubmitButton>ثبت نام</SubmitButton>
          </form>
          <DividerWithText text="یا" />
          <GoogleButton onClick={signInWithGoogle} icon={<FcGoogle className="w-5 h-5" />} />
          <HaveAccountLink />
        </FormContainer>
      </div>
    </>
  );
}