

export default function Layout(prompt: { children: React.ReactNode }) {
    return (
        <div className="h-screen bg-color-main"
        >{prompt.children}
        </div>
    );
}
