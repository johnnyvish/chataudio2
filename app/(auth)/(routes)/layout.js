const AuthLayout = ({ children }) => {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
