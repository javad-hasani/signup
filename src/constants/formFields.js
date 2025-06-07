const formFields = [
  {
    id: 'name',
    name: 'name',
    label: 'نام و نام خانوادگی',
    type: 'text',
    placeholder: 'نام خود را وارد کنید',
    autoComplete: 'name',
    inputMode: 'text',
    description: 'لطفاً نام و نام خانوادگی خود را به صورت کامل وارد کنید.',
  },
  {
    id: 'email',
    name: 'email',
    label: 'ایمیل',
    type: 'email',
    placeholder: 'example@example.com',
    autoComplete: 'email',
    inputMode: 'email',
    description: 'ایمیل معتبر برای ارتباط با شما استفاده خواهد شد.',
  },
  {
    id: 'password',
    name: 'password',
    label: 'رمز عبور',
    type: 'password',
    placeholder: '••••••••',
    autoComplete: 'new-password',
    inputMode: 'text',
    description: 'رمز عبور باید حداقل ۸ کاراکتر باشد.',
  },
  {
    id: 'confirmPassword',
    name: 'confirmPassword',
    label: 'تکرار رمز عبور',
    type: 'password',
    placeholder: '••••••••',
    autoComplete: 'new-password',
    inputMode: 'text',
    description: 'رمز عبور را مجدداً وارد کنید.',
  },
];

export default formFields;
