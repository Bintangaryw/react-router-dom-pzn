import { Link, NavLink, Outlet } from "react-router";
import "./data.css";

export default function DataLayout() {
    return (
        <div>
            <div>
                <p>
                    <ul>
                        <li>
                            <NavLink to="/data/customer">Customer</NavLink>
                        </li>
                        <li>
                            <NavLink to="/data/seller">Seller</NavLink>
                        </li>
                    </ul>
                </p>
            </div>
            <div>
                <h1>
                    <Outlet />
                </h1>
            </div>
            <div>
                <h1>FOOTER</h1>
            </div>
        </div>
    );
}
