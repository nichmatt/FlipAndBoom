import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUserProfile } from "../actionCreators";

export default function SuperBaseLayout() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUserProfile());
	}, []);

	return (
		<>
			<Outlet />
		</>
	);
}
