const Footer = (props) => {
  console.log(props);
  return (
    <p className="footer">
      Made with &nbsp;<span>{props.footerDetails.framework}</span> &nbsp;
      at&nbsp;
      <span>{props.footerDetails.school}</span>&nbsp; by &nbsp;
      <span>{props.footerDetails.developper}</span>
    </p>
  );
};
export default Footer;
