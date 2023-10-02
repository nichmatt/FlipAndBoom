import LoadingScreen from "../components/LoadingScreen";
import NavigationBar from "../components/Navigation";
import SIdeBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile, setMusicSetting } from "../actionCreators";
import { useEffect, useState } from "react";
import ErrorModal from "../components/ErrorModal";
import MessageModal from "../components/MessageModal";
import CompatibleScreen from "../components/CompatibleScreen";

export default function BaseLayout() {
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.userReducer);
	const { music } = useSelector((state) => state.settingReducer);
	const { error, message } = useSelector((state) => state.messageReducer);

	const [winWidth, setWinWidth] = useState(1001);
	const [canPlay, setCanPlay] = useState(true);
	useEffect(() => {
		dispatch(fetchUserProfile());
		dispatch(setMusicSetting(true));
	}, []);

	window.onresize = function () {
		setWinWidth(window.innerWidth);
	};
	useEffect(() => {
		if (winWidth < 1000) {
			setCanPlay(false);
		} else {
			setCanPlay(true);
		}
	}, [winWidth]);
	return (
		<>
			{!canPlay && <CompatibleScreen />}

			<NavigationBar />
			<div
				className="flex min-h-screen"
				style={{
					background:
						"linear-gradient(180deg, #251D3A 0%, #323569 99.99%, rgba(37, 29, 58, 0.00) 100%)",
				}}
			>
				<SIdeBar />
				<Outlet />
				{loading ? <LoadingScreen /> : ""}
				{error ? <ErrorModal message={error} /> : ""}
				{message ? <MessageModal message={message} /> : ""}

				{music ? (
					<audio loop autoPlay src="/assets/audio/lobby_BGM.mp3">
						<source src="/assets/audio/lobby_BGM.mp3" type="audio/mp3"></source>
					</audio>
				) : (
					<audio loop autoPlay muted src="">
						<source src="" type="audio/mp3"></source>
					</audio>
				)}
			</div>
		</>
	);
}
