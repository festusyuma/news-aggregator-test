import { Outlet } from "react-router";

export default function Layout() {
    return (
        <div className={"px-7 flex flex-col h-screen"}>
            <div className={"py-3 flex border-b"}>
                <p>The News Center</p>
                <div className={"ml-auto"}>
                    <input name={"search"} />
                </div>
            </div>
            <main className={"py-3 h-full"}>
                <Outlet />
            </main>
        </div>
    );
}