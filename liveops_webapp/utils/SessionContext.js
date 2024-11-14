"use client";

import { createContext, useContext, useState, useEffect } from "react";

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
	const [sessionData, setSessionData] = useState(() => {
		// Initialize from sessionStorage if available
		if (typeof window !== "undefined") {
			const savedData = sessionStorage.getItem("sessionData");
			return savedData ? JSON.parse(savedData) : {};
		}
		return {};
	});

	useEffect(() => {
		// Save to sessionStorage whenever sessionData changes
		sessionStorage.setItem("sessionData", JSON.stringify(sessionData));
	}, [sessionData]);

	return (
		<SessionContext.Provider value={{ sessionData, setSessionData }}>
			{children}
		</SessionContext.Provider>
	);
};

export const useSession = () => useContext(SessionContext);
