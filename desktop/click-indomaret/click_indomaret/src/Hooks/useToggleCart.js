import { useState } from "react";

export default function useToggleCart() {
  const [onCart, setOnCart] = useState(false);

  const togglerCart = () => {
    console.log("TogglerCart called, current state:", onCart, "new state:", !onCart);

    setOnCart((onCart) => !onCart);
  };

  return { onCart, togglerCart };
}