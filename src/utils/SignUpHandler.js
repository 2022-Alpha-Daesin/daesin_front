import toast from "react-hot-toast";

const SignUpHandler = (e) => {
  if (e.major_id.length === 0) {
    toast.error("전공을 선택해주세요. 😭");
  }
  if (e.grade.length === 0) {
    toast.error("학년을 입력해주세요. 😭");
  }
  if (e.nickname.length === 0) {
    toast.error("닉네임을 입력해주세요. 😭");
  }

  if (e.password1.length === 0) {
    toast.error("비밀번호를 입력해주세요. 😭");
  } else if (e.password1 !== e.password2) {
    toast.error("비밀번호가 일치하지 않습니다. 😭");
  } else if (!isNaN(e.password1)) {
    toast.error("비밀번호는 숫자로만 작성될 수 없습니다. 😭");
  } else if (e.password1.length < 8) {
    toast.error("비밀번호는 8자 이상이어야 합니다. 😭");
  }
  if (e.email.length === 0) {
    toast.error("이메일을 입력해주세요. 😭");
  } else if (!e.email.includes("@kookmin.ac.kr")) {
    toast.error("국민대학교 이메일을 입력해주세요. 😭");
  }
};

export default SignUpHandler;
