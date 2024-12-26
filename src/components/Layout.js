import { useSelector, useDispatch } from "react-redux";
//import { toggleThemeMode }  from "../store/slices/themeSlice";

export default function Layout() {
    const themeMode = useSelector((state) => state.theme);
    console.log(themeMode);
    const dispatch = useDispatch();
}