function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
  
    // PAYE calculation
    let taxablePay = grossSalary - getPersonalRelief();
    let payee = 0;
  
    if (taxablePay <= 24000) {
      payee = taxablePay * 0.1;
    } else if (taxablePay <= 32333) {
      payee = 2400 + (taxablePay - 24000) * 0.25;
    } else if (taxablePay <= 500000) {
      payee = 7833.25 + (taxablePay - 32333) * 0.3;
    } else if (taxablePay <= 800000) {
      payee = 150000 + (taxablePay - 500000) * 0.325;
    } else {
      payee = 280000 + (taxablePay - 800000) * 0.35;
    }
  
    // NHIF deduction
    const nhifDeduction = getNHIFDeduction(grossSalary);
  
    // NSSF deduction 
    const nssfDeduction = getNSSFDeduction(basicSalary, new Date().getMonth());
  
    // Affordable Housing Levy
    const housingLevy = grossSalary * 0.015 * 2; 
  
    // Net Salary calculation
    const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction - housingLevy;
  
    return {
      grossSalary,
      taxablePay,
      payee,
      nhifDeduction,
      nssfDeduction,
      housingLevy,
      netSalary,
    };
  }
  
  // functions for deductions
  function getPersonalRelief() {
    return 2400;
  }
  
  function getNHIFDeduction(grossSalary) {
    if (grossSalary <= 5999) {
      return 150;
    } else if (grossSalary <= 49999) { {
      const tier = Math.floor((grossSalary - 5999) / 10000) + 1;
      return tier * 100;
    } } else {
      return 1700;
    }
  }
  
  function getNSSFDeduction(basicSalary, month) {
    const tier1Limit = month >= 1 ? 7000 : 6000;
    const tier2Limit = month >= 1 ? 36000 : 18000;
  
    if (basicSalary <= tier1Limit) {
      return basicSalary * 0.06;
    } else if (basicSalary <= tier2Limit) {
      return tier1Limit * 0.06 + (basicSalary - tier1Limit) * 0.0;
    } else {
      return tier1Limit * 0.06 + tier2Limit * 0.06;
    }
  }
  
  //outputs
  const salaryData = calculateNetSalary(64657, 75934);
  console.log("Gross Salary:", salaryData.grossSalary);
  console.log("Taxable Pay:", salaryData.taxablePay);
  console.log("PAYE:", salaryData.payee);
  console.log("NHIF Deduction:", salaryData.nhifDeduction);
  console.log("NSSF Deduction:", salaryData.nssfDeduction);
  console.log("Housing Levy:", salaryData.housingLevy);
  console.log("Net Salary:", salaryData.netSalary);
  