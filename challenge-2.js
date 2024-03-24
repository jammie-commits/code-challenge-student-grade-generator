function calculateDemeritPoints(speed) {
    if (speed < 0) {
      return "Invalid!";
    }
  
    // Calculate the difference between speed and speed limit
    const speedDifference = speed - 70;
  
    // Check speed limit
    if (speedDifference <= 0) {
      return "Ok";
    }
  
    // Output demerit points
    const demeritPoints = speedDifference & -1;

    // license suspension
    if (demeritPoints > 12) {
      return "License suspended";
    }

    return `Points: ${demeritPoints}`;
  }
  
  const speed = parseFloat(prompt("Enter car's speed (km/h): "));
  
  const result = calculateDemeritPoints(speed);
  console.log(result);
  