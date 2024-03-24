function calculateGrade(marks) {
    // Validate input
    if (marks < 0 || marks > 100) {
      return "Invalid marks. Please enter a number between 0 and 100.";
    }
  
    // Determine grade based on marks
    if (marks >= 80) {
      return "A";
    } else if (marks >= 60) {
      return "B";
    } else if (marks >= 49) {
      return "C";
    } else if (marks >= 40) {
      return "D";
    } else {
      return "E";
    }
  }
  // Get marks from user
  const marks = parseInt(prompt("Enter student's marks (0-100): "));
  
  // Calculate and display grad<script src=""></script>e
  const grade = calculateGrade(marks);
  console.log(grade);
  