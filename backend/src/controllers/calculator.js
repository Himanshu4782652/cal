exports.calculateSavings = (req, res) => {
 const { applianceType, standardUsage, efficientUsage, frequency, costPerLiter } = req.body;

 if (!standardUsage || !efficientUsage || !frequency) {
  return res.status(400).json({ error: "Please provide all required inputs" });
 }

 const waterSavings = (standardUsage - efficientUsage) * frequency;
 const monetarySavings = costPerLiter ? waterSavings * costPerLiter : 0;

 res.json({
  applianceType,
  waterSavings,
  monetarySavings,
 });
};
