
import { useContext } from "react";
import React from "react";
import { Text, View } from "react-native";

import LiftCarousel from "../../components/ui/LiftCarousel";

import { ScreenStyle } from "../../constants/styles";
import { LiftChart } from "../../components/ui/LiftHistory/LiftChart";
import { useFocusEffect } from "@react-navigation/native";
import { UserStatsContext } from "../../components/firestore/UserStatsProvider";
import { AuthContext } from "../../components/auth/AuthProvider";

function LiftGraphScreen() {
	const { fetchAllLifts, allLifts, liftsAdded} = useContext(UserStatsContext);
	const { user } = useContext(AuthContext);

	useFocusEffect(
		React.useCallback(() => {
			fetchAllLifts(user.uid);
		}, [user.uid])
	);

	return (
		<View style={ScreenStyle.rootContainer}>
			<Text style={ScreenStyle.title}>grphs!</Text>
			<Text style={ScreenStyle.welcomeText}> </Text>
			<LiftCarousel liftsData={allLifts || []}>
				{(lifts) => (
					<>
						<LiftChart lifts={lifts} chartType="squat"/>
						<LiftChart lifts={lifts} chartType="deadlift"/>
						<LiftChart lifts={lifts} chartType="bench" />
					</>
				)}
			</LiftCarousel>
		</View>
	);
}

export default LiftGraphScreen;
