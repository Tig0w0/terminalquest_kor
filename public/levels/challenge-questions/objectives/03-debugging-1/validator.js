const assert = require("assert");
const isEqual = require("lodash.isequal");
const assertTestCase = (fn) => (input, expected) => {
  const result = fn(input);
  const message = `<div style="text-align:left;overflow: scroll;"><span class="highlight">예상 결과</span><pre>${JSON.stringify(expected, undefined, 2)}</pre></pre><span class="highlight">실제 결과</span><pre>${JSON.stringify(result, undefined, 2)}</pre></div>`;
  if (!isEqual(result, expected)) throw new Error(message);
};
module.exports = async function (helper) {
  try {
    const context = await helper.pullVarsFromQuestIdeUserCodeLocalScope(["monitorReservoirs"], "03-debugging-1");
    assert(context.monitorReservoirs, "monitorReservoirs 함수가 정의되지 않았습니다!");
    const test = assertTestCase(context.monitorReservoirs);
    test([
      { id: 623, label: "Reservoir-2A-East-Wing", radiation: { radsCountCurrent: "190", monitorSystemGuid: "8453b2e7-0cf3-43fa-8909-cab00f75d413" }, type: "raw", contents: 83 },
      { id: 21, label: "Reservoir-2B-East-Wing", radiation: { radsCountCurrent: "48", monitorSystemGuid: "55eee6a5-5fb9-4118-b015-7f656b845465" }, type: "distilled", contents: 120 },
      { id: 617, label: "Reservoir-3F-North-Wing", radiation: { radsCountCurrent: "39", monitorSystemGuid: "bf0b28be-ae90-406a-8f90-c556b0056f2e" }, type: "raw", contents: 100 },
      { id: 100, label: "Reservoir-3G-North-Wing", radiation: { radsCountCurrent: "712", monitorSystemGuid: "e1e73107-f0ad-495d-a11c-e730543f1ad5" }, type: "raw", contents: 98 },
    ], [
      { id: 617, label: "Reservoir-3F-North-Wing", radiation: { radsCountCurrent: "39", monitorSystemGuid: "bf0b28be-ae90-406a-8f90-c556b0056f2e" }, type: "raw", contents: 100 },
    ]);
  } catch (err) { helper.fail(err); return; }
  helper.success("해냈습니다!");
};
