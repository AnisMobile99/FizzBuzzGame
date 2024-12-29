/**
 * Formats the FizzBuzz results based on user preference
 * @param {string[]} results - Array of FizzBuzz results
 * @param {string} format - Format type: 'list', 'json'
 * @returns {string} - Formatted output
 */
const formatResults = (results, format = "list") => {
  switch (format) {
    case "json":
      return JSON.stringify(results, null, 2);
    case "list":
      return results.join(", ");
    default:
      throw new Error(`Unsupported format: ${format}`);
  }
};

export default formatResults;
