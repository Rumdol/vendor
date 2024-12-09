import LoginForm from '../components/loginForm';
const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm />
      <ForgotPassword/>
    </div>
  );
};

export default LoginPage;
