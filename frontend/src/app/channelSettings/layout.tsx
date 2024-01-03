import NavBarProtected from '../components/navBar/NavBarProtected';

export default function Layout(prompt: { children: React.ReactNode }) {
  return <NavBarProtected>{prompt.children}</NavBarProtected>;
  // <div className="h-screen bg-color-main">{prompt.children}</div>;
}
