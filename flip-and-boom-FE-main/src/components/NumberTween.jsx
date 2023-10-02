import React, { useEffect, useState } from "react";
import { TweenLite } from "gsap";

const myObject = {
	totalValue: 0,
};

export default function NumberTween(props) {
	const [total, setTotal] = useState(props.number);

	useEffect(() => {
		TweenLite.to(myObject, 1, {
			totalValue: props.number,
			roundProps: "totalValue",
			onUpdate: () => {
				setTotal(myObject.totalValue);
			},
		});
	}, [props.number]);

	return <>{total}</>;
}
