// convert vietname to english
function convertVietnameseToEnglish(str) {
  const vietnameseToEnglishMap = {
    'á|à|ả|ã|ạ|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ': 'a',
    'Á|À|Ả|Ã|Ạ|Ă|Ắ|Ằ|ẲẴ|Ặ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ': 'A',
    đ: 'd',
    Đ: 'D',
    'é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ': 'e',
    'É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ': 'E',
    'í|ì|ỉ|ĩ|ị': 'i',
    'Í|Ì|Ỉ|Ĩ|Ị': 'I',
    'ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ': 'o',
    'Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ': 'O',
    'ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự': 'u',
    'Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự': 'U',
    'ý|ỳ|ỷ|ỹ|ỵ': 'y',
    'Ý|Ỳ|Ỷ|Ỹ|Ỵ': 'Y',
  };

  for (const [pattern, replacement] of Object.entries(vietnameseToEnglishMap)) {
    const regex = new RegExp(pattern, 'g');
    str = str.replace(regex, replacement);
  }

  return str;
}

const input = document.getElementById('input');
input.addEventListener('change', function (event) {
  const value = event.target.value;
  const result = convertVietnameseToEnglish(value);
  document.getElementById('result').innerHTML = result;
});
