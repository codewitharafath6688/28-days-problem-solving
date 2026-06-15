// Problem 6: Smart Salary Calculator

// A company pays employees based on the following rules:

// Basic salary = B
// House rent = 25% of basic salary
// Medical allowance = 15% of basic salary
// Tax = 8% of the total earnings (basic salary + house rent  + medical allowance)
// Bonus = 12% of the total earnings before tax
// Final salary = Total earnings + Bonus − Tax

const employeeReport = (basicSalaryValue) => {
  const basicSalary = basicSalaryValue;
  const houseRent = (basicSalary * 25) / 100;
  const medicalAllowance = (basicSalary * 15) / 100;
  const totalGain = basicSalary + houseRent + medicalAllowance;
  const tax = (totalGain * 8) / 100;
  const bonus = (totalGain * 12) / 100;
  const finalSalary = totalGain + bonus - tax;
  return {
    basicSalary,
    houseRent,
    medicalAllowance,
    totalGain,
    tax,
    bonus,
    finalSalary,
  };
};

const report = employeeReport(45000);

console.log(report);
