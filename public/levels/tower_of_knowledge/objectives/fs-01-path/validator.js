module.exports = async function (helper) {
  try {
    const filePath = helper.getNormalizedInput("filePath", {
      lowerCase: false,
    });

    if (!filePath) {
      helper.fail("해킹 인터페이스에 파일 경로를 입력해야 합니다!");
      return;
    }

    const pathParts = helper.getFilePathPartsArray(filePath);
    const expectedPathParts = ["cedric", "robot_thoughts", "youtube_video.mp4"];

    if (!helper.areArrayContentsEqual(pathParts, expectedPathParts)) {
      helper.fail(
        `입력한 파일 경로 "${filePath}"이(가) 세드릭의 YouTube 동영상 파일 경로 "${helper.formatPathPartsForOs(
          ...expectedPathParts
        )}"와 일치하지 않습니다.`
      );
      return;
    }
  } catch (err) {
    helper.fail(err);
    return;
  }

  helper.success(`
  세드릭의 YouTube 동영상을 찾았습니다! 세드릭이 정말 기뻐하겠군요!
`);
};
