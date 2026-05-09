
// instantiate the hours_worked by the freelancer

const HOURS_WORKED = 8

// day rate given an hourly rate
export function dayRate(ratePerHour) {
  return (HOURS_WORKED * ratePerHour);
}

// number of workdays given a fixed budget
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget/(dayRate(ratePerHour)));
}

// discounted rate for large projects
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {

  //instantiate the work days that are billed in a month and days left
  const billableWorkDaysInAMonth = 22;
  let daysLeft = numDays % billableWorkDaysInAMonth;

  //get the number of full months from billed work days and use floor()
  let fullMonthCount = Math.floor(numDays/billableWorkDaysInAMonth)

  //get the pay for the billable months
  let payForABillableMonth = billableWorkDaysInAMonth * fullMonthCount * dayRate(ratePerHour)

  //get the discounted price for a month (discount is already divided by 100)
  let discountedPay = payForABillableMonth - ((discount) * payForABillableMonth)

  //get the rate for large projects
  let discountedRateForLargeProjects = discountedPay + (dayRate(ratePerHour) * daysLeft)

  return Math.ceil(discountedRateForLargeProjects)
  
}


