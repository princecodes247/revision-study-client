const Footer: React.FC = () => {
  return (
    <footer className=" items-center grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))]">
      {[1, 2, 3, 4].map((i) => (
        <ul className="p-6 " key={i}>
          <li>
            <p>Footer</p>
          </li>
        </ul>
      ))}
    </footer>
  );
};

export default Footer;
