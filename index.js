// Code your solution in this file!

function logDriverNames(drivers) {
  return drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  return drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  });
}

function driversByRevenue(drivers) {
  const driversCopy = [...drivers];
  return driversCopy.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  const driversCopy = [...drivers];
  return driversCopy.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  let totalRevnue = 0;

  drivers.forEach(function(driver) {
    totalRevnue += driver.revenue;
  });

  return totalRevnue;
}

function averageRevenue(drivers) {
  let totalRevnue = 0;

  drivers.forEach(function(driver) {
    totalRevnue += driver.revenue;
  });

  return totalRevnue / drivers.length;
}


// const revs = [];
//
// drivers.forEach(function(driver) {
//   revs.push(driver.revenue);
// });
//
// revs
