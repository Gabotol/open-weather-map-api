import { Route, Routes } from "react-router-dom";

function RoutesWithNotFound({ children }) {
    return (
        <Routes>
            {children}
            <Route path="*" element={<div> {"error 404"}</div>} />
        </Routes>
    );
}
export default RoutesWithNotFound;