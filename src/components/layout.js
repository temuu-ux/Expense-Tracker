import Header from "./Header";
export default function Layout({ children }) {
  return (
    <div className=" m-auto">
      <Header />
      <main>{children}</main>
    </div>
  );
}
