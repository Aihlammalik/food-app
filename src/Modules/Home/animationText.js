import React                       from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Want food?",
  "Order now",
  "Delivery free",
  "Your favourite food",
  "On just one Click!"
];

 export default function Animation() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.wobbly }
      />
    </h1>
  );
};