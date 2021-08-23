type ValidationResult = {
  result: boolean;
  validationError: string;
};
export default class Validate {
  static Profile(data: any): ValidationResult {
    //if (data.aboutMeShort == null || data.aboutMeShort == "")
    //    return { result: false, validationError: "Profile must have - short about me" }

    return { result: true, validationError: '' };
  }
}
