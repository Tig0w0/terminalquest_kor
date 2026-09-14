const assert = require("assert");
const isEqual = require("lodash.isequal");
const assertTestCase = (fn) => (input, expected) => {
  const result = fn(input);
  const message = `<div style="text-align:left;overflow: scroll;"><span class="highlight">예상 결과</span><pre>${JSON.stringify(expected, undefined, 2)}</pre></pre><span class="highlight">실제 결과</span><pre>${JSON.stringify(result, undefined, 2)}</pre></div>`;
  if (!isEqual(result, expected)) throw new Error(message);
};
module.exports = async function (helper) {
  try {
    const context = await helper.pullVarsFromQuestIdeUserCodeLocalScope(["findLongestDiagnosticUrl"], "03-debugging-3");
    assert(context.findLongestDiagnosticUrl, "findLongestDiagnosticUrl 함수가 정의되지 않았습니다!");
    const test = assertTestCase(context.findLongestDiagnosticUrl);
    test([
      { id: 623, label: "Reservoir-2A-East-Wing", radiation: { radsCountCurrent: "190", monitorSystemGuid: "8453b2e7-0cf3-43fa-8909-cab00f75d413" }, type: "raw", contents: 83 },
      { id: 21, label: "Reservoir-2B-East-Wing%50", type: "distilled", contents: 120 },
      { id: 617, label: "Reservoir-3F-North-Wing%75", radiation: { radsCountCurrent: "39", monitorSystemGuid: "bf0b28be-ae90-406a-8f90-c556b0056f2e" }, type: "raw", contents: 100 },
      { id: 100, label: "Reservoir-3G-North-Wing%50", radiation: { radsCountCurrent: "712", monitorSystemGuid: "e1e73107-f0ad-495d-a11c-e730543f1ad5" }, type: "raw", contents: 98 },
    ], "https://www.twilio.com/quest/ducktypium-diagnostics?label=Reservoir-3F-North-Wing%2575&id=617&type=raw&contents=100&rads=39&guid=bf0b28be-ae90-406a-8f90-c556b0056f2e");
  } catch (err) { helper.fail(err); return; }
  helper.success("해냈습니다!");
};
