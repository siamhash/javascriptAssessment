/* eslint-disable camelcase */
const readingService = require('./reading.service');
const { dataValidation } = require('../validation');

const storeReading = async (req, res) => {
  try {
    const { value, created_at, patient_id } = req.body;
    await dataValidation.validateAsync(req.body);
    const data = await readingService.storeReading({ value, created_at, patient_id });
    res.send(data);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  storeReading,
};
