const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 px-12 border-b border-gray-100">
      <div className="container">RevisionStudy</div>
      <div className="flex items-center gap-4">
        <div className="dropdown">Tools</div>
        <div className="dropdown">Tools</div>
        <div className="profile">P</div>
      </div>
    </header>
  );
};

export default Header;
