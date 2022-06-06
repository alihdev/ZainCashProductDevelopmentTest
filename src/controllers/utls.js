exports.readDataFromFile = function (file) {
  try {
    if (file) return JSON.parse(file.buffer.toString());
  } catch (err) {}
  return null;
};
