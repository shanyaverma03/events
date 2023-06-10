import MainHeader from "./MainHeader";

const Layout = (props) => {
  return (
    <>
      <MainHeader />
      <main>{props.childeren}</main>
    </>
  );
};

export default Layout;
