import { useEffect, useState } from "react";

const WelcomeComponent = () => {
	const [username, setUsername] = useState("");
	const [greeting, setGreeting] = useState("");

	useEffect(() => {
		// Retrieve data from localStorage
		const storedUsername = localStorage.getItem("username");
		const storedGreeting = localStorage.getItem("greeting");

		// Update the state with retrieved data
		setUsername(storedUsername || "Rescuer"); // Set a default value if username is not available
		setGreeting(storedGreeting);

		// Calculate the current greeting based on the time of day
		const currentHour = new Date().getHours();
		let currentGreeting;
		if (currentHour < 12) {
			currentGreeting = "Good Morning Rescuer!";
		} else if (currentHour < 18) {
			currentGreeting = "Good Afternoon Rescuer!";
		} else {
			currentGreeting = "Good Evening Rescuer!";
		}
		setGreeting(currentGreeting);
	}, []);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
			}}
		>
			<h1>{greeting}</h1>
			<p>How are you doing today, {username}?</p>
		</div>
	);
};

export default WelcomeComponent;
