/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/* eslint-disable consistent-return */

const { Data } = require('../data/reading');

const alreadyExist = async ({ created_at }) => {
  const data = Data;
  const val = [];
  for (const element of data) {
    val.push(element.created_at);
  }
  return val.includes(created_at);
};

const percpaverage = async () => {
  const data = Data;
  const val = [];
  for (const element of data) {
    val.push(element.value);
  }
  const avg = ((val.reduce((a, b) => a + b, 0)) / val.length) * (10 / 100);
  return avg;
};
const storeReading = async ({ value, created_at, patient_id }) => {
  const data = Data;
  const avg = await percpaverage();
  const exi = await alreadyExist(created_at);
  if ((exi === false) && (value > avg)) {
    const reading = {
      value, created_at, patient_id, flag: 1,
    };
    data.push(reading);
    return data;
  } if ((exi === false) && (value <= avg)) {
    const reading = {
      value, created_at, patient_id, flag: 0,
    };
    data.push(reading);
    return data;
  }
  return 'Data already exist';
};

module.exports = {
  storeReading,
};
