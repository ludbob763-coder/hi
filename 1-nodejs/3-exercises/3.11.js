for (let boxWeight = 20; boxWeight <= 25; boxWeight++) {
  if (boxWeight == 23) {
    console.log(
      "Kritisk vikt uppnådd vid 23 kg! Packningen avbryts för fordonssäkerhet.",
    );
    break;
  }
  console.log("Lådan har lastats.");
}
