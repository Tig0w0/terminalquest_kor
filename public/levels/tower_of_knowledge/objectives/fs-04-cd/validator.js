module.exports = async function (helper) {
  try {
    const pwd1 = helper.getNormalizedInput("pwd1", { lowerCase: false });
    const pwd2 = helper.getNormalizedInput("pwd2", { lowerCase: false });

    if (!pwd1) {
      helper.fail("해킹 인터페이스에 <em>첫 번째</em> 현재 작업 디렉터리의 파일 경로를 입력해야 합니다!");
      return;
    }
    if (!pwd2) {
      helper.fail("해킹 인터페이스에 <em>두 번째</em> 현재 작업 디렉터리의 파일 경로를 입력해야 합니다!");
      return;
    }

    const pathParts1 = helper.getFilePathPartsArray(pwd1);
    const expectedPathParts1 = ["cedric", "robot_thoughts"];
    if (!helper.areArrayContentsEqual(pathParts1, expectedPathParts1)) {
      helper.fail(`입력한 경로 "${pwd1}"이(가) "robot_thoughts" 디렉터리로 이동한 뒤의 예상 경로와 일치하지 않습니다.`);
      return;
    }

    const pathParts2 = helper.getFilePathPartsArray(pwd2);
    const expectedPathParts2 = ["cedric"];
    if (!helper.areArrayContentsEqual(pathParts2, expectedPathParts2)) {
      helper.fail(`입력한 경로 "${pwd2}"이(가) "fog_owl_computations.csv" 파일로 이동하려 한 뒤의 예상 경로와 일치하지 않습니다.`);
      return;
    }
  } catch (err) {
    helper.fail(err);
    return;
  }

  helper.success(`
    만세! 새 현재 작업 디렉터리를 모두 정확히 알아냈습니다!
`);
};
