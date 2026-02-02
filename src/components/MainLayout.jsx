const MainLayout = ({ children }) => {
  return (
    <div className="mx-auto min-h-screen max-w-300 px-4.25 py-5.25 md:py-10">
      {children}
    </div>
  );
};

export default MainLayout;
