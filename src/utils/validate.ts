import { ValidateRule } from "../types/common";

export const RequireRule: ValidateRule = {
  rule: /.+/,
  match: true,
  message: '필수 정보입니다.',
};


export const NameValidate: ValidateRule = {
    rule: /^[가-힣]{2,6}$/,
    match: true,
    message: '이름은 한글 2~6자까지 사용 가능합니다.',
  };

