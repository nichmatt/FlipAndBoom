export const pause = (duration = 1500) =>
	new Promise((res) => setTimeout(res, duration));
