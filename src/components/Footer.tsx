const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-white text-center">
      <div className="container">
        <span>
          Copyright &copy; <span id="year">{new Date().getFullYear()}</span> <a href="#" className="text-primary">Nowa</a>.
          Designed with <span className="bi bi-heart-fill text-danger"></span> by <a href="#"><span className="fw-semibold text-decoration-underline">Spruko</span></a> All rights reserved
        </span>
      </div>
    </footer>
  );
};
export default Footer;
