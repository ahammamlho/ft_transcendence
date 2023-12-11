import NavBarProtected from "../components/navBar/NavBarProtected";

export default function Layout(prompt: { children: React.ReactNode }) {
  return (

    <NavBarProtected>{prompt.children}</NavBarProtected>

  );
}
