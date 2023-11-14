try {
  var romanization = require("../romanization"),
    assert = require("assert");
} catch (e) {}

[
  ["안녕", "ahn-nyong"],
  ["시간", "shee-gahn"],
  ["축구", "chug-ggu"],
  ["야구", "yah-gu"],
  ["탁구", "tahg-ggu"],
  ["김치", "geem-chee"],
  ["원숭이", "won-sung-ee"],
  ["댄", "daen"],
  ["강남", "gahng-nahm"],
  ["수연", "su-yon"],
  ["숭실", "sung-sheel"],
  ["열쇠", "yol-swae"],
  ["참치", "chahm-chee"],
  ["양파", "yahng-pah"],
  ["괜잖아", "gwaen-chahn-ah"],
  ["이따 봐", "ee-ttah- -bwah"],
  ["없어", "op-sso"],
  ["합니다", "hahm-nee-dah"],
  ["합시다", "hahp-shee-dah"],
  ["먹을거야", "mo-geul-go-yah"],
  ["슈퍼", "shyu-po"],
].forEach(function (test_data) {
  input = test_data[0];
  expected = test_data[1];
  assert.equal(romanization.romanize(input), expected);
});
